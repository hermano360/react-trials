import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';
import OrderButton from '../../images/order.png';
import Hamburger from '../user/hamburger';

class App extends Component {
  renderIfLoggedIn(){
    return(
      <div>      
        <div className='logo'><img src={logo} alt="Budsy"/></div>        
        <img className="_order_now_btn" src={OrderButton} alt="Order Now"/>
        <p className='tagline'>Use the button above to order your high</p>
      </div>
      )
  }
  renderIfNotLoggedIn(){
    return(
        <div>      
          <div className='logo'><img src={logo} alt="Budsy"/></div>
          <h1 className='heading'>Cannabis. your way</h1>    
          <p className='tagline'>A one click perfect high that is personalized to you.</p>    
          <div className="buttons-box">
            <Link to='/register'>Sign up now</Link>
            <Link to='/login' className="login">Login</Link>         
          </div>
        </div>
      )
  }
  render() {      
    if(localStorage.getItem('userAuthToken') === '' || localStorage.getItem('userAuthToken') === null){
      return(
        <div className='content' id="homePage">           
          {this.renderIfNotLoggedIn()}
        </div>
      )
    }else{
      return(        
        <div className='content _loggedIn' id="homePage">
          <div className="_hamburger" onClick={Hamburger}><span className="_top_line"></span><span className="_middle_line"></span><span className="_bottom_line"></span></div> 
          {this.renderIfLoggedIn()}
        </div>
      )
    } 
  } 
}

export default App;