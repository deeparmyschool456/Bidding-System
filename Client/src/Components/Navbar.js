import React from 'react'
import logo from '../Assests/e-farm.jpg'

import {Link} from 'react-router-dom';

const Navbar=(props)=>{
    if(!props.username)
    {
        return(
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="/"><img src={logo} height="60px" width="60px" style={{marginTop:"-20px"}}/></a>
                    </div>
                    <ul class="nav navbar-nav" style={{ marginLeft:"1000px"}}>
                        <li style={{backgroundColor:"wheat"}}><a href="/">Home</a></li>
                        <li style={{backgroundColor:"wheat"}}><a href="/login">Login</a></li>
                    </ul>
                </div>
            </nav>
                            
            
        )
    }
    else
    {

    }

}

export default Navbar;