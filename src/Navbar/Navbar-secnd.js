import React, {Component} from "react";
import './Navbar-secnd.scss';
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import HelpIcon from "@material-ui/icons/Help";
import {HashRouter, NavLink} from "react-router-dom";
import Products from "../Products";


class NavbarSecnd extends Component 
{
	render() 
	{
		return (
		<HashRouter>
			<div className="app">
				<div className={'navbar-second'}>
					<div className={'produse'}>
						<div className={'title'}><ViewHeadlineIcon/>Produse</div>
						<div className={'produse-tipuri'}>
							<Products/>
							<div className={'produse-continut'} id={'continut'}> </div>
						</div>
					</div>
					<div className={'contact'}><NavLink to={'/contact'}><HelpIcon className={'help-icon'}/>Contact</NavLink></div>
				</div>
			</div>
		</HashRouter>
		);
	}	
}

export default NavbarSecnd;
