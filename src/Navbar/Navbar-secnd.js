import React, {Component} from "react";
import './Navbar-secnd.scss';
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
// import HelpIcon from "@material-ui/icons/Help";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import Products from "../Products";


class NavbarSecnd extends Component 
{
	render() 
	{
		return (
		<Router forceRefresh={true}>
			<div className="app">
				<div className={'navbar-second'}>
					<div className={'produse'}>
						<div className={'title'}><ViewHeadlineIcon className={'headLine-ico'}/>Products</div>
						<div className={'produse-tipuri'}>
							<div className={'trDropdown'}></div>
							<Products/>
							<div className={'produse-continut'} id={'continut'}> </div>
						</div>
					</div>
					{/* <div className={'contact'}><NavLink to={'/contact'}><HelpIcon className={'help-icon'}/>Contact</NavLink></div> */}
				</div>
			</div>
		</Router>
		);
	}	
}

export default NavbarSecnd;
