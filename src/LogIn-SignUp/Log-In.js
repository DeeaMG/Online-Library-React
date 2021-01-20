import React, { Component } from "react";
import "./Log-In.scss";
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import axios from 'axios';
// import {HashRouter, NavLink, Route} from "react-router-dom";


class LogIn extends Component
{
	constructor(props) 
	{
		super(props);

		this.state = {
			email: '',
			pass: '',
		}
	}

	getEmail = (event) => {
		this.setState({
			email: event.target.value
		  });
	}

	getPass = (event) => {
		this.setState({
			pass: event.target.value
		  });
	}

	showErrMsg = (errShowInput, session, sessionKey, errOtherInput) => {
		errShowInput.innerHTML = session;
		sessionStorage.removeItem(sessionKey);
		errOtherInput.innerHTML = '';
	}

	onSubmit = (event) => {
		event.preventDefault();

		sessionStorage['errEmail'] = 'Your email is incorrect. Please retry.';
		sessionStorage['errPass'] = 'Your password is incorrect. Please retry.';

		let email = this.state.email;
		let pass = this.state.pass;

		let incorectEmail = document.getElementById('incorectMsgEmail');
		let incorectPass = document.getElementById('incorectMsgPass');

		axios.get('http://localhost:5000/createuser/').then(response => {
			console.log(response.data);
			if (response.data.length) 
			{
				response.data.forEach((_, i) => {
					if(email !== response.data[i].email) {
						this.showErrMsg(incorectEmail, sessionStorage['errEmail'], 'errPass', incorectPass);
					}
					else if(pass !== response.data[i].password) {
						this.showErrMsg(incorectPass, sessionStorage['errPass'], 'errEmail', incorectEmail);
					}						
					else if(email === response.data[i].email && pass === response.data[i].password) 
					{
						sessionStorage.clear();
						window.location = '/';
					}
				})
			}
		})
		.catch((error) => {console.log('GET ERROR: ', error);})
	}

	render()
	{
		return (                            
			<div className='logare'>
				<form className="cont" onSubmit={this.onSubmit}>
					<h2>Log in</h2>

					<div className={'input-box'}>
						<label><EmailIcon/>E-mail</label>
						<input type={'email'} onChange={this.getEmail} className={'inputs'}/>
						<p className={'incorectMsg'} id={'incorectMsgEmail'}>{sessionStorage['errMail']}</p>

						<label><VpnKeyIcon/>Password</label>
						<input type={'password'} onChange={this.getPass} className={'inputs'}/>
						<p className={'incorectMsg'} id={'incorectMsgPass'}>{sessionStorage['errPass']}</p>

						<input type='submit' value={'Log in'} className={'submit'}/>
					</div>
				</form>
			</div>
		);
	}
}

export default LogIn;
