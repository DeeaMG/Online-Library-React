import React from "react";
import { useAuth } from "../AuthContext";
import NavbarSecnd from "../Navbar/Navbar-secnd";
import './Profile.scss';


const Profile = () =>
{
	const {currentUser} = useAuth();
	return (
		<div className="profile">
			<NavbarSecnd/>
			<div className={'user-profile'}>
				{sessionStorage['userEmail']}
			</div>
		</div>
	);
}

export default Profile;
