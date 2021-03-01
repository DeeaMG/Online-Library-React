import React from "react";
import NavbarSecnd from "../Navbar/Navbar-secnd";
import './Profile.scss';


const Profile = () =>
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

export default Profile;
