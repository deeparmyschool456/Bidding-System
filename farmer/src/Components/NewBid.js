import React from 'react';
import '../Css/NewBid.css';
import axios from 'axios';
import { DiYii } from 'react-icons/di';
import { AiFillHome } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { GiCaptainHatProfile } from 'react-icons/gi';
import { Link } from 'react-router-dom';

class NewBid extends React.Component {

    state = {
        crop : '' ,
        basePrice : 0.0 ,
        comments : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {

        e.preventDefault();
        const {crop , basePrice , comments} = this.state;
        if(crop.length === 0 || basePrice === 0) {
            alert('Fields Are Empty');
        }
        else {
            const url = 'http://localhost:8000/post/newbid';
            const data = {
                crop : crop ,
                baseprice : basePrice ,
                comments : comments ,
                email : this.props.email
            };
            axios.post(url , data)
            .then(res => {
                alert('Added Succesfully!');
                this.props.history.push('/');
            })
            .catch(err => {
                alert('Error Occured!');
            })
        }
    }
    
    render() {
        return(
            <div>
                <h1 style = {{textAlign : "center"}}> AgroMart - Open Bidding System Platform </h1>
                <div className = "NavBar">
                    <div className = "SearchBar">
                            <DiYii className = "Icons" title = "Open Bidding System"/>
                            <input type = "text" className = "Search" style = {{color : "black"}} placeholder = "Search Here"/>
                    </div>
                    <div className = "Main" style = {{cursor : "pointer", color : "black"}}>
                        <a href="/"><AiFillHome className = "MainIcons" title = "Home"/></a>
                        <IoMdContacts className = "MainIcons" title = "About" />
                        <GiCaptainHatProfile className = "MainIcons" title = "Profile" onClick = {this.props.logout}/>
                    </div>
                </div>
                <div className = "MainBody">
                    <div className = "leftMenu" style = {{backgroundColor : "#fa6461"}}> 
                        <ul>
                            <li style={{backgroundColor : "white" , marginLeft : "10px"}}><Link to = {'/newBid'}>Sell Your Crop</Link></li>
                            <li style={{backgroundColor : "white" , marginLeft : "10px"}}><Link to = {'/'}>Go Home</Link></li>
                            
                            
                        </ul>
                    </div>
                    <div className="MainMenu" style={{background:"transparent"}}>
                        
                <div className = "myForm">
                    <h4 style = {{textAlign : "center",border:"0px"}}>Create Your Bid</h4>
                
                    <form style={{border:"0px"}} className = "Form">
                        <label>
                        Crop Name : <input  type = "text" placeholder = "Crop Type" name = "crop" onChange = {this.handleChange} autoComplete = "off"/>
                        </label>
                        <label>
                        BasePrice( per kg ) : <input type = "number" placeholder = "0.0" name = "basePrice" onChange = {this.handleChange} autoComplete = "off"/>    
                        </label>
                        <label>
                        Status of Crop : <input type = "text" name = "comments" onChange = {this.handleChange}/>
                        </label>
                        <button type = "submit" onClick = {this.handleSubmit}> Make a Bid </button>
                    </form>
                </div>
                
                    </div>    
                </div>
            </div>
        )
    }
}
export default NewBid;