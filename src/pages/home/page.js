import React from "react";
import { browserHistory } from 'react-router';
import styles from "./style.css";
// import images from "./flat-avatar.png";

var HomePage = React.createClass({
	getInitialState: function(){
        return {shiv: this.props.route.component.displayName}
    },
  toSignUp: function(){
  	browserHistory.push('/register');
  },
  toLogin: function(){
  	browserHistory.push('/login');
  	// this.setState({shiv: 'shivjeet'});
  },
  render: function(){
    return (
      <div className={styles.content}>
      	<div className={styles.logo}></div>
        <h1 className={styles.heading}>Cannabis. your way</h1>    
        <p className={styles.tagline}>A one click perfect high that is personalized to you.</p>    
        <div className="buttons-box">
        	<a className={styles.signup} onClick={this.toSignUp}>Sign up now</a>
        	<a className={styles.login} onClick={this.toLogin}>Login</a> 
        </div>
      </div>
    );
  } 
});
export default HomePage;

// export default class HomePage extends React.Component{

//   toSignUp(){
//   	browserHistory.push('/register');
//   }
//   toLogin(){
//   	browserHistory.push('/login');
//   }
//   render(){
//     return (
//       <div className={styles.content}>
//         <h1 className={styles.heading}>Cannabis. your way</h1>    
//         <p className={styles.tagline}>A one click perfect high that is personaluzed to you.</p>    
//         <div className="buttons-box">
//         	<a className={styles.signup} onClick={this.toSignUp}>Sign up now</a>
//         	<a className={styles.login} onClick={this.toLogin}>Login</a> 
//         </div>  
//         <button>Testing</button>                
//       </div>
//     );
//   } 
// }