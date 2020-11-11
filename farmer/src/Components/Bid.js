import React from  'react';
import axios from 'axios';
import '../Css/Bid.css';

class Bid extends React.Component {
    state = {
        curBid : 0,
        bidPlaced : 0,
        buyer_id : null ,
        city : '' ,
        comments : '' ,   
        crop : ''  ,
        baseprice : 0  
    }
    componentDidMount() {
        const data =  { id : this.props.match.params.bid_id};
        const url = 'http://localhost:8000/post/getprice';

        axios.post(url , data).then(res => {
            console.log(res.data[0]);
            this.setState({
                buyer_id : res.data[0].buyer_id,
                curBid : res.data[0].current_bid,
                city : res.data[0].city,
                crop : res.data[0].crop,
                comments : res.data[0].comments,
                baseprice : res.data[0].baseprice
            });
            // if(!res.data.buyer_id) console.log('null');
             console.log(this.state);
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit = (e) => { 
        if(this.state.bidPlaced < this.state.curBid) alert('Place a Higher Bid');
        else {
            const url = 'http://localhost:8000/post/placebid';
            const data = {bidplaced : this.state.bidPlaced , email : this.props.email , id : this.props.match.params.bid_id};

            axios.post(url , data).then(res => {
                this.props.history.push('/');
            }).catch(e =>{
                alert('Error Occured');
            })
        }
    }
    render()
    {
        const id = this.props.match.params.bid_id;
        const {curBid , bidPlaced , buyer_id , city , comments , crop , baseprice} = this.state;
        // console.log(curBid);
        return(
            <>
                <div className = "MainBody1 form-group">
                   <ul>
                        <li>Crop : {crop}</li>
                        <li>From : {city}</li>
                        <li>Base Price : {baseprice}</li>
                        <li>Current Bid : {curBid} </li>
                        <div className = "bids">
                            <label> Place Bid</label>
                            <input type = "number" name = "bidPlaced" onChange = {this.handleChange}/>
                        </div>
                        <button onClick = {this.handleSubmit}>Place</button>
                   </ul>
                </div>
            </>
        )
    }
}
export default Bid;