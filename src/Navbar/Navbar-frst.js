import {BrowserRouter as Router, NavLink} from "react-router-dom";
import React from "react";
import "./Navbar-frst.scss";
import logo from '../images/LetterA-crem2.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';


const NavbarFrst = () =>
{
	const logOut = () =>
	{
		sessionStorage.removeItem('userEmail');
	}

	const dropdownAuth = () =>
	{
		if(sessionStorage['userEmail'])
		{
			console.log('LOGGED IN');
			return (
				<div className={'dropdownMenu'}>
					<div className={'trDropdown'}></div>
					<div className={'auth-creare'}><NavLink to={'/profile'}>&nbsp;&nbsp;Profile</NavLink></div>
					<div className={'auth-creare'}><NavLink to={'/orders'}>&nbsp;&nbsp;Orders</NavLink></div>
					<button className={'auth-creare btn'} onClick={() => logOut()}><NavLink to={'/'}>&nbsp;&nbsp;Log&nbsp;out</NavLink></button>
				</div>
			);
		}

		else
		{
			console.log('LOGGED OUT');
			return (
				<div className={'dropdownMenu'}>
					<div className={'trDropdown'}></div>
					<div className={'auth-creare'}><NavLink to={'/log-in'}>&nbsp;&nbsp;Sign in</NavLink></div>
					<div className={'auth-creare'}><NavLink to={'/sign-up'}>&nbsp;&nbsp;Create&nbsp;account</NavLink></div>
				</div>
			);
		}
	}

	return (
		<Router forceRefresh={true}>
			<div className="navbar">
				<div className={'navbar-first'}>
					<div className={'navbar-logo'}><NavLink exact to={'/'}><img src={logo} alt={'Not found'} className={'logo-pic'}/></NavLink></div>
					<div className={'navbar-pages'}>
						<div className={'profile'}>
							<div className={'title'}><PersonIcon className={'profile-Ico'}/><ExpandMoreIcon className={'expandMore'}/></div>
							{dropdownAuth()}
						</div>
						<NavLink to={'/coș-cumpărături'} className={'cos-cumparaturi'}>
							<ShoppingCartIcon className={'shopping-cart'}/>
							<p className={'cart-prod-num'}><sup>2</sup></p>
						</NavLink>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default NavbarFrst;
