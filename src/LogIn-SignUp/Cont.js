import React, { Component } from "react";
import {HashRouter, Route} from "react-router-dom";
import LogIn from "./Log-In";
import SignUp from "./Sign-Up";


class Cont extends Component
{
	render()
	{
		return (
			<HashRouter>
				<div className={'cont'}>
					<Route path={'/log-in'} component={LogIn}/>
					<Route path={'/sign-up'} component={SignUp}/>
				</div>
			</HashRouter>
		);	
	}
}

export default Cont;
