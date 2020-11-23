import React from 'react';
import '../Css/Navbar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Avatar from '../Image/12055105.jpg';
import '../Css/Card.css';
import NavBar from './NavBar';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({ accessKey: "7mt2ghAUr-C5TTQv5VUDjAleyCBt92avSVPd75ZVsMU" });


var timeInter;

const calculateTimeLeft = (data) => {
    var timeLeft=[];  

    for(let i=0;i<data.length;i++)
    {
        if(data[i].EndDate && data[i].is_closed==0)
        {
            var yy=data[i].EndDate.substring(0,4);
            var mm=data[i].EndDate.substring(5,7);
            var dd=data[i].EndDate.substring(8,10);
            
            var hour=data[i].EndDate.substring(11,13);
            var min=data[i].EndDate.substring(14,16);
            var sec=data[i].EndDate.substring(17,19);

            let difference = +new Date(yy,mm-1,dd,hour,min,sec) - +new Date();
            let time = {};

            if (difference > 0) {
                time = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24)+5,
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };

                if((time.minutes+20)>59)
                {
                    time.minutes=(time.minutes+20)%60;
                    
                    if(time.hours==23)
                    {
                        time.days+=1;
                        time.hours=0;
                    }
                    else
                    {
                        time.hours+=1;
                    }
                }
                else
                {
                    time.minutes+=20;
                }
            }
            else
            {
                console.log("Duration got finished.",data[i]);
                const url = 'http://localhost:8000/post/closebid';
                const iddata={
                    
                    id:data[i].Crop_ID
                }
                axios.post(url , iddata).then(res => {
                    data[i].is_closed=1
                })
            }

            timeLeft.push(time);
        }
        else
        {
            timeLeft.push({});
        }

    }

    return timeLeft;
    
}

class Home extends React.Component { 
    
    state = { 
        data:{
            bids : [],
            images:[],
            timeLeft:[]
        },
        content:1
    }
    componentDidMount = () => {
        console.log("CC");
        const url = 'http://localhost:8000/post/getallbid';
            
        axios.get(url).then(async res => {
            console.log(res.data);
            var image_data=[];
            
            var counter=0;

            if(res.data.length==0)
            {
                this.stopInterval();
                this.setState({
                    data:{
                        bids : [],
                        images:[],
                        timeLeft:[]
                    },
                    content:1
                });
            }
            else
            {
            for(let i=0;i<res.data.length;i++)
            {
                await unsplash.search.photos(res.data[i].crop, 1, 10)
                    .then(toJson)
                    .then(json => {
                        counter++;
                        //console.log(json.results.length);
                        image_data.push(json.results[1].links.download);
                        
                        if(counter==res.data.length)
                        {
                            this.setState({
                                data:{
                                    bids : res.data,
                                    images:image_data
                                },
                                content:1
                            });

                            this.stopInterval();
                            this.updatetime(res.data,image_data,1);
                        }    
                    })
                    
            }
        }
             
        })
    }

    
    change = (event) => {
        console.log("Changing");
        
        if(event.target.value == 1)
        {
            console.log("In event 1");
            const data = {
                email : this.props.email
            }
            console.log(data);
            const url = 'http://localhost:8000/post/getmycrop';

            
            axios.post(url , data).then(async res => {
                
                console.log(res.data);
                var image_data=[];
                var counter=0;
                
                if(res.data.length==0)
                {
                    this.stopInterval();
                    this.setState({
                        data:{
                            bids : [],
                            images:[],
                            timeLeft:[]
                        },
                        content:2
                    });
                }
                else
                {
                for(let i=0;i<res.data.length;i++)
                {
                    await unsplash.search.photos(res.data[i].crop, 1, 10)
                        .then(toJson)
                        .then(json => {
                            counter++;
                            image_data.push(json.results[1].links.download);
                            
                            if(counter==res.data.length)
                            {
                                this.setState({
                                    data:{
                                        bids : res.data,
                                        images:image_data
                                    },
                                    content:2
                                });
                                console.log(res.data);
                                this.stopInterval();
                                this.updatetime(res.data,image_data,2);
                            }    
                        })
                }
                } 
                })
            
        }
        else if(event.target.value == 2)
        {
            console.log("In event 3");
            const data = {
                email : this.props.email
            }
            const url = 'http://localhost:8000/post/yourstatus';
            
            axios.post(url , data).then(async res => {
                console.log(res.data);
                var image_data=[];
                var counter=0;

                if(res.data.length==0)
                {
                    console.log("YY");
                    this.stopInterval();
                    await this.setState({
                        data:{
                            bids : [],
                            images:[],
                            timeLeft:[]
                        },
                        content:3
                    });
                    console.log(this.state);
                }
                else
                {
                for(let i=0;i<res.data.length;i++)
                {
                    await unsplash.search.photos(res.data[i].crop, 1, 10)
                        .then(toJson)
                        .then(json => {
                            counter++;
                            image_data.push(json.results[1].links.download);
                            
                            if(counter==res.data.length)
                            {
                                this.setState({
                                    data:{
                                        bids : res.data,
                                        images:image_data
                                    },
                                    content:3
                                });
                                this.stopInterval();
                                this.updatetime(res.data,image_data,3);
                            }    
                        })
                }
            } 
            }).catch(err => {
                console.log(err);
            })
        }
    }
    
