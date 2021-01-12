import React, { Component } from "react";
import "./Navbar-frst.scss";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import logo from '../images/logo.gif'
import {HashRouter, NavLink} from "react-router-dom";



class NavbarFrst extends Component
{
	render() 
	{
		return (
		<HashRouter>
			<div className="navbar">
				<div className={'navbar-first'}>
					<div className={'navbar-logo'}><NavLink exact to={'/'}><img src={logo} alt={'Not found'} className={'logo-pic'}/></NavLink></div>
					<div className={'navbar-pages'}>
						<div className={'profile'}>
							<div className={'title'}><PersonIcon style={{width: '25px', height: '25px'}}/>Contul meu</div>
							<div className={'cont'}>
								<div className={'auth-creare'}><NavLink to={'/log-in'}>&nbsp;&nbsp;Autentificare</NavLink></div>
								<div className={'auth-creare'}><NavLink to={'/sign-up'}>&nbsp;&nbsp;Creare&nbsp;cont</NavLink></div>
							</div>
						</div>
						<NavLink to={'/coș-cumpărături'} className={'cos-cumparaturi'}><ShoppingCartIcon/>Coșul meu</NavLink>
					</div>
				</div>
			</div>
		</HashRouter>
		);
	}
}

export default NavbarFrst;
