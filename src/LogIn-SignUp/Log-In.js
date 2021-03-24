import React, { useState } from "react";
import {BrowserRouter as Router, NavLink, useHistory} from "react-router-dom";
import "./Log-In.scss";
import { useAuth } from '../AuthContext';


const LogIn = () =>
{
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [error, setError] = useState('');
	const { login } = useAuth();
    const history = useHistory();

	const getEmail = (event) => { setEmail(event.target.value); }
	const getPass = (event) => { setPass(event.target.value); }

	const onSubmit = async ( event ) =>
	{
		event.preventDefault();

		try
		{
			await login(email, pass);
			sessionStorage['userEmail'] = email;
			history.push('/');
		}
		catch { setError("Failed to log in. Check your email and password"); }
	}

	return (
		<Router forceRefresh={true}>
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

						<NavLink to={'/reset-password'}>
							<p className={'changePass'}>Forgot your password?</p>
						</NavLink>
					</div>
				</form>
			</div>
		</Router>                        
		
	);
}

export default LogIn;
