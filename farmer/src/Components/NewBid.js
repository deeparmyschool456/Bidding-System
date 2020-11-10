import React from 'react';
import '../Css/NewBid.css';
import axios from 'axios';

class NewBid extends React.Component {

    state = {
        crop : '' ,
        basePrice : 0.0 ,
        comments : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {

        e.preventDefault();
        const {crop , basePrice , comments} = this.state;
        if(crop.length === 0 || basePrice === 0) {
            alert('Fields Are Empty');
        }
        else {
            const url = 'http://localhost:8000/post/newbid';
            const data = {
                crop : crop ,
                baseprice : basePrice ,
                comments : comments ,
                email : this.props.email
            };
            axios.post(url , data)
            .then(res => {
                alert('Added Succesfully!');
                this.props.history.push('/');
            })
            .catch(err => {
                alert('Error Occured!');
            })
        }
    }
    
    render() {
        return(
            <>
                <h4 style = {{textAlign : "center"}}>Create Your Bid</h4>
                <div className = "myForm">
                    <form className = "Form">
                        <label>
                        Crop Name : <input  type = "text" placeholder = "Crop Type" name = "crop" onChange = {this.handleChange} autoComplete = "off"/>
                        </label>
                        <label>
                        BasePrice( per kg ) : <input type = "number" placeholder = "0.0" name = "basePrice" onChange = {this.handleChange} autoComplete = "off"/>    
                        </label>
                        <label>
                        Status of Crop : <input type = "text" name = "comments" onChange = {this.handleChange}/>
                        </label>
                        <button type = "submit" onClick = {this.handleSubmit}> Make a Bid </button>
                    </form>
                </div>
            </>
        )
    }
}
export default NewBid;