import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';
import OrderButton from '../../images/order.png';
import Hamburger from '../user/hamburger';

class App extends Component {
  constructor(props){
    super();
  }
  renderIfLoggedIn(){
    return(
      <div>      
        <div className='logo'><img src={logo} alt="Budsy"/></div>        
        <img className="_order_now_btn" src={OrderButton} alt="Order Now" onClick={this.handleSubmit}/>
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
  handleSubmit(){
    var authToken = 'Token ' + localStorage.getItem('userAuthToken');
    document.getElementById("_loader").className = '_show';
    var obj = {"device_tag" : "virtual_button"};  
    var data = JSON.stringify(obj);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText)
      }
    });

    xhr.open("POST", "https://budsy-staging.mybluemix.net/api/v0/order/start/");
    xhr.setRequestHeader("authorization", authToken);
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data);
  } 
}

export default App;