import React, {useState} from "react";
import './Log-In.scss';
import {useAuth} from '../AuthContext';


const SignUp = () =>
{
	// const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [verifyPassword, setVerifyPass] = useState('');
	const {signup} = useAuth();
	const [error, setError] = useState('');
	
	const minLengthPass = 8;
	
	// const addName = (event) =>
	// {
	// 	setName(event.target.value);
	// }
	
	const addEmail = (event) => { setEmail(event.target.value); }
	
	const addPass = (event) => { setPass(event.target.value); }
	
	const verifyPass = (event) => { setVerifyPass(event.target.value); }
	
	const onSubmit = (event) =>
	{
		event.preventDefault();
		// Email errors
		// sessionStorage['errMsgEmailSgUp'] = 'Email address already in use';
	
		if(email) // && name)
		{
			if(pass.length < minLengthPass) return setError('Password must be 8 characters long');
	
			else if(pass === verifyPassword)
			{
				signup(email, pass);
				window.location = '/log-in';

				//  Daca exista un email in db => showErrMsg(incorrectEmail, sessionStorage['errMsgEmailSgUp'], incorrectPass, false);
			}
	
			else return setError('Passwords must match');
		}
		
		else if(!email) return setError('Enter your email');
	}

	return (
	<div className={'creare-cont'}>
		<form className={'cont'} onSubmit={onSubmit}>
			<h2 className={'title'}>Create account</h2>
			{error && <div className='errorBox'><h4 className='errorMsg'>{error}</h4></div>}

			<div className={'input-box'}>
				{/* <label>Full name</label>
				<input type={'text'} onChange={addName} className={'inputs'}/> */}

				<label>Email</label>
				<input type={'email'} onChange={addEmail} className={'inputs'}/>

				<label>Password</label>
				<input type={'password'} onChange={addPass} className={'inputs'}/>

				<label>Confirm Password</label>
				<input type={'password'} onChange={verifyPass} className={'inputs'}/>

				<input type='submit' value={'Sign up'} className={'submit submitBtn'}/>
			</div>
		</form>
	</div>
	);
}

export default SignUp;
