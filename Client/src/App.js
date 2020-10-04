import React from 'react';
import './App.css'
import Login from './Components/Login-signUp'
import NavBar from './Components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import LandingHome from './Components/LandingHome'


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
                <Route path='/' render={ (props)=>< NavBar {...props} username={this.state.username} />}/>
                <Route exact path='/' component={LandingHome}></Route>
                <Route exact path='/login' render={ (props)=>< Login {...props} changestate={this.changestate} /> } />
              </div>
            </BrowserRouter>
          )

      }

      
    
    }
}

export default App;
