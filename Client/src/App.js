import React from 'react';
import './App.css'
import Login from './Components/Login-signUp'
import NavBar from './Components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import LandingHome from './Components/LandingHome'
import ForgotPassword from './pages/forgotPassword';

class App extends React.Component {

  state={
    loggedin:false,
    username:null
  }

  render(){
    
      if(!this.state.loggedin)
      {
          return(
            <BrowserRouter>
              <div className="Home">
                <Route exact path='/' render={ (props)=>< NavBar {...props} username={this.state.username} />}/>
                <Route exact path='/' component={LandingHome}></Route>
                <Route  path='/login' render={ (props)=>< Login {...props} changestate={this.changestate} /> } />
                <Route path="/forgotpass" component={ ForgotPassword } />
              </div>
            </BrowserRouter>
          )

      }

      
    
    }
}

export default App;
