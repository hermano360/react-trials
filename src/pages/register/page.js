import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';

var RegisterPage = React.createClass({
	toSignIn: function(){
		browserHistory.push('/login');
	},
  render: function(){
    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>Create your budsy account</h1>
        <p className={styles.tagline}>You're one step closer to getting your perfect highthat is personalized to you and your preferences.</p>
        <div className="buttons-box">	        
	        <a className={styles.fbregister}>Register with facebook</a>
	    </div>
	    <p className={styles.oroption}><span>or</span></p>
        <div className="rt-form signupForm">
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
          <input type="text" name="dob" placeholder="Date of Birth" />
          <input type="text" name="zipcode" placeholder="Zipcode" />
          <input type="tel" name="phone" placeholder="Phone Number" />
          <input type="email" name="email" placeholder="Email Address" />
          <div className="buttons-box">
            <a className={styles.rtsignup}>Create account</a>
          </div>
          <p className={styles.signin}>Don't have an account? <a className={styles.signinlink} onClick={this.toSignIn}>Sign in</a></p>
        </div>
      </div>
    );
  }
});
export default RegisterPage;
// export default class RegisterPage extends React.Component {  
//   render() {
//     return (
//       <div className={styles.content}>
//         <h1 className={styles.heading}>Register</h1>
//       </div>
//     );
//   }
// }
