import React from 'react';
import '../Css/Home.css'
import { FaFacebookSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import axios from 'axios';

class Login extends React.Component {

    state = {username : "" , password : "" , email : ""};
    
    handleClickLogIn = (event) => {
        event.preventDefault();
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }
    handleClickSignUp = (event) => {
        event.preventDefault();
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
    }
    handleLoginSubmit = (event) => {
        event.preventDefault(); 
        // this.props.changeState(this.state.username , this.state.email , this.state.password);
        const email = this.state.email;

        if(this.state.email.length === 0 || this.state.password.length === 0) {
            alert('Feild Can \'t be Empty ');
        } else {
            const data = {
                email : this.state.email , 
                password : this.state.password
            };
            const url = 'http://localhost:8000/post/gettoken';
            axios.post(url , data)
            .then(res => {
                if(res.data) {
                    localStorage.setItem('cool-jwt' , res.data);
                    this.props.changeState(this.state.username , this.state.email , this.state.password);
                    this.props.history.push('/');
                } else {
                    alert('Wrong Credentials');
                }
            })
        }
    }
    handleSignupSubmit = (event) => {
        event.preventDefault();
        const url = 'http://localhost:8000/post';
        const data = 
        {
            username : this.state.username , 
            email : this.state.email ,
            password : this.state.password
        };
        axios.post(url , data).then(res => {
            console.log(res);
            if(res.data !== 0) alert('User Already There');
            else {
                alert('Succesfull SignUp');
                const container = document.getElementById('container');
                container.classList.add("right-panel-active");
            }
        }).catch(err => {
            alert('Unexpected error Occured ... Please Try Again');
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    render() {
        return(
            <div className = "Body">
                <h2>Welcome To Our WebSite</h2>
                <div className = "container" id="container">
                    <div className = "form-container sign-up-container">
                        <form>
                            <h1>Create Account</h1>
                            <div className = "social-container">
                                <a href="#" className="social"><FaFacebookSquare/></a>
                                <a href="#" className="social"><SiGmail/></a>
                            </div>
                            <span style = {{fontFamily : "cursive" , fontSize : "15px"}} >or use your email for registration</span>
                            <input type="text" placeholder="Name" name = "username" onChange = {this.handleChange} autoComplete = "off"/>
                            <input type="email" placeholder="Email" name = "email" onChange = {this.handleChange} autoComplete = "off"/>
                            <input type="password" placeholder="Password" name = "password" onChange = {this.handleChange} autoComplete = "off"/>
                            <button onClick = {this.handleSignupSubmit}>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit = {this.handleLoginSubmit}>
                            <h1>Log in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><FaFacebookSquare className = "fab"/></a>
                                <a href="#" className="social"><SiGmail className = "fab"/></a>
                            </div>
                            <span style = {{fontFamily : "cursive" , fontSize : "15px"}}>Login via Your Accounts</span>
                            <input type="email" placeholder="Email" name = "email" onChange = {this.handleChange} autoComplete = "off"/>
                            <input type="password" placeholder="Password" name = "password" onChange = {this.handleChange} autoComplete = "off"/>
                            <a href="#">Forgot your password?</a>
                            <button onClick = {this.handleLoginSubmit}>Log In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id = "signIn" onClick = {this.handleClickLogIn}>Log In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick = {this.handleClickSignUp}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;