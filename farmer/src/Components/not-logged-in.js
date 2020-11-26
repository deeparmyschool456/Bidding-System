import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Image/f.png';
import '../Css/style.css';
import { DiYii } from 'react-icons/di';


const Home = ()=> {
    
    // const style1 = {
    //     opacity : "0.8" , 
    //     display : "block" ,
    //     marginTop : "5%", 
    //     width : "50%"
    // }
    
    return(
        <div>
        {/* <div 
        className="d-flex justify-content-center align-items-center text-center"
        style={ { height: "100%" , width: "100%",marginTop:"80px"}}>
            <div className="text-center">
                <b style={{fontSize:"44px",color:"black"}}>Welcome<br></br>to<br></br> “AGROMART"<br></br> The Market for Farmers</b>
                <br></br>
                
                <br></br>
                
                <br></br>
                <Link to="/login">
                <button>Get Started</button>
                </Link>
            </div>
        </div> */}
        <header class="site-header">
            <nav style = {{background : "transparent"}}>
                <div class="logo">
                    <h1> <DiYii style = {{marginBottom : "10px"}}/> AGROMART</h1>
                </div>
                <div class="menu">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Contact US</li>
                    </ul>
                </div>
            </nav>
            <section>
                <div class="leftside">
                    <img src = {Logo} width = "100px" height = "100px" style = {{marginLeft : "50px"}}/>
                </div>
                <div class="rightside">
                    <h1>THE FARMER PLACE</h1>
                    <p>"JAI JAWAN JAI KISAN"</p>
                    <Link to = {'/login'}><button style = {{border : "none"}}>GET START</button></Link>
                </div>
            </section>
        </header>
    </div>
    );
};

export default Home;
