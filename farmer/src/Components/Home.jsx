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
    
    state = { bids : [] }
    componentDidMount = () => {
        const url = 'http://localhost:8000/post/getallbid';
            
        axios.get(url).then(res => {
            console.log(res.data);
            this.setState({
                bids : res.data
            }); 
        })
    }

    render() {
        const { bids } = this.state;
        const bidList = bids.length ? (
            bids.map(bid => {
                return(
                     
                        <div className="card" key = {bid.ID} style={{width: "18rem",height:"400px",margin:"20px"}}>
                            <img className="card-img-top" src={Img} height="180px"></img>
                            <div className="card-body text-center">
                                <h5 className="card-title" style={{marginTop:"-15px"}}><b>{bid.crop}</b></h5>
                                <p className="card-text"><b>Status of Crop:</b> {bid.comments}</p>
                                <p style={{marginTop:"-20px"}}><b>Current Bid:</b> {bid.baseprice} per kg</p>
                                <a href="#" className="btn btn-primary text-center ">Place Your Bid</a>
                            
                            </div>
                          </div>  
                    
                )
            })
        ) : (<div> Loading !!!</div>);
        return (
            <div>
                <h1 style = {{textAlign : "center"}}> AgroMart - Open Bidding System Platform </h1>
                <div className = "NavBar">
                    <div className = "SearchBar">
                            <DiYii className = "Icons" title = "Open Bidding System"/>
                            <input type = "text" className = "Search" style = {{color : "black"}} placeholder = "Search Here"/>
                    </div>
                    <div className = "Main" style = {{cursor : "pointer", color : "black"}}>
                        <AiFillHome className = "MainIcons" title = "Home"/>
                        <IoMdContacts className = "MainIcons" title = "About" />
                        <GiCaptainHatProfile className = "MainIcons" title = "Profile" onClick = {this.props.logout}/>
                    </div>
                </div>
                <div className = "MainBody">
                    <div className = "leftMenu" style = {{backgroundColor : "#fa6461"}}> 
                        <ul>
                            <li style={{backgroundColor : "white" , marginLeft : "10px"}}><Link to = {'/newBid'}>Sell Your Crop</Link></li>
                            <li style={{backgroundColor:"white" , marginLeft : "10px"}}><Link to = {'/myBids'}>Status of Your Crops</Link></li>
                            <li style={{backgroundColor:"white" , marginLeft : "10px"}}><Link to = {'/allBid'}>Status of Your Bids</Link></li>
                            
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