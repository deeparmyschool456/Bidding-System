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
        comments : '',
        city : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    /*
    componentDidMount() {
        console.log(this.props.email , 'heeeeee');
    }
    */
    handleSubmit = (e) => {

        e.preventDefault();
        const {crop , basePrice , comments , city} = this.state;
        if(crop.length === 0 || basePrice === 0) {
            alert('Fields Are Empty');
        }
        else {
            const url = 'http://localhost:8000/post/newbid';
            const data = {
                crop : crop ,
                baseprice : basePrice ,
                comments : comments ,
                email : this.props.email ,
                city : city
            };
            // console.log(data);
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
                        City : <input type = "text" placeholder = "City / town" name = "city"  onChange = {this.handleChange} autoComplete = "off"/>
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