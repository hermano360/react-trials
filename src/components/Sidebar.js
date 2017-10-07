import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

// The Sidebar creates links that can be used to navigate
// between routes.
class Sidebar extends Component{	
	handleClick(){
		document.getElementsByTagName( 'html' )[0].className = '';
	}
	logout(){
		localStorage.removeItem('userAuthToken');
	}
	render(){
		return(
			<div className="sidebar">
				<div className='logo' onClick={this.handleClick}><Link to='/'><img src={logo} alt="Budsy"/></Link></div>
			    <nav>
					<ul onClick={this.handleClick}>
						<li><Link to='/reviews'>My Reviews</Link></li>
						<li><Link to='/preferences'>My Preferences</Link></li>
						<li><Link to='/register'>My Orders</Link></li>
						<li><Link to='/'><span onClick={this.logout}>Logout</span></Link></li>
					</ul>
			    </nav>
			</div>
		)
	}  
}
export default Sidebar;
