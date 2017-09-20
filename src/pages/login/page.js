import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import LoginForm from './loginForm';
import logo from '../../images/logo_icon.png';
// import styles from "./style.css";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);


class LoginPage extends Component{
  render(){
    return(
      <div className='content' id="loginPage">      
        <div className='logo-icon'><Link to="/"><img src={logo} alt="Budsy"/></Link></div>  
        <h1 className='heading'>Login to your budsy</h1>
        <Provider store={store}>
          <LoginForm></LoginForm>
        </Provider>
         <p className='signup-text'>Don't have an account? <Link to="/register" className="signup">Sign up</Link></p>
      </div>
    )    
  }
}
export default LoginPage;