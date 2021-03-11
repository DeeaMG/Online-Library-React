import React, { useState } from "react";
import "./Log-In.scss";
import {useAuth} from '../AuthContext';


const LogIn = () =>
{
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [error, setError] = useState('');
	const {login} = useAuth();

	const getEmail = (event) => { setEmail(event.target.value); }
	const getPass = (event) => { setPass(event.target.value); }

	const onSubmit = (event) =>
	{
		event.preventDefault();

		if(email && pass)
		{
			// Check if email exist in db
			// if(email !== 'deeag@yahoo.comyu') return setError('Email address doesn\'t exist');

			// Check if password is correct
			// else if(pass !== '23423') return setError('Your password is incorrect');
	
			// Log in
			// else 
			// {
				login(email, pass);
				sessionStorage['userEmail'] = email;

				window.location = '/';
			// }
		}

		else return setError('Enter your email and password');
	}

	return (                            
		<div className='logare'>
			<form className="cont" onSubmit={onSubmit}>
				<h2 className='title'>Sign-In</h2>
				{error && <div className='errorBox'><h4 className='errorMsg'>{error}</h4></div>}

				<div className={'input-box'}>
					<label>Email</label>
					<input type={'email'} onChange={getEmail} className={'inputs'}/>

					<label>Password</label>
					<input type={'password'} onChange={getPass} className={'inputs'}/>

					<input type='submit' value={'Log in'} className={'submit submitBtn'}/>
				</div>
			</form>
		</div>
	);
}

export default LogIn;
