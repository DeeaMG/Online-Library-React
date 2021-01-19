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
		axios.get('http://localhost:5000/createuser/')
		  .then(response => {
			// if (response.data.length > 0) {
				console.log('GET')
			  	console.log(response.data)
			// }
		  })
		  .catch((error) => {
			console.log(error);
		  })
	}

	render()
	{
		return (
			<div className='logare'>
				<form className="cont" onSubmit={this.onSubmit}>
					<h2>Log in</h2>

					<div className={'input-box'}>
						<label><EmailIcon/>E-mail</label>
						<input type={'email'} onChange={this.getEmail}/>

						<label><VpnKeyIcon/>Password</label>
						<input type={'password'} onChange={this.getPass}/>

						<input type={'submit'} className={'submit'} value={'Log in'}/>
					</div>
				</form>
			</div>

		);
	}
}

export default LogIn;
