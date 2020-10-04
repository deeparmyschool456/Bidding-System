import React from 'react'
//import '../css/Navbar.css';
import {Link} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import main from '../Assests/main.jpg';

const Home=()=>{
    return(
        <div className="container">
            <img src={main} height="490px"></img>
        </div>
    )
}

export default Home;