    updatetime =(data,image,cont)=>{
        console.log(data,image);

        timeInter=setInterval(()=>{
        var result=calculateTimeLeft(data);
        //console.log(cont);
        this.setState({
            data:{
                bids:data,
                images:image,
                timeLeft:result
            },
            content:cont

        })
        },1000);
    }

    stopInterval=()=>{
        clearInterval(timeInter);
    }

    closebid(id)
    {
        const url = 'http://localhost:8000/post/closebid';
            
        const data={
            id:id
        }
            axios.post(url , data).then(res => {
                
                toast.success("Bid Closed Successfully!", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                
                window.location.reload();
                 
            })
    }

    
    render() {

        const buttonLi = {backgroundColor:"white" , marginLeft : "7px", fontSize:"15px" , cursor : "pointer"};
        const buttonLi2 = {backgroundColor:"#05eafa" , marginLeft : "7px", fontSize:"15px" , cursor : "pointer"};
        
        const { data,content } = this.state;
        console.log(content);
        var counter=0;
        const bidList = data.bids.length ? (

            data.bids.map(bid => {
            
            counter++;
            return(  
                <div className="card MainCard" key = {bid.Crop_ID} style = {{width: "18rem", height:"470px" , margin:"20px"}}>
                    <img className = "card-img-top cardimage" src ={this.state.data.images[counter-1]} width="120px" height="180px"></img>
                    <div className = "card-body text-center">
                        <h5 className = "card-title" style = {{marginTop:"-15px"}}><b> {bid.crop} </b></h5>
                        <p style = {{marginTop : "-10px" , fontWeight : "bold"}}> from : {bid.City} </p>
                        <p className = "card-text" style = {{marginTop : "-10px"}}><b>Status of Crop :</b> {bid.comments}</p>
                        <p style = {{marginTop:"-20px"}}><b>BasePrice : </b> {bid.baseprice} per Kg</p>
                        
                        
                        {
                            bid.status==1 && 
                            <p style = {{marginTop : "-20px"}}><b>CurrentBid : </b>{bid.Currentbid} per Kg<br></br> by {bid.username}</p>
                        }
                        {
                            bid.status==0 && 
                            <p style = {{marginTop : "-20px"}}><b>CurrentBid : No Bid Placed</b></p>
                        }
                        {
                            this.state.data.timeLeft && this.state.data.timeLeft[counter-1].days>=0 && 
                            <p style = {{marginTop : "-20px"}}><b>Bid Closing in<br></br> </b><b>{this.state.data.timeLeft[counter-1].days}</b> days <b>{this.state.data.timeLeft[counter-1].hours}</b> hours <b>{this.state.data.timeLeft[counter-1].minutes}</b> min <b>{this.state.data.timeLeft[counter-1].seconds}</b> sec </p>            

                        }
                            
                        {
                            this.state.content==1 && 
                            <Link to = {'/bid/' + bid.Crop_ID} className = "btn btn-primary text-center" style = {{marginTop : "-20px"}}> Place Your Bid </Link>
                        }
                        {
                            this.state.content==2 && bid.is_closed==0 && 
                            <Link onClick={()=>{this.closebid(bid.Crop_ID)}} className = "btn btn-primary text-center" style = {{marginTop : "-20px"}}> Close Your Bid </Link>
                        }
                        {
                            this.state.content==2 && bid.is_closed==1 && 
                            <Link className = "btn btn-primary text-center" style = {{marginTop : "-20px"}}>Bid Already Closed </Link>
                        }
                        {
                            this.state.content==3 && bid.is_closed==0 && bid.buyer_id==this.props.id &&
                            <Link className = "btn btn-primary text-center" style = {{marginTop : "-20px",fontSize:"13px"}}>You are leading the Bid </Link>
                        }
                        {
                            this.state.content==3 && bid.is_closed==0 && bid.buyer_id!=this.props.id &&
                            <Link to = {'/bid/' + bid.Crop_ID} className = "btn btn-primary text-center" style = {{marginTop : "-20px",fontSize:"13px"}}>You are loosing Bid.Place More Bid </Link>
                        }
                        {
                            this.state.content==3 && bid.is_closed==1 && bid.buyer_id==this.props.id &&
                            <Link className = "btn btn-primary text-center" style = {{marginTop : "-20px"}}>You won the Bid </Link>
                        }
                        {
                            this.state.content==3 && bid.is_closed==1 && bid.buyer_id!=this.props.id &&
                            <Link className = "btn btn-primary text-center" style = {{marginTop : "-20px"}}>You lost the Bid </Link>
                        }
                    </div>
                </div>  
            )}
                    
        )
        ) 
        : 
        (<div style = {{ width : "150%"}}>
            <h1 style = {{textAlign : "center"}}>No Bids to Show .....</h1>
            <Link to = {'/newbid'}>
                <button style = {{height : "90px" , width : "200px" , marginLeft : "40%" , marginTop : "20px" , borderRadius : "50px"}}>Create a bid</button>
            </Link>
        </div>);
        return (
            <div>
            <NavBar logout = {this.props.logout}/>
                <div className = "MainBody">
                    <div className = "leftMenu text-center" style={{marginTop:"22px"}} >
                    <img src = {Avatar} className = "Avatar text-center" style = {{height : "200px",marginLeft:"5px"}}/> 
                        <ul>
                            <a><li style={{backgroundColor : "white" , marginLeft : "7px"}}><Link to = {'/newBid'}>Sell Your Crop</Link></li></a>
                            
                            {   this.state.content==2 && 
                                <a><li style={{backgroundColor : "white" , marginLeft : "7px"}} value="1" style = {buttonLi2} onClick={this.change}>Status of Your Crops</li></a>
                            }
                            {
                                (this.state.content==1 || this.state.content==3) &&
                                <a><li style={{backgroundColor : "white" , marginLeft : "7px"}} value="1" style = {buttonLi} onClick={this.change}>Status of Your Crops</li></a>
                            }
                            {
                                this.state.content==3 &&
                                <a><li value="2" style = {buttonLi2} onClick={this.change}>Status of Your Bids</li></a>
                            }
                            {
                                (this.state.content==1 || this.state.content==2) &&
                                <a><li value="2" style = {buttonLi} onClick={this.change}>Status of Your Bids</li></a>
                            }
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