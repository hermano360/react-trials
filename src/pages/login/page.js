import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';
import loginForm from '../../common/forms/loginForm.js';


 var LoginPage = React.createClass({
  toSignUp: function(){
    browserHistory.push('/register');
  },
  render: function(){
    return (

      <div className={styles.content}>
      
        <h1 className={styles.heading}>Login to your budsy</h1>
        <div className="rt-form loginForm">
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <div className="buttons-box">
            <a className={styles.rtlogin}>Login</a>
            <a className={styles.fblogin}>Login with facebook</a>
          </div>
          <p className={styles.signup}>Don't have an account? <a className={styles.signuplink} onClick={this.toSignUp}>Sign up</a></p>
        </div>
      </div>
    );
  }
});
export default LoginPage; 