import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
class Header extends Component{	
	render(){
		return(
			<header>
			    <nav>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/login'>Login</Link></li>
						<li><Link to='/register'>Register</Link></li>
					</ul>
			    </nav>
			</header>
		)
	}  
}
export default Header;
