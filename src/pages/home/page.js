import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import styles from "./style.css";

import logo from '../../images/logo.png';
// import '../../App.css';

class App extends Component {
  toSignUp(){
   // browserHistory.push('/register');
   console.log('redirect to signup')
  }
  toLogin(){
   // browserHistory.push('/login');
   // this.setState({shiv: 'shivjeet'});
   console.log('redirect to login');
  }
  render() {
    return (
      <div className='content' id="homePage">
       <div className='logo'><img src={logo} alt="Budsy"/></div>
        <h1 className='heading'>Cannabis. your way</h1>    
        <p className='tagline'>A one click perfect high that is personalized to you.</p>    
        <div className="buttons-box">
          <Link to='/register'>Sign up now</Link>
          <Link to='/login' className="login">Login</Link>         
        </div>
      </div>
    );
  }
}

export default App;