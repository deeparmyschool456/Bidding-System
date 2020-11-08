import React from 'react';
import '../Css/Home.css'
import { FaFacebookSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { ToastProvider, useToasts } from 'react-toast-notifications'

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
            //alert('Feild Can \'t be Empty ');
            //NotificationManager.success('Message', 'ABC');
            //addToast("Fields cant be empty", { appearance: 'error' })
            NotificationManager.info("Fields can't be empty");
            
            
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
                    NotificationManager.info('Wrong Credentials');
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
            if(res.data.errno) 
                NotificationManager.error("Email/Username already there");    
            
            else {
                
                NotificationManager.info("Successful Signup.Now Login");    
                const container = document.getElementById('container');
                container.classList.add("right-panel-active");
            }
        }).catch(err => {
            console.log("Error:",err);
            NotificationManager.info("Unexpected Error occured.Please Try Again");
            
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    render() {
        return(
            
            <div style={{marginTop:"69px"}} >
                
                <div className = "container" id="container" >
                
                    <div className = "form-container sign-up-container" style={{backgroundColor:"white" }}>
                        <form onSubmit = {this.handleSignupSubmit}>
                            <h1>Create Account</h1>
                            <div className = "social-container">
                                <a href="#" className="social"><FaFacebookSquare/></a>
                                <a href="#" className="social"><SiGmail/></a>
                            </div>
                            <span style = {{fontFamily : "cursive" , fontSize : "15px"}} >or use your email for registration</span>
                            <input type="text" placeholder="Name" name = "username" onChange = {this.handleChange} autoComplete = "off"/>
                            <input type="email" placeholder="Email" name = "email" onChange = {this.handleChange} autoComplete = "off"/>
                            <input type="password" placeholder="Password" name = "password" onChange = {this.handleChange} autoComplete = "off"/>
                            <button type="submit" >Sign Up</button>
                            <NotificationContainer/>
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
                            <button type="submit">Log In</button>
                            <NotificationContainer/>
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