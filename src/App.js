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
import ResetPassword from './Reset-Password/ResetPassword';
import { AuthProvider } from './AuthContext';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';


const App = () =>
{
	return (
		<AuthProvider>
			<Router forceRefresh={true}>
				<>
					<div className={'pages'}>
						<NavbarFrst/>
						<PublicRoute exact path={'/'} component={Home}/>
						<PublicRoute path={'/contact'} component={Contact}/>
						<PublicRoute path={'/coș-cumpărături'} component={CosCumparaturi}/>
						<PublicRoute path={'/reset-password'} component={ResetPassword}/>
						<PublicRoute restricted={true} path={'/log-in'} component={LogIn}/>
						<PublicRoute restricted={true} path={'/sign-up'} component={SignUp}/>
						<PrivateRoute path={'/profile'} component={Profile}/>
						<PrivateRoute path={'/orders'} component={Orders}/>
					</div>
					<Footer className={'Footer'}/>
				</>
			</Router>
		</AuthProvider>
	);
}

export default App;
