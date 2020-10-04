import React from 'react';
import '../Css/Home.css'
import { FaFacebookSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

class Login extends React.Component {

    
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
    render() {
        return(
            <>
                <h2>Welcome</h2>
                <div className = "container" id="container">
                    <div className = "form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div className = "social-container">
                                <a href="#" className="social"><FaFacebookSquare/></a>
                                <a href="#" className="social"><SiGmail/></a>
                            </div>
                            <span style = {{fontFamily : "cursive" , fontSize : "15px"}} >or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><FaFacebookSquare className = "fab"/></a>
                                <a href="#" className="social"><SiGmail className = "fab"/></a>
                            </div>
                            <span style = {{fontFamily : "cursive" , fontSize : "15px"}}>Login via Your Accounts</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button>Log In</button>
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
            </>
        )
    }
}
export default Login;