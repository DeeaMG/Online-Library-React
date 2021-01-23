import React, { Component } from "react";
import './Log-In.scss';
import './Log-In';
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from '@material-ui/icons/Person';
import axios from 'axios';
import LogIn from "./Log-In";


class SignUp extends Component
{
	constructor(props) 
	{
		super(props);

		this.state = 
		{
			name: '',
			email: '',
			pass: '',
			verifyPass: ''
		}

		this.minLengthPass = 8;
	}

	addName = (event) => 
	{
		this.setState({
			name: event.target.value
		  });
	}

	addEmail = (event) => 
	{
		this.setState({
			email: event.target.value
		  });
	}

	addPass = (event) => 
	{
		this.setState({
			pass: event.target.value
		  });
	}

	verifyPass = (event) => 
	{
		this.setState({
			verifyPass: event.target.value
		  });
	}

	postData = ( addData ) => 
	{
		axios.post('http://localhost:5000/createuser/add', addData)
		.then(res => console.log(res.data))
		.catch((error) => {console.log("POST ERROR: ", error);});
	}

	postRedirect = (addData) => 
	{
		window.location = '/log-in';
		this.postData(addData);
		sessionStorage.clear();
	}

	onSubmit = (event) => 
	{
		event.preventDefault();
		
		// Input fields
		let incorrectName = document.getElementById('incorrectMsgName');
		let incorrectEmail = document.getElementById('incorrectMsgEmail');
		let incorrectPass = document.getElementById('incorrectMsgPass');

		// Name errors
		sessionStorage['errMsgNameSgUp'] = 'Enter your name';

		// Email errors
		sessionStorage['errMsgEmailSgUp'] = 'Email address already in use';
		sessionStorage['errNoEmail'] = 'Enter your email';

		// Password errors
		sessionStorage['errMsgPassMatch'] = 'Passwords must match';
		sessionStorage['errMsgPassLength'] = 'Password must be 8 characters long';

		if(this.state.email && this.state.name)
		{
			if(this.state.pass.length < this.minLengthPass) 
			{
				LogIn.showErrMsg(incorrectPass, sessionStorage['errMsgPassLength'], 'errMsgEmailSgUp', 'errMsgPassSgUp', incorrectEmail, false);
			}

			else if(this.state.pass === this.state.verifyPass)
			{
				const addData = {
					username: this.state.name,
					email: this.state.email,
					pass: this.state.pass
				};

				console.log(addData);

				axios.get('http://localhost:5000/createuser/').then(response => {
					console.log(response.data);
					if (response.data.length) 
					{
						let foundCount = 0;

						// Verify if email already exist in db
						response.data.forEach((_, i) => {
							if(this.state.email === response.data[i].email) {foundCount += 1;}
						})

						if(foundCount) 
						{
							LogIn.showErrMsg(incorrectEmail, sessionStorage['errMsgEmailSgUp'], 'errMsgPassSgUp', false, incorrectPass, false);
						}

						else {this.postRedirect(addData);};
					}
					else {this.postRedirect(addData);};
				})
				.catch((error) => {console.log('GET ERROR: ', error);})
			}

			else 
			{
				LogIn.showErrMsg(incorrectPass, sessionStorage['errMsgPassSgUp'], 'errMsgEmailSgUp', false, incorrectEmail, false);
			}
		}

		else if (!(this.state.email && this.state.name))
		{
			LogIn.showErrMsg(incorrectEmail, sessionStorage['errNoEmail'], 'errMsgPassSgUp', false, incorrectPass, false);
			LogIn.showErrMsg(incorrectName, sessionStorage['errMsgNameSgUp'], 'errMsgPassSgUp', 'errMsgEmailSgUp', incorrectPass, incorrectEmail);
		}

		else if(!this.state.email)
		{
			LogIn.showErrMsg(incorrectEmail, sessionStorage['errNoEmail'], 'errMsgPassSgUp', false, incorrectPass, false);
		}

		else if(!this.state.name)
		{
			LogIn.showErrMsg(incorrectName, sessionStorage['errMsgNameSgUp'], 'errMsgPassSgUp', 'errMsgEmailSgUp', incorrectPass, incorrectEmail);
		}
	}

	render()
	{
		return (
		<div className={'creare-cont'}>
			<form className={'cont'} onSubmit={this.onSubmit}>
				<h2 className={'customMargin'}>Sign up</h2>

				<div className={'input-box'}>
					<label><PersonIcon/>Full name</label>
					<input type={'text'} onChange={this.addName} className={'inputs'}/>
					<p className={'incorrectMsg'} id={'incorrectMsgName'}>{sessionStorage['errMsgNameSgUp']}</p>

					<label><EmailIcon/>E-mail</label>
					<input type={'email'} onChange={this.addEmail} className={'inputs'}/>
					<p className={'incorrectMsg'} id={'incorrectMsgEmail'}>{sessionStorage['errMsgEmailSgUp']}</p>

					<label><VpnKeyIcon/>Password</label>
					<input type={'password'} onChange={this.addPass} className={'inputs'}/>
					<p className={'incorrectMsg'} id={'incorrectMsgPass'}>{sessionStorage['errMsgPassSgUp']}</p>

					<label><VpnKeyIcon/>Verify password</label>
					<input type={'password'} onChange={this.verifyPass} className={'inputs customMargin'}/>

					<input type='submit' value={'Sign up'} className={'submit'}/>
				</div>
			</form>
		</div>
		);
	}
}

export default SignUp;
