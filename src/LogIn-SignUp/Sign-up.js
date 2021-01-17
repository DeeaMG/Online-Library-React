import React, { Component } from "react";
import './Log-In.scss';
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import axios from 'axios';


class SignUp extends Component
{
	constructor(props) 
	{
		super(props);

		this.state = {
			email: '',
			pass: '',
			verifyPass: ''
		}
	}

	componentDidMount() {
		axios.get('http://localhost:5000/createuser/')
		  .then(response => {
			if (response.data.length > 0) {
				console.log('GET')
			  this.setState({
				email: response.data.email,
				pass: response.data.pass,
				verifyPass: response.data.verifyPass
			  })
			  console.log(this.state)
			}
		  })
		  .catch((error) => {
			console.log(error);
		  })
	}

	addEmail = (event) => {
		this.setState({
			email: event.target.value
		  });
	}

	addPass = (event) => {
		this.setState({
			pass: event.target.value
		  });
	}

	verifyPass = (event) => {
		this.setState({
			verifyPass: event.target.value
		  });
	}

	onSubmit = (event) => {
		event.preventDefault();

		if(this.state.pass === this.state.verifyPass)
		{
			const addData = {
				email: this.state.email,
				pass: this.state.pass
			};

			console.log(addData);

			axios.post('http://localhost:5000/createuser/add', addData)
			.then(res => console.log(res.data)).catch((error) => {
				console.log("Error is: ", error);
			});

			window.location = '/#/log-in'
		}
		else
		{
			// window.location.reload();
			let url = window.location.href;
			url += "?&err=passwords-didn't-match&email=" + this.state.email;
			window.location.href = url;
		}

    	// window.location = '/';
	}

	render()
	{
		return (
		<div className={'creare-cont'}>
			<form className={'cont'} onSubmit={this.onSubmit}>
				<h2>Sign up</h2>

				<div className={'input-box'}>
					<label><EmailIcon/>E-mail</label>
					<input type={'email'} onChange={this.addEmail}/>

					<label><VpnKeyIcon/>Password</label>
					<input type={'password'} onChange={this.addPass}/>

					<label><VpnKeyIcon/>Verify password</label>
					<input type={'password'} onChange={this.verifyPass}/>

					<input type='submit' value={'Sign up'}/>
				</div>
			</form>
		</div>
		);
	}
}

export default SignUp;
