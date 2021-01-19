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

	URLmsg = (cleanURL) => {
		if(window.location.href.includes("?&emailTaken") || window.location.href.includes("?&err=passNotMatching")) 
		{
			if(cleanURL) {window.location = '/log-in';}
		}
		else
		{
			let url = window.location.href + "?&emailTaken";
			window.location.href = url;
		}
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

	postData = ( addData ) => {
		axios.post('http://localhost:5000/createuser/add', addData)
		.then(res => console.log(res.data))
		.catch((error) => {console.log("POST ERROR: ", error);});
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

			axios.get('http://localhost:5000/createuser/').then(response => {
				console.log(response.data);
				if (response.data.length) 
				{
					let foundCount = 0;

					response.data.forEach((_, i) => {
						if(this.state.email === response.data[i].email) {foundCount += 1};
					})
		
					if(foundCount) 
					{
						this.URLmsg(false);
					}

					else {this.postData(addData); this.URLmsg(true)};
				}

				else {this.postData(addData); this.URLmsg(true)};
			})
			.catch((error) => {console.log('GET ERROR: ', error);})
		}
		else
		{
			let url = window.location.href + "?&err=passNotMatching";
			window.location.href = url;
		}
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
