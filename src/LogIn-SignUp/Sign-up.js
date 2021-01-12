import React, { Component } from "react";
import './Log-In.scss';
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";


class SignUp extends Component
{
	render()
	{
		return (
		<div className={'cont'}>
			<h2>Creează cont</h2>

			<div className={'input-box'}>
				<label><EmailIcon/>E-mail</label>
				<input type={'email'}/>

				<label><VpnKeyIcon/>Parola</label>
				<input type={'password'}/>

				<label><VpnKeyIcon/>Verifică parola</label>
				<input type={'password'}/>

				<button>Creeaza cont</button>
			</div>
		</div>
		);
	}
}

export default SignUp;
