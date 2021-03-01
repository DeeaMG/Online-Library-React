import './App.scss';
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavbarFrst from "./Navbar/Navbar-frst";
import LogIn from "./LogIn-SignUp/Log-In";
import SignUp from "./LogIn-SignUp/Sign-up";
import Home from "./Home/Home";
import CosCumparaturi from "./Cos-Cumparaturi/Cos-Cumparaturi";
import Contact from "./Contact/Contact";
import Profile from './Profile/Profile';
import Orders from './Orders/Orders';
import Footer from './Footer/Footer';


const App = () =>
{
	return (
		<Router forceRefresh={true}>
			<>
				<div className={'pages'}>
					<NavbarFrst/>
					<Route exact path={'/'} component={Home}/>
					<Route path={'/log-in'} component={LogIn}/>
					<Route path={'/sign-up'} component={SignUp}/>
					<Route path={'/coș-cumpărături'} component={CosCumparaturi}/>
					<Route path={'/contact'} component={Contact}/>
					<Route path={'/profile'} component={Profile}/>
					<Route path={'/orders'} component={Orders}/>
				</div>
				<Footer className={'Footer'}/>
			</>
		</Router>
	);
}

export default App;
