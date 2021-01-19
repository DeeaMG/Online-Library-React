import './App.scss';
import React, { Component } from "react";
import NavbarFrst from "./Navbar/Navbar-frst";
import LogIn from "./LogIn-SignUp/Log-In";
import SignUp from "./LogIn-SignUp/Sign-up";
import Home from "./Home/Home";
import CosCumparaturi from "./Cos-Cumparaturi/Cos-Cumparaturi";
import Contact from "./Contact/Contact";
import {BrowserRouter as Router, Route} from "react-router-dom";


class App extends Component
{
	render()
	{
		return (
			<Router forceRefresh={true}>
				<div className="app">
					<NavbarFrst/>
					<div className={'pages'}>
						<Route exact path={'/'} component={Home}/>
						<Route path={'/log-in'} component={LogIn}/>
						<Route path={'/sign-up'} component={SignUp}/>
						<Route path={'/coș-cumpărături'} component={CosCumparaturi}/>
						<Route path={'/contact'} component={Contact}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
