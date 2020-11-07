import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import './App.css';
import Login from './Components/Login-signUp';
import Home from './Components/Home';
import axios from 'axios';
class App extends React.Component {

  state = {username : '' , email : '' , password : '' , logedIn : false};
  
  changeState = (usernam , email , password) => {
    this.setState({username : usernam , email : email , password : password , logedIn : true});
  }
  logout = () => {
    console.log('Hello World');
    localStorage.removeItem('cool-jwt');
    this.setState({logedIn : false , username : null , email : null});
  }
  componentDidMount() {

    const token = localStorage.getItem('cool-jwt');
    console.log(token);
    if(!token) {
      this.setState({
        username : null ,
        logedIn : false
      });
    } else {
      const url = 'http://localhost:8000/post/getuser';
      axios.get(url , {headers : {authorization : 'Bearer ' + token}})
      .then(res => {
        console.log(res.data);
        this.setState({
          logedIn : true , 
          username : res.data.id , 
          email : res.data.email
        });
      })
      .catch(err => {
        localStorage.removeItem('cool-jwt');
        this.setState({
          logedIn : false , 
          username : null
        });
      })
    }
  }
  render() {
    if(!this.state.logedIn) {
      return(
        <>
          <BrowserRouter>
            <Route path = '/' render = {(props) => <Login {...props} 
            logedIn = {this.state.logedIn} 
            changeState = {this.changeState}
            />} />
          </BrowserRouter>
        </>
      )
    } else {
      return(
        <>  
          <BrowserRouter>
            <Route path = "/" render = {(props) => <Home {...props} email = {this.state.email} logout = {this.logout}/>}/>
            {/* <Route path = "/newBid" component = {}> */}
          </BrowserRouter>
        </>
      )
    }
  }
};

export default App;
