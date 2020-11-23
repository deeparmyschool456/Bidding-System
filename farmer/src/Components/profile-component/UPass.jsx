import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

class UPass extends React.Component {
    state = {
        password : '' ,
        confirm : ''
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
        const {password , confirm} = this.state;
        if(password!=confirm)
        {
            toast.error("New Password and Confirm Password Do not Match!", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else{
            const url = 'http://localhost:8000/post/upassword';
            
            const data={
                password:password,
                email:this.props.email
            }

            axios.post(url,data).then(
                async res=>{
                if(res.data=="success")
                {   
                    
                    toast.success("Password Updated Successfully", {
                        position: "bottom-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    
                    
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
        } 
    }
    render() {
        return(
            <>
                <div style = {{display : "flex" , flexDirection : "row" ,  width : "100%" , height : "100%"}}>
                    <div style = {{flex : "0.7" ,   height : "70%" , display : "flex" , flexDirection : "column" , marginTop : "3%"}}>
                        <div style = {{flex : "1" , paddingLeft : "10%"}}>
                            <h6 style = {{border : "none"}}>New Password :</h6>
                        </div>
                        <div style = {{flex : "1" , paddingLeft : "10%"}}>
                            <h6 style = {{border : "none"}}>Confirm New Password :</h6>
                        </div>
                    </div>
                    <div style = {{flex : "1" , height : "70%" , display : "flex" , flexDirection : "column" , marginTop : "0%"}}>
                        <div style = {{flex : "1"}}>
                            <input type = "password" style = {{marginTop : "10px" , backgroundColor : "#f7f7f7"}} onChange = {this.handleChange} name = "password"/>
                        </div>
                        <div style = {{flex : "1"}}>
                            <input type = "password" style = {{marginTop : "10px", backgroundColor : "#f7f7f7"}} onChange = {this.handleChange} name = "confirm"/>
                        </div>
                    </div>
                    <div>
                        <button type="button" className = "btn btn-outline" style={{marginTop:"45px",marginLeft:"10px"}} onClick = {this.handleSubmit}>Change Password</button>   
                        
                    </div>
                </div>
            </>
        )
    }
};
export default UPass;