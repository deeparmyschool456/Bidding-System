import React from 'react';
import '../Css/NewBid.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import Navbar from './NavBar';
import Namaste from '../Image/Namaste.png'

class NewBid extends React.Component {

    state = {
        crop : '' ,
        basePrice : 0.0 ,
        comments : '',
        city : '',
        weight:0.0,
        bidtime:1
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
        
        if(this.state.bidtime>5 || this.state.bidtime<1 )
        {
            toast.error("Please Enter valid Bid Duration Time", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if(crop.length === 0 || basePrice === 0) {
            toast.error("Fields can't be empty", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            const url = 'http://localhost:8000/post/newbid';
            const data = {
                crop : crop ,
                baseprice : basePrice ,
                comments : comments ,
                email : this.props.email ,
                city : city,
                weight:this.state.weight,
                bidtime:this.state.bidtime
            };
            console.log(data);
            axios.post(url , data)
            .then(res => {
                //alert('Added Succesfully!');
                toast.success("Added Succesfully", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                this.props.history.push('/');
            })
            .catch(err => {
                toast.error("Error Occurred ", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
        }
    }
    
    render() {
        return(
            <div>
                <Navbar />
                <div className = "main-div">
                    <div className = "left-div">
                        <div style = {{flex : "1"}}>
                            <img src = {Namaste} width = "100%" height = "100%" className = "Namaste"/>
                        </div>
                        <div style = {{flex : "1" , flexDirection : "column"}}>
                            <h4 style = {{textAlign : "center"}} className = "namo">To Those That Work in Acres,Not in Hours<br></br> <p style={{fontSize:"20px"}}>"We Thank You"</p></h4>
                            
                        </div>
                    </div>
                    <div className = "right-div">
                        <h4 style = {{flex : "0.5" , textAlign : "center" , border : "none" , marginTop : "20px"}}>Upload Your Crop !</h4>
                        <div className = "right-div-content ">
                            <label style = {{flex : "2" , marginTop : "20px"}}>Crop Name : </label>
                            <input  type = "text" placeholder = "Crop Name" name = "crop" onChange = {this.handleChange} autoComplete = "off" style = {{flex  : "3"}}/>
                        </div>
                        <div className = "right-div-content ">
                            <label style = {{flex : "2" , marginTop : "20px"}}>Crop's Quantity (kg) :</label>
                            <input  type = "number" placeholder = "Crop's Quantity" name = "weight" min="0" onChange = {this.handleChange} autoComplete = "off" style = {{flex : "3"}}/>
                        </div>
                        <div className = "right-div-content ">
                            <label style = {{flex : "2" , marginTop : "20px"}}>BasePrice ( per kg ) :</label>
                            <input type = "number" placeholder = "0.0" name = "basePrice" min="0" onChange = {this.handleChange} autoComplete = "off" style = {{flex : "3"}}/>
                        </div>
                        <div className = "right-div-content ">
                            <label style = {{flex : "2" , marginTop : "20px"}}>Bid Open Duration<br/>(1 - 5 Days) :</label>
                            <input type = "number" placeholder = "Enter number of Days" min="1" max="5" name = "bidtime" onChange = {this.handleChange} autoComplete = "off" style = {{flex : "3"}}/>
                        </div>
                        <div className = "right-div-content ">
                            <label style = {{flex : "2" , marginTop : "20px"}}> Status of Crop :</label>
                            <input type = "text" placeholder = "Crop's Condition" name = "comments" onChange = {this.handleChange} autoComplete = "off" style = {{flex : "3"}}/>
                        </div>
                        <div className = "right-div-content ">
                            <label style = {{flex : "2" , marginTop : "20px"}}> City :</label>
                            <input type = "text" placeholder = "City / town" name = "city"  onChange = {this.handleChange} autoComplete = "off" style = {{flex : "3"}}/>
                        </div>
                        <button className = "sbtn" onClick = {this.handleSubmit}>Place A Bid</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewBid;