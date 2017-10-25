import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

// The Sidebar creates links that can be used to navigate
// between routes.
var authToken = 'Token ' + localStorage.getItem('userAuthToken');
class Sidebar extends Component{	
	handleClick(){
		document.getElementsByTagName( 'html' )[0].className = '';
	}
	logout(){
		document.getElementById("_loader").className = '_show';
		if(localStorage.getItem('socialUser')){
			var xhr = new XMLHttpRequest();
		    xhr.withCredentials = true;
		    
		    xhr.addEventListener("readystatechange", function () {		    	
		      if (this.readyState === 4) {
		        console.log(this.responseText);
		        localStorage.removeItem('userAuthToken')
		        localStorage.removeItem('socialUser');
		        document.getElementById("_loader").className = '';
		        window.location.href = "/"
		      }
		    });

		    xhr.open("POST", "https://budsy-staging.mybluemix.net/api/v0/auth/customer/social/logout/");
		    xhr.setRequestHeader("authorization", authToken);
		    xhr.setRequestHeader("content-type", "application/json");
		    xhr.send();
		}else{			
			localStorage.removeItem('userAuthToken');
			document.getElementById("_loader").className = '';			
		}
	}
	render(){
		return(
			<div className="sidebar">
				<div className='logo' onClick={this.handleClick}><Link to='/'><img src={logo} alt="Budsy"/></Link></div>
			    <nav>
					<ul onClick={this.handleClick}>
						<li><Link to='/reviews'>My Reviews</Link></li>
						<li><Link to='/preferences'>My Preferences</Link></li>
						<li><Link to='/orders'>Order Status</Link></li>
						<li><Link to='/'><span onClick={this.logout}>Logout</span></Link></li>
					</ul>
			    </nav>
			</div>
		)
	}  
}
export default Sidebar;