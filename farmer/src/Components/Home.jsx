import React from 'react';
import '../Css/Navbar.css';
import { DiYii } from 'react-icons/di';
import { AiFillHome } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { GiCaptainHatProfile } from 'react-icons/gi';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Home extends React.Component { 
    
    state = { bids : [] }
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({
                bids : res.data.slice(0 , 10)
            }); 
        })
    }

    render() {
        const { bids } = this.state;
        const bidList = bids.length ? (
            bids.map(bid => {
                return(
                    <div className = "post" key = {bid.id}>
                        <div className = "postBody"> {bid.body} </div>
                    </div>
                )
            })
        ) : (<div> Loading !!!</div>);
        return (
            <div>
                <h1 style = {{textAlign : "center"}}> Open Bidding System </h1>
                <div className = "NavBar">
                    <div className = "SearchBar">
                            <DiYii className = "Icons" style = {{cursor : "pointer"}} title = "Open Bidding System"/>
                            <input type = "text" className = "Search" placeholder = "Search Here"/>
                    </div>
                    <div className = "Main">
                        <AiFillHome className = "MainIcons" title = "Home"/>
                        <IoMdContacts className = "MainIcons" title = "About" />
                        <GiCaptainHatProfile className = "MainIcons" title = "Profile" onClick = {this.props.logout}/>
                    </div>
                </div>
                <div className = "MainBody">
                    <div className = "leftMenu">
                        <ul>
                            <li><Link to = {'/newBid'}>New Bid</Link></li>
                            <li><Link to = {'/myBids'}>Your Bids</Link></li>
                            <li><Link to = {'/allBid'}>Buy Items</Link></li>
                        </ul>
                    </div>
                    <div className = "MainMenu">
                        {bidList}
                    </div>
                </div>
            </div>
        )
    }
};
export default Home;