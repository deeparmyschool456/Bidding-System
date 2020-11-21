import React from 'react';
import '../Css/Profile.css';
import { DiYii } from 'react-icons/di';
import { ImLocation } from 'react-icons/im';
import { BsStar } from 'react-icons/bs';
import Avatar from '../Image/12055105.jpg';
import axios from 'axios';
import {BrowserRouter , Route , Link} from 'react-router-dom'
import UEmail from './profile-component/UEmail';
import PHome from './profile-component/PHome';
import UPass from './profile-component/UPass';

class Profile extends React.Component {

    state = {
        wobble : 0 , 
        username : ''
    }
    componentDidMount = () => {
        const url = 'http://localhost:8000/post/gDetails';
        const data = {email : this.props.email}
        axios.post(url , data).then(res => {
            this.setState({username : res.data[0].username});
            
        }).catch(err => {
            console.log(err);
        })
    }
    handleClick = (e) => {
        if(e.target.closest("a").getAttribute('value') === 1)
        {
            window.location.href = "/profile";
        }
        else if(e.target.closest("a").getAttribute('value') === 2)
        {
            window.location.href = "/profile/password";
        }
        else if(e.target.closest("a").getAttribute('value') === 3)
        {
            window.location.href = "/profile/email";
        }
    }
    render() {
        return(
            <>
                <div className = "Body">
                    <div className = "Body-Card" style = {{height:"97%"}}>
                        <nav className = "Navbar navbar navbar-expand-lg navbar-light bg-light">
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
                                {/*
                                <form className = "form-inline my-2 my-lg-0">
                                    <input className = "form-control mr-sm-2" type = "search" placeholder = "Search" style = {{width : "250px"}}/>
                                    <button className = "btn btn-outline-success my-2 my-sm-0" type = "submit">Search</button>
                                </form>*/}
                            </div>
                        </nav>
                        <div className = "content">
                        <div className = "child1" style = {{ width : "100%" , height : "80%"}}>
                            <img src = {Avatar} className = "Avatar"/>
                            <div className = "child11">
                                <h6 style = {{textAlign : "center"}}></h6>
                                <div className = "con">
                                    <div className = "conc"><Link to='/newBid'><h5>Sell Crop</h5></Link></div>
                                    <div className = "conc"><Link to='/'><h5>My Bids</h5></Link></div>
                                    <div className = "conc"><Link to='/'><h5>My Crops</h5></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className = "child2" style = {{width : "100%" , height : "100%"}}>
                        <h5 style = {{textAlign : "center" , marginTop : "5px"}}></h5>
                            <div style = {{height : "35%" , margin : "10px" , borderRadius : "10px" , paddingLeft : "50px" , display : "flex" ,  flexDirection : "row"}}>
                                <div style = {{flex : "3"}}>
                                    <h5 style = {{paddingTop : "20px"}}>Hey {this.state.username} !</h5>
                                    <h5 style = {{paddingTop : "20px"}}>Email : {this.props.email}</h5>
                                    <h5><ImLocation className = "Icon"/> Kolkata , India.</h5>
                                </div>
                                <div style = {{flex : "2"}}>
                                    <br></br>
                                    <br></br>
                                    <div style = {{display : "flex" , flexDirection : "row" , alignItems : "center"}}>
                                        <div style = {{marginLeft : "34%"}}>
                                        <BsStar className = "Stara"/></div>
                                        <div><BsStar className = "Stara"/></div>
                                        <div><BsStar className = "Stara" /></div>
                                        <div><BsStar className = "Stara" /></div>
                                        <div><BsStar className = "Star" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className = "child21">
                                <div className = "child211">
                                    <Link value="1" onClick={this.handleClick} className = "box box1" style = {{width : "fit-content" , flex : "1" , textAlign : "center" , textDecoration : "none" , color : "black"}}>About</Link>
                                    <Link value="2" onClick={this.handleClick} className = "box box2" style = {{width : "fit-content" , flex : "1" , textAlign : "center" , textDecoration : "none" , color : "black"}}>Update Password</Link>
                                    <Link value="3" onClick={this.handleClick} className = "box box3" style = {{width : "fit-content" , flex : "1" , textAlign : "center" , textDecoration : "none" , color : "black"}}>Update Email</Link>
                                </div>
                                <div className = "child212">
                                    <BrowserRouter>
                                        <Route exact path = '/profile' component = {PHome} />
                                        <Route exact path = "/profile/email" render = {(props) => <UEmail {...props} email = {this.props.email}/>}/>
                                        <Route exact path = "/profile/password" component = {UPass}/>
                                    </BrowserRouter>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }
};

export default Profile;