import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import './App.css';
import Login from './Components/Login-signUp';
import axios from 'axios';
import MainHome from './Components/not-logged-in';
import Footer from './Components/Footer';
import NewBid from './Components/NewBid';
import Bid from './Components/Bid';
//import NavBar from './Components/NavBar';
import Home from './Components/Home';
//import LazyLoad from 'react-lazyload';
import {ToastContainer} from 'react-toastify';
import Profile from './Components/Profile';



class App extends React.Component {

  state = {username : '' , email : '' , password : '' , logedIn : false,id:''};
  
  changeState = (usernam , email , password) => {
    this.setState({username : usernam , email : email , password : password , logedIn : true});
    // console.log(this.state);
  }
  logout = () => {
    // console.log('Hello World');
    localStorage.removeItem('cool-jwt');
    this.setState({logedIn : false , username : null , email : null});
    window.location.replace('/')
  }
  componentDidMount() {

    const token = localStorage.getItem('cool-jwt');
    // console.log(token);
    if(!token) {
      this.setState({
        logedIn : false
      });
    } else {
      const url = 'http://localhost:8000/post/getuser';
      axios.get(url , {headers : {authorization : 'Bearer ' + token}})
      .then(res => {
        console.log(res);
        this.setState({
          email : res.data.split(',')[0],
          id:res.data.split(',')[1],
          logedIn : true
        });
      })
      .catch(err => {
        localStorage.removeItem('cool-jwt');
        this.setState({
          logedIn : false
        });
      })
    }
  }
  render() {
    if(!this.state.logedIn) {
      return(
        <>
        <ToastContainer
            position = "bottom-center"
            autoClose = {5000}
            hideProgressBar = {false}
            newestOnTop = {false}
            closeOnClickrtl = {false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
          <ToastContainer />
          <BrowserRouter>
            <Route exact path = '/' component = {MainHome} />
            <Route exact path = '/login' render = {(props) => <Login {...props} 
            logedIn = {this.state.logedIn} 
            changeState = {this.changeState}
            />} />
          </BrowserRouter>
        </>
      )
    } else {
      return(
        <>  
        <ToastContainer
            position = "bottom-center"
            autoClose = {5000}
            hideProgressBar = {false}
            newestOnTop = {false}
            closeOnClickrtl = {false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
          <ToastContainer />
          <BrowserRouter>
            {/*<Route path = '/' render = {(props) => <NavBar {...props} email = {this.state.email} logout = {this.logout}/>}/>*/}
            <Route exact path = "/" render = {(props) => <Home {...props} email = {this.state.email} id={this.state.id} logout = {this.logout}/>}/>
            <Route exact path = "/newBid" render = {(props) => <NewBid {...props} email = {this.state.email}/>}/>
            <Route exact path = "/bid/:bid_id" render = {(props) => <Bid {...props} email = {this.state.email}/>}/>
            <Route path = "/profile" render = {(props) => <Profile {...props} email = {this.state.email} logout = {this.logout}/>}/>
          </BrowserRouter>
          <Footer />
        </>
      )
    }
  }
};

export default App;
