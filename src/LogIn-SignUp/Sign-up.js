import React, { Component } from "react";
import './Log-In.scss';
import './Log-In';
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import axios from 'axios';
import LogIn from "./Log-In";


class SignUp extends Component
{
	constructor(props) 
	{
		super(props);

		this.state = 
		{
			email: '',
			pass: '',
			verifyPass: ''
		}
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
		console.log('ON SUBMIT!!!!!!!');
		event.preventDefault();
		
		let incorrectEmail = document.getElementById('incorrectMsgEmail');
		let incorrectPass = document.getElementById('incorrectMsgPass');
		
		incorrectEmail.innerHTML = '';
		incorrectPass.innerHTML = '';

		sessionStorage['errMsgEmailSgUp'] = 'Email address already in use';
		sessionStorage['errMsgPassSgUp'] = 'Passwords must match';
		sessionStorage['errNoEmail'] = 'Enter your email';

		if(this.state.email)
		{
			if(this.state.pass === this.state.verifyPass)
			{
				const addData = {
					email: this.state.email,
					pass: this.state.pass
				};

				console.log(addData);

				axios.get('http://localhost:5000/createuser/').then(response => {
					console.log(response.data);
					if (response.data.length) 
					{
						let foundCount = 0;

						response.data.forEach((_, i) => {
							if(this.state.email === response.data[i].email) {foundCount += 1;}
						})

						if(foundCount) {LogIn.showErrMsg(incorrectEmail, sessionStorage['errMsgEmailSgUp'], 'errMsgPassSgUp', false, incorrectPass, false);}
						else {this.postRedirect(addData);};
					}
					else {this.postRedirect(addData);};
				})
				.catch((error) => {console.log('GET ERROR: ', error);})
			}
			else {LogIn.showErrMsg(incorrectPass, sessionStorage['errMsgPassSgUp'], 'errMsgEmailSgUp', false, incorrectEmail, false);}
		}
		else {LogIn.showErrMsg(incorrectEmail, sessionStorage['errNoEmail'], 'errMsgPassSgUp', false, incorrectPass, false);}
	}
		

	render()
	{
		return (
		<div className={'creare-cont'}>
			<form className={'cont'} onSubmit={this.onSubmit}>
				<h2 className={'sign-up'}>Sign up</h2>

				<div className={'input-box'}>
					<label><EmailIcon/>E-mail</label>
					<input type={'email'} onChange={this.addEmail} className={'inputs'}/>
					<p className={'incorrectMsg'} id={'incorrectMsgEmail'}>{sessionStorage['errMsgEmailSgUp']}</p>

					<label><VpnKeyIcon/>Password</label>
					<input type={'password'} onChange={this.addPass} className={'inputs'}/>
					<p className={'incorrectMsg'} id={'incorrectMsgPass'}>{sessionStorage['errMsgPassSgUp']}</p>

					<label><VpnKeyIcon/>Verify password</label>
					<input type={'password'} onChange={this.verifyPass} className={'inputs errMsg'}/>

					<input type='submit' value={'Sign up'} className={'submit'}/>
				</div>
			</form>
		</div>
		);
	}
}

export default SignUp;
