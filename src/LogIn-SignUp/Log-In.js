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

	onSubmit = () => {
		axios.get('http://localhost:5000/createuser/').then(response => {
				console.log(response.data);
				if (response.data.length) 
				{
					let foundCount = false;
					let email = this.state.email;
					let pass = this.state.pass;

					response.data.forEach((_, i) => {
						console.log('FOR RESPONSE!!!!');
						if(email !== response.data[i].email) {
							console.log('hereeee no email');
							alert('You entered an invalid email. Please retry.');
						}
						else if(pass !== response.data[i].pass) {
							console.log('hereeee no pass');
							alert('Your password is incorect. Please retry.');
						}						
						else if(email === response.data[i].email && pass === response.data[i].pass) 
						{
							foundCount = true;
							console.log('Everything is ok!');
							window.location = './';
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

						<label><VpnKeyIcon/>Password</label>
						<input type={'password'} onChange={this.getPass} className={'inputs'}/>

						<button className={'submit'}>Log in</button>
					</div>
				</form>
			</div>
		);
	}
}

export default LogIn;
