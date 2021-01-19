import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LogIn from "./Log-In";
import SignUp from "./Sign-Up";


class Cont extends Component
{
	render()
	{
		return (
			<Router forceRefresh={true}>
				<div className={'cont'}>
					<Route path={'/log-in'} component={LogIn}/>
					<Route path={'/sign-up'} component={SignUp}/>
				</div>
			</Router>
		);	
	}
}

export default Cont;
