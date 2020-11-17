import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

class UPass extends React.Component {
    state = {
        pass : '' ,
        newpass : ''
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
        if(email === this.props.email) {
            const url = 'http://localhost:8000/post/uemail';
        } else {
            toast.error("Email Didn't Match !", {
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
                <h3 style = {{textAlign : "center"}}>Update Password</h3>
                <div style = {{display : "flex" , flexDirection : "row" ,  width : "100%" , height : "100%"}}>
                    <div style = {{flex : "0.7" ,   height : "70%" , display : "flex" , flexDirection : "column" , marginTop : "-5%"}}>
                        <div style = {{flex : "1" , paddingLeft : "10%"}}>
                            <h4 style = {{border : "none"}}>Password :</h4>
                        </div>
                        <div style = {{flex : "1" , paddingLeft : "10%"}}>
                            <h4 style = {{border : "none"}}>New Password :</h4>
                        </div>
                    </div>
                    <div style = {{flex : "1" , height : "70%" , display : "flex" , flexDirection : "column" , marginTop : "-5%"}}>
                        <div style = {{flex : "1"}}>
                            <input type = "email" style = {{marginTop : "10px" , backgroundColor : "#f7f7f7"}} onChange = {this.handleChange} name = "pass"/>
                        </div>
                        <div style = {{flex : "1"}}>
                            <input type = "email" style = {{marginTop : "10px", backgroundColor : "#f7f7f7"}} onChange = {this.handleChange} name = "newpass"/>
                        </div>
                    </div>
                    <div>
                        <button type="button" className = "btn btn-outline-success" onClick = {this.handleSubmit}>Change Password</button>   
                    </div>
                </div>
            </>
        )
    }
};
export default UPass;