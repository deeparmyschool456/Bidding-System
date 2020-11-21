import React from 'react';
import { DiYii } from 'react-icons/di';
import { AiFillHome } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { GiCaptainHatProfile } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';

class NavBar extends React.Component {

    state = {
        wobble : 0 , 
        username : ''
    }

    render() {
        return(
            <div>
                <h1 style = {{textAlign : "center",marginTop:"20px"}}> AgroMart - Open Bidding System Platform </h1>
                <div style = {{margin : "20px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <nav className = "Navbar navbar navbar-expand-lg navbar-light bg-light" style = {{height : "90px" , borderRadius : "5px"}}>
                        <DiYii className = "Icon" onClick = {() => this.setState({wobble : 1})} onAnimationEnd = {() => this.setState({wobble : 0})} wobble = {this.state.wobble}/>
                        <a className = "navbar-brand" href = "#">AgroMart</a>
                        <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarTogglerDemo02" aria-controls = "navbarTogglerDemo02" aria-expanded = "false" aria-label = "Toggle navigation">
                            <span className = "navbar-toggler-icon"></span>
                        </button>
                        <div className = "collapse navbar-collapse" id = "navbarTogglerDemo02">
                            <ul className = "navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className = "nav-item">
                                    <a className = "nav-link" href = "#">Home</a>
                                </li>
                                <li className = "nav-item">
                                    <a className = "nav-link" href = "#">Contact Us</a>
                                </li>
                            </ul>
                            <div className = "Main" style = {{cursor : "pointer", color : "black"}}>
                                <a href="/"><AiFillHome className = "MainIcons" title = "Home"/></a>
                                <Link to = {'/profile'}><IoMdContacts className = "MainIcons" title = "Your Profile" /></Link>
                                <GiCaptainHatProfile className = "MainIcons" title = "Logout" onClick = {this.props.logout}/>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
export default NavBar;