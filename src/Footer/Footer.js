import React, { Component } from "react";
import Contact from "../Contact/Contact";
import './Footer.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { NavLink } from "react-router-dom";


class Footer extends Component
{
	render()
	{
		return (
			<div className="footer">
                <div className={'footer-st'}>
                    <p>Copyright &copy; 2021 Online Library</p>
                    <div className={'social-media'}>
                        <a href='https://www.facebook.com/'><FacebookIcon className={'media-icon fb'}/></a>
                        <a href='https://www.youtube.com/'><YouTubeIcon className={'media-icon yt'}/></a>
                        <a href='https://www.instagram.com/'><InstagramIcon className={'media-icon ig'}/></a>
                    </div>
                    <NavLink to={'/contact'} className={'contact'}>Contact</NavLink>
                </div>
			</div>
		);
	}
}

export default Footer;
