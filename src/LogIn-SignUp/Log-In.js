import React, { Component } from "react";
import "./Log-In.scss";
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
// import {HashRouter, NavLink, Route} from "react-router-dom";


class LogIn extends Component
{
	render()
	{
		return (
		<div className="cont">
			<h2>Log in</h2>

			<div className={'input-box'}>
				<label><EmailIcon/>E-mail</label>
				<input type={'email'}/>

				<label><VpnKeyIcon/>Password</label>
				<input type={'password'}/>

				<input type={'submit'} className={'submit'} value={'Log in'}/>
			</div>
		</div>
		);
	}
}

export default LogIn;
