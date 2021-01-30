import React, { Component } from "react";
import NavbarSecnd from "../Navbar/Navbar-secnd";
import './Profile.scss';


class Profile extends Component
{
	render()
	{
		return (
			<div className="profile">
				<NavbarSecnd/>
				<div className={'user-profile'}>
					Heello thheer
				</div>
			</div>
		);
	}
}

export default Profile;
