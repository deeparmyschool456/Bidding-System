import React from 'react';
import '../Css/Navbar.css';
import { DiYii } from 'react-icons/di';
import { AiFillHome } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { GiCaptainHatProfile } from 'react-icons/gi';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Img from '../Image/crop-card.webp'


class Home extends React.Component { 
    
    state = { 
        bids : [],
        content:1
    }
    componentDidMount = () => {
        const url = 'http://localhost:8000/post/getallbid';
            
        axios.get(url).then(res => {
            console.log(res.data);
            this.setState({
                bids : res.data,
                content:1
            }); 
        })
    }
    change = (event) => {
        
        if(event.target.value === 1)
        {
            const data = {
                email : this.props.email
            }
            console.log(data);
            const url = 'http://localhost:8000/post/getmycrop';
            
            axios.post(url , data).then(res => {
                // console.log(res.data);
                this.setState({
                bids : res.data,
                content:2
                }); 
            })
            
        }
        else if(event.target.value === 2)
        {
            
        }
    }
    closebid(id)
    {
        const url = 'http://localhost:8000/post/closebid';
            
        const data={
            id:id
        }
            axios.post(url , data).then(res => {
                alert("Bid Closed Successfully");
                window.location.reload();
                 
            })
    }

    render() {

        const buttonLi = {backgroundColor:"white" , marginLeft : "10px", fontSize:"20px" , cursor : "pointer"};
        const { bids } = this.state;
        const bidList = bids.length ? (
            bids.map(bid => {
                return(
                        
                            <div className="card" key = {bid.ID} style = {{width: "18rem", height:"420px" , margin:"20px"}}>
                                <img className = "card-img-top" src = {Img} height="180px"></img>
                                <div className = "card-body text-center">
                                    <h5 className = "card-title" style = {{marginTop:"-15px"}}><b> {bid.crop} </b></h5>
                                    <p style = {{marginTop : "-10px" , fontWeight : "bold"}}> from : {bid.City} </p>
                                    <p className = "card-text" style = {{marginTop : "-10px"}}><b>Status of Crop :</b> {bid.comments}</p>
                                    <p style = {{marginTop:"-20px"}}><b>BasePrice : </b> {bid.baseprice} per Kg</p>
                                    {
                                        bid.status==1 && 
                                        <p style = {{marginTop : "-20px"}}><b>CurrentBid : </b>{bid.Currentbid} per Kg</p>
                                    }
                                    {
                                        bid.status==0 && 
                                        <p style = {{marginTop : "-20px"}}><b>CurrentBid : No Bid Placed</b></p>
                                    }    
                                    {
                                        this.state.content==1 && 
                                        <Link to = {'/bid/' + bid.ID} className = "btn btn-primary text-center" style = {{marginTop : "-20px"}}> Place Your Bid </Link>
                                    }
                                    {
                                        this.state.content==2 && bid.is_closed==0 && 
                                        <Link onClick={()=>{this.closebid(bid.ID)}} className = "btn btn-primary text-center" style = {{marginTop : "-20px"}}> Close Your Bid </Link>
                                    }
                                    {
                                        this.state.content==2 && bid.is_closed==1 && 
                                        <Link className = "btn btn-primary text-center" style = {{marginTop : "-20px"}}>Bid Already Closed </Link>
                                    }
                                </div>
                            </div>  
                    )
                }  
        )) 
        : 
        (<div style = {{border : "1px solid black" , width : "200%"}}>
            <h3 style = {{textAlign : "center"}}>No Bids To show !!</h3>
            <Link to = {'/newbid'}>
                <button style = {{height : "90px" , width : "200px" , marginLeft : "40%" , marginTop : "20px" , borderRadius : "50px"}}>Create a bid</button>
            </Link>
        </div>);
        return (
            <div>
                <div className = "MainBody">
                    <div className = "leftMenu" style = {{backgroundColor : "#fa6461"}}> 
                        <ul>
                            <li style={{backgroundColor : "white" , marginLeft : "10px"}}><Link to = {'/newBid'}>Sell Your Crop</Link></li>
                            <a><li value="1" style = {buttonLi} onClick={this.change}>Status of Your Crops</li></a>
                            <a><li value="2" style = {buttonLi} onClick={this.change}>Status of Your Bids</li></a>
                        </ul>
                    </div>
                    <div className="MainMenu" style={{background:"transparent"}}>
                        {bidList}
                    </div>    
                </div>
            </div>
        )
    }
};
export default Home;