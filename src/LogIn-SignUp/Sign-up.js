import React, {useState} from "react";
import './Log-In.scss';
import './Log-In';
import axios from 'axios';
import {showErrMsg} from "./Log-In";


const SignUp = () =>
{
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [verifyPassword, setVerifyPass] = useState('');
	
	const minLengthPass = 8;
	
	const addName = (event) =>
	{
		setName(event.target.value);
	}
	
	const addEmail = (event) =>
	{
		setEmail(event.target.value);
	}
	
	const addPass = (event) =>
	{
		setPass(event.target.value);
	}
	
	const verifyPass = (event) =>
	{
		setVerifyPass(event.target.value);
	}
	
	const postData = (addData) =>
	{
		axios.post('http://localhost:5000/createuser/post-user', addData)
		.then(res => console.log(res.data))
		.catch((error) => {console.log("POST ERROR: ", error);});
	}
	
	const postRedirect = (addData) =>
	{
		window.location = '/log-in';
		postData(addData);
		sessionStorage.clear();
	}
	
	const onSubmit = (event) =>
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
	
		if(email && name)
		{
			if(pass.length < minLengthPass) 
			{
				showErrMsg(incorrectPass, sessionStorage['errMsgPassLength'], 'errMsgEmailSgUp', 'errMsgPassSgUp', incorrectEmail, false);
			}
	
			else if(pass === verifyPassword)
			{
				const addData = {
					username: name,
					email: email,
					pass: pass
				};
	
				console.log(addData);
	
				axios.get('http://localhost:5000/createuser/get-user').then(response => {
					console.log(response.data);
					if (response.data.length) 
					{
						let foundCount = 0;
	
						// Verify if email already exist in db
						response.data.forEach((_, i) => {
							if(email === response.data[i].email) {foundCount += 1;}
						})
	
						if(foundCount) 
						{
							showErrMsg(incorrectEmail, sessionStorage['errMsgEmailSgUp'], 'errMsgPassSgUp', false, incorrectPass, false);
						}
	
						else {postRedirect(addData);};
					}
					else {postRedirect(addData);};
				})
				.catch((error) => {console.log('GET ERROR: ', error);})
			}
	
			else 
			{
				showErrMsg(incorrectPass, sessionStorage['errMsgPassSgUp'], 'errMsgEmailSgUp', false, incorrectEmail, false);
			}
		}
	
		else if (!(email && name))
		{
			showErrMsg(incorrectEmail, sessionStorage['errNoEmail'], 'errMsgPassSgUp', false, incorrectPass, false);
			showErrMsg(incorrectName, sessionStorage['errMsgNameSgUp'], 'errMsgPassSgUp', 'errMsgEmailSgUp', incorrectPass, incorrectEmail);
		}
	
		else if(!email)
		{
			showErrMsg(incorrectEmail, sessionStorage['errNoEmail'], 'errMsgPassSgUp', false, incorrectPass, false);
		}
	
		else if(!name)
		{
			showErrMsg(incorrectName, sessionStorage['errMsgNameSgUp'], 'errMsgPassSgUp', 'errMsgEmailSgUp', incorrectPass, incorrectEmail);
		}
	}

	return (
	<div className={'creare-cont'}>
		<form className={'cont'} onSubmit={onSubmit}>
			<h2 className={'customMargin'}>Create account</h2>

			<div className={'input-box'}>
				<label>Full name</label>
				<input type={'text'} onChange={addName} className={'inputs'}/>
				<p className={'incorrectMsg'} id={'incorrectMsgName'}>{sessionStorage['errMsgNameSgUp']}</p>

				<label>Email</label>
				<input type={'email'} onChange={addEmail} className={'inputs'}/>
				<p className={'incorrectMsg'} id={'incorrectMsgEmail'}>{sessionStorage['errMsgEmailSgUp']}</p>

				<label>Password</label>
				<input type={'password'} onChange={addPass} className={'inputs'}/>
				<p className={'incorrectMsg'} id={'incorrectMsgPass'}>{sessionStorage['errMsgPassSgUp']}</p>

				<label>Confirm Password</label>
				<input type={'password'} onChange={verifyPass} className={'inputs customMargin'}/>

				<input type='submit' value={'Sign up'} className={'submit'}/>
			</div>
		</form>
	</div>
	);
}

export default SignUp;
