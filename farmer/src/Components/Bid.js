import React from  'react';
import axios from 'axios';
import '../Css/Bid.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        console.log(data);
        const url = 'http://localhost:8000/post/getprice';

        axios.post(url , data).then(res => {
            console.log(res.data[0]);
            
            this.setState({
                buyer_id : res.data[0].buyer_id,
                curBid : res.data[0].Currentbid,
                city : res.data[0].City,
                crop : res.data[0].crop,
                comments : res.data[0].comments,
                baseprice : res.data[0].baseprice
            });
             
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit = (e) => { 
        if(this.state.bidPlaced <= this.state.curBid || this.state.bidPlaced <= this.state.baseprice ){ 
            
            toast.error("Place a Higher Bid than before", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            const url = 'http://localhost:8000/post/placebid';
            const data = {bidplaced : this.state.bidPlaced , email : this.props.email , id : this.props.match.params.bid_id};

            axios.post(url , data).then(res => {
                this.props.history.push('/');
            }).catch(e =>{
                toast.error("Unexpected Error Occured.Try Again Please!", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }); 
            })
        }
    }
    render()
    {
        const {curBid , city  , crop , baseprice} = this.state;
        console.log(this.state);
        return(
            <>
                {/* <div className = "MainBody1 form-group">
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
                </div> */}
                <div className = "main-body">
                    <div className = "content-div">
                        <h2 style = {{textAlign : "center" , marginTop : "20px" , fontFamily : "cursive"}}>Place Your Bid!</h2>
                        <div className = "c-div">
                            <label>Crop :</label>
                            <label style = {{flex : "2"}}>{crop}</label>
                        </div>
                        <div className = "c-div">
                            <label>From :</label>
                            <label style = {{flex : "2"}}>{city}</label>
                        </div>
                        <div className = "c-div">
                            <label>Base Price :</label>
                            <label style = {{flex : "2"}}>{baseprice}</label>
                        </div>
                        <div className = "c-div">
                            <label>Current Bid :</label>
                            <label style = {{flex : "2"}}>{curBid}</label>
                        </div>
                        <div className = "c-div">
                            <label>Place Bid :</label>
                            <input type = "number" name = "bidPlaced" onChange = {this.handleChange} style = {{flex : "2"}}/>
                        </div>
                        <button onClick = {this.handleSubmit} className = "submit">Place</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Bid;