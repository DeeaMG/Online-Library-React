import './Contact.scss';
import React, { Component } from "react";
import NavbarSecnd from "../Navbar/Navbar-secnd";


class Contact extends Component 
{
	render() 
	{
		return (
			<div className="contact">
				<NavbarSecnd/>
				<h1>CONTACT</h1>
			</div>

		);	
	}
}

export default Contact;
