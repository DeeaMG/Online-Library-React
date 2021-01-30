import React, { Component } from "react";
import "./Navbar-frst.scss";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
// import logo from '../images/logo.gif';
// import logo from '../images/LetteraA.jpg';
import logo from '../images/LetterA-crem2.png';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class NavbarFrst extends Component
{
	logOut = () =>
	{
		console.log('LOGGED OUT!');
		sessionStorage['userID'] 	= '';
		sessionStorage['username'] 	= '';
		sessionStorage['userEmail'] = '';
	}

	dropdownAuth = () =>
	{
		console.log('------------------USER DATA------------------');
		console.log('userID: ', sessionStorage['userID']);
		console.log('username: ', sessionStorage['username']);
		console.log('userEmail: ', sessionStorage['userEmail']);
		console.log('----------------END USER DATA----------------');

		if(sessionStorage['userID'])
		{
			console.log('sessionStorage NOT EMPTY!');
			return (
				<div className={'dropdownMenu'}>
					<div className={'trDropdown'}></div>
					<div className={'auth-creare'}><NavLink to={'/profile'} className={'text'}>&nbsp;&nbsp;Profile</NavLink></div>
					<div className={'auth-creare'}><NavLink to={'/orders'} className={'text'}>&nbsp;&nbsp;Orders</NavLink></div>
					<button className={'auth-creare btn'} onClick={() => this.logOut()}><NavLink to={'/'} className={'text'}>&nbsp;&nbsp;Log&nbsp;out</NavLink></button>
				</div>
			);
		}
		else
		{
			console.log('sessionStorage EMPTY!');
			return (
				<div className={'dropdownMenu'}>
					<div className={'trDropdown'}></div>
					<div className={'auth-creare'}><NavLink to={'/log-in'} className={'text'}>&nbsp;&nbsp;Sign in</NavLink></div>
					<div className={'auth-creare'}><NavLink to={'/sign-up'} className={'text'}>&nbsp;&nbsp;Create&nbsp;account</NavLink></div>
				</div>
			);
		}
	}

	render() 
	{
		return (
		<Router forceRefresh={true}>
			<div className="navbar">
				<div className={'navbar-first'}>
					<div className={'navbar-logo'}><NavLink exact to={'/'}><img src={logo} alt={'Not found'} className={'logo-pic'}/></NavLink></div>
					<div className={'navbar-pages'}>
						<div className={'profile'}>
							<div className={'title'}><PersonIcon className={'profile-Ico'}/><ExpandMoreIcon className={'expandMore'}/></div>
							{this.dropdownAuth()}
						</div>
						<NavLink to={'/coș-cumpărături'} className={'cos-cumparaturi'}><ShoppingCartIcon className={'shopping-cart'}/></NavLink>
					</div>
				</div>
			</div>
		</Router>
		);
	}
}

export default NavbarFrst;
