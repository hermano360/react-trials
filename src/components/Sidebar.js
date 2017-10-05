import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

// The Sidebar creates links that can be used to navigate
// between routes.
class Sidebar extends Component{	
	handleClick(){
		console.log('yes');
		document.body.className = '';
	}
	render(){
		return(
			<div className="sidebar">
				<div className='logo'><img src={logo} alt="Budsy"/></div>
			    <nav>
					<ul onClick={this.handleClick}>
						<li><Link to='/'>My Reviews</Link></li>
						<li><Link to='/preferences'>My Preferences</Link></li>
						<li><Link to='/register'>My Orders</Link></li>
						<li><Link to='/register'>Logout</Link></li>
					</ul>
			    </nav>
			</div>
		)
	}  
}
export default Sidebar;
