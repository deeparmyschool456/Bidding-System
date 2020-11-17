import React from 'react';
import '../Css/NewBid.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; 

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
                
                    <form style={{border:"0px"}} className = "Form" onSubmit={this.handleSubmit}>
                        <label>
                        Crop Name  <input  type = "text" placeholder = "Crop Name" name = "crop" onChange = {this.handleChange} autoComplete = "off"/>
                        </label>
                        <label>
                        Crop's Weight(kg)  <input  type = "number" placeholder = "Crop's Weight" name = "weight" min="0" onChange = {this.handleChange} autoComplete = "off"/>
                        </label>
                        <label>
                        BasePrice( per kg )  <input type = "number" placeholder = "0.0" name = "basePrice" min="0" onChange = {this.handleChange} autoComplete = "off"/>    
                        </label>
                        <label>
                        Bid Open Duration(1-5 Days)  <input type = "number" placeholder = "Enter number of Days" min="1" max="5" name = "bidtime" onChange = {this.handleChange} autoComplete = "off"/>    
                        </label>
                        <label>
                        Status of Crop  <input type = "text" placeholder = "Crop's Condition" name = "comments" onChange = {this.handleChange}/>
                        </label>
                        <label>
                        City  <input type = "text" placeholder = "City / town" name = "city"  onChange = {this.handleChange} autoComplete = "off"/>
                        </label>
                        
                        <button type = "submit"> Make a Bid </button>
                    </form>
                </div>
                
                    </div>    
                </div>
            </div>
        )
    }
}
export default NewBid;