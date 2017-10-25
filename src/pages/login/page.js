import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import LoginForm from './loginForm';
import logo from '../../images/logo_icon.png';
import FacebookLogin from 'react-facebook-login';
// import styles from "./style.css";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);


class LoginPage extends Component{  
  responseFacebook(response){
    console.log(response.accessToken);

    document.getElementById("_loader").className = '_show';
    var obj = {
      "provider": "facebook",
      "facebook_tok": response.accessToken
    };  
    var data = JSON.stringify(obj);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText)
        var response = this.responseText;        
        if(JSON.parse(response).status === 'Success'){
          localStorage.setItem('userAuthToken', JSON.parse(response).token);
          localStorage.setItem('socialUser', 'true');
          document.getElementById("_loader").className = '';
          window.location.href = '/';
        }else if(JSON.parse(response).status === 'Success'){
            localStorage.setItem('userAuthToken', JSON.parse(response).token);
            localStorage.setItem('socialUser', 'true');
            window.location.href = '/';
        }else{
            document.getElementById("_loader").className = '';
        }        
      }
    });

    xhr.open("POST", "https://budsy-staging.mybluemix.net/api/v0/auth/customer/social/");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data);
  }  
  render(){
    // console.log(localStorage.getItem('userAuthToken'));  
    if(localStorage.getItem('userAuthToken') === '' || localStorage.getItem('userAuthToken') === null){      
      return(
        <div className='content' id="loginPage">      
          <div className='logo-icon'><Link to="/"><img src={logo} alt="Budsy"/></Link></div>  
          <h1 className='heading'>Login to your budsy</h1>
          <Provider store={store}>
            <LoginForm props></LoginForm>
          </Provider>
          <FacebookLogin
          appId="815418658634255"
          fields="name,email"
          callback={this.responseFacebook}
          cssClass="a-btn fblogin" />
           <p className='signup-text'>Don't have an account? <Link to="/register" className="signup">Sign up</Link></p>
        </div>
      )
    }else{
      return(        
        <Redirect to='/'/>        
      )
    }   
  }
}
export default LoginPage;