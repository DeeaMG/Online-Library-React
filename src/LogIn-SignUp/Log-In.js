import React, { useState } from "react";
import "./Log-In.scss";
import axios from 'axios';
const mongoose = require('mongoose');


export const showErrMsg = (errShowInput, session, sessionKeyOne, sessionKeyTwo, errInputOne, errInputTwo) =>
{
	errShowInput.innerHTML = session;
	sessionStorage.removeItem(sessionKeyOne);
	errInputOne.innerHTML = '';
	if(sessionKeyTwo) {sessionStorage.removeItem(sessionKeyTwo);}
	if(errInputTwo) {errInputTwo.innerHTML = '';}
}

const LogIn = () =>
{
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	sessionStorage['userID'] 	= '';
	sessionStorage['username'] 	= '';
	sessionStorage['userEmail'] = '';

	const getEmail = (event) => 
	{
		setEmail(event.target.value);
	}

	const getPass = (event) =>
	{
		setPass(event.target.value);
	}

	const onSubmit = (event) =>
	{
		event.preventDefault();

		// Input fields
		let incorrectEmail = document.getElementById('incorrectMsgEmail');
		let incorrectPass = document.getElementById('incorrectMsgPass');
		let noInputs = document.getElementById('noInputs');

		// Email error
		sessionStorage['errEmailLogIn'] = 'We cannot find an account with that email address';

		// Password error
		sessionStorage['errPassLogIn'] 	= 'Your password is incorrect';

		// Empty fields
		sessionStorage['errNoInputs'] 	= 'Enter your email and password';

		if(email && pass)
		{
			axios.get('http://localhost:5000/createuser/get-user').then(response => 
			{
				console.log(response.data);
				if (response.data.length)
				{
					response.data.forEach((_, i) => 
					{
						// Check if email exist in db
						if(email !== response.data[i].email)
						{
							showErrMsg(incorrectEmail, sessionStorage['errEmailLogIn'], 'errPassLogIn', false, incorrectPass, false);
						}

						// Check if password is correct
						else if(pass !== response.data[i].password)
						{
							showErrMsg(incorrectPass, sessionStorage['errPassLogIn'], 'errEmailLogIn', false, incorrectEmail, false);
						}
						
						// Log in
						else if(email === response.data[i].email && pass === response.data[i].password) 
						{
							sessionStorage.clear();
							incorrectEmail.innerHTML = '';
							incorrectPass.innerHTML = '';

							sessionStorage['userID']	= response.data[i]._id;
							sessionStorage['username']	= response.data[i].username;
							sessionStorage['userEmail'] = response.data[i].email;

							window.location = '/';
							mongoose.disconnect();
						}
					})
				}
			})
			.catch((error) => {console.log('GET ERROR: ', error);})
		}

		else {showErrMsg(noInputs, sessionStorage['errNoInputs'], 'errEmailLogIn', 'errPassLogIn', incorrectEmail, incorrectPass);}
	}

	return (                            
		<div className='logare'>
			<form className="cont" onSubmit={onSubmit}>
				<h2>Sign-In</h2>
				<p className={'incorrectMsg customMargin'} id={'noInputs'}>{sessionStorage['errNoInputs']}</p>

				<div className={'input-box'}>
					<label>Email</label>
					<input type={'email'} onChange={getEmail} className={'inputs'}/>
					<p className={'incorrectMsg'} id={'incorrectMsgEmail'}>{sessionStorage['errMailLogIn']}</p>

					<label>Password</label>
					<input type={'password'} onChange={getPass} className={'inputs'}/>
					<p className={'incorrectMsg customMargin'} id={'incorrectMsgPass'}>{sessionStorage['errPassLogIn']}</p>

					<input type='submit' value={'Log in'} className={'submit'}/>
				</div>
			</form>
		</div>
	);
}

export default LogIn;
