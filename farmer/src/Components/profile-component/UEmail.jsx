import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

class UEmail extends React.Component {
    state = {
        email : '' ,
        newEmail : ''
    }
    // componentDidMount() {
    //     console.log(this.props);Ema
    // }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {email , newEmail} = this.state;
        if(email==newEmail){
            toast.error("New Email is same as Current Mail !", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if(email === this.props.email) {
            const url = 'http://localhost:8000/post/uemail';
            const data={
                email:email,
                update:newEmail
            }

            axios.post(url,data).then(
                async res=>{

                if(res.data=="success")
                {   
                    
                    toast.success("Email Updated Successfully.Please verrify Your Mail Again and Re-Login", {
                        position: "bottom-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    await sleep(2000);
                    
                    this.props.logout();
                    
                }
                else{
                    toast.error("This email belong to some other Account.Try Again with different email!", {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }        
            }).catch(e =>{
                console.log(e);
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
        } else {
            toast.error("Current Email Didn't Match !", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    render() {
        return(
            <>
                <div style = {{display : "flex" , flexDirection : "row" ,  width : "100%" , height : "100%"}}>
                    <div style = {{flex : "0.7" ,   height : "70%" , display : "flex" , flexDirection : "column" , marginTop : "3%"}}>
                        <div style = {{flex : "1" , paddingLeft : "10%"}}>
                            <h6 style = {{border : "none"}}> Current Email :</h6>
                        </div>
                        <div style = {{flex : "1" , paddingLeft : "10%"}}>
                            <h6 style = {{border : "none"}}>New Email :</h6>
                        </div>
                        
                    </div>

                    <div style = {{flex : "1" , height : "70%" , display : "flex" , flexDirection : "column" , marginTop : "0%"}}>
                        <div style = {{flex : "1"}}>
                            <input type = "email" style = {{marginTop : "10px" , backgroundColor : "#f7f7f7"}} onChange = {this.handleChange} name = "email"/>
                        </div>
                        <div style = {{flex : "1"}}>
                            <input type = "email" style = {{marginTop : "10px", backgroundColor : "#f7f7f7"}} onChange = {this.handleChange} name = "newEmail"/>
                        </div>
                    </div>
                    <div>
                        <button type="button" className = "btn btn-outline" style={{marginTop:"45px",marginLeft:"10px"}} onClick = {this.handleSubmit}>Change Email</button>   
                        
                        <p>You will be Logged Out<br></br> after Successful Update </p>
                    </div>
                    
                </div>
            </>
        )
    }
};
export default UEmail;