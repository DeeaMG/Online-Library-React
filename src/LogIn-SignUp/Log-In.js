import React, { Component } from "react";
import "./Log-In.scss";
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import axios from 'axios';


class LogIn extends Component
{
	constructor(props) 
	{
		super(props);

		this.state = {
			email: '',
			pass: '',
		}

		sessionStorage['username'] = '';
		sessionStorage['userEmail'] = '';
	}

	getEmail = (event) => 
	{
		this.setState({
			email: event.target.value
		  });
	}

	getPass = (event) => 
	{
		this.setState({
			pass: event.target.value
		  });
	}

	static showErrMsg = (errShowInput, session, sessionKeyOne, sessionKeyTwo, errInputOne, errInputTwo) => 
	{
		errShowInput.innerHTML = session;
		sessionStorage.removeItem(sessionKeyOne);
		errInputOne.innerHTML = '';
		if(sessionKeyTwo) {sessionStorage.removeItem(sessionKeyTwo);}
		if(errInputTwo) {errInputTwo.innerHTML = '';}
	}

	onSubmit = (event) => 
	{
		event.preventDefault();

		let email = this.state.email;
		let pass = this.state.pass;

		// Input fields
		let incorrectEmail = document.getElementById('incorrectMsgEmail');
		let incorrectPass = document.getElementById('incorrectMsgPass');
		let noInputs = document.getElementById('noInputs');

		// Email error
		sessionStorage['errEmailLogIn'] = 'We cannot find an account with that email address';

		// Password error
		sessionStorage['errPassLogIn'] = 'Your password is incorrect';

		// Empty fields
		sessionStorage['errNoInputs'] = 'Enter your email and password';

		if(email && pass)
		{
			axios.get('http://localhost:5000/createuser/').then(response => 
			{
				console.log(response.data);
				if (response.data.length)
				{
					response.data.forEach((_, i) => 
					{
						// Check if email exist in db
						if(email !== response.data[i].email)
						{
							LogIn.showErrMsg(incorrectEmail, sessionStorage['errEmailLogIn'], 'errPassLogIn', false, incorrectPass, false);
						}

						// Check if password is correct
						else if(pass !== response.data[i].password)
						{
							LogIn.showErrMsg(incorrectPass, sessionStorage['errPassLogIn'], 'errEmailLogIn', false, incorrectEmail, false);
						}
						
						// Log in
						else if(email === response.data[i].email && pass === response.data[i].password) 
						{
							sessionStorage.clear();
							incorrectEmail.innerHTML = '';
							incorrectPass.innerHTML = '';

							window.location = '/';
						}
					})
				}
			})
			.catch((error) => {console.log('GET ERROR: ', error);})
		}

		else {LogIn.showErrMsg(noInputs, sessionStorage['errNoInputs'], 'errEmailLogIn', 'errPassLogIn', incorrectEmail, incorrectPass);}
	}

	render()
	{
		return (                            
			<div className='logare'>
				<form className="cont" onSubmit={this.onSubmit}>
					<h2>Log in</h2>
					<p className={'incorrectMsg customMargin'} id={'noInputs'}>{sessionStorage['errNoInputs']}</p>

					<div className={'input-box'}>
						<label><EmailIcon/>E-mail</label>
						<input type={'email'} onChange={this.getEmail} className={'inputs'}/>
						<p className={'incorrectMsg'} id={'incorrectMsgEmail'}>{sessionStorage['errMailLogIn']}</p>

						<label><VpnKeyIcon/>Password</label>
						<input type={'password'} onChange={this.getPass} className={'inputs'}/>
						<p className={'incorrectMsg customMargin'} id={'incorrectMsgPass'}>{sessionStorage['errPassLogIn']}</p>

						<input type='submit' value={'Log in'} className={'submit'}/>
					</div>
				</form>
			</div>
		);
	}
}

export default LogIn;
