import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import logo from '../../images/logo_icon.png';
import RegisterForm from './registerForm';
import FacebookLogin from 'react-facebook-login';
// import styles from "./style.css";
const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

class RegisterPage extends Component{
  render(){
    return(
      <div className='content' id="registerPage">
        <div className='logo-icon'><Link to="/"><img src={logo} alt="Budsy"/></Link></div>
        <h1 className='heading'>Create your budsy account</h1>
        <p className='tagline'>You're one step closer to getting your perfect highthat is personalized to you and your preferences.</p>
        <FacebookLogin
          appId="815418658634255"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
          cssClass="a-btn fblogin"
          textButton="Register with facebook" />
	    <p className='oroption'><span>or</span></p>
        <Provider store={store}>
          <RegisterForm></RegisterForm>
        </Provider>        
        <p className='signin'>Don't have an account? <Link to="/login" className='signinlink'>Sign in</Link></p>
      </div>
    )    
  }
}
export default RegisterPage;