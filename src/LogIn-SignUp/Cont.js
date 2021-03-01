import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Email from "./Log-In/E-mail";
import SignUp from "./Sign-Up";


const Cont = () =>
{
	return (
		<Router forceRefresh={true}>
			<div className={'cont'}>
				<Route path={'/log-in'} component={Email}/>
				<Route path={'/sign-up'} component={SignUp}/>
			</div>
		</Router>
	);
}

export default Cont;
