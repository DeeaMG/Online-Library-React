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
                    <NavLink to={'/contact'} className={'contact'}>Contact</NavLink>
                    <div className={'social-media'}>
                        <FacebookIcon className={'media-icon fb'}/>
                        <YouTubeIcon className={'media-icon yt'}/>
                        <InstagramIcon className={'media-icon ig'}/>
                    </div>
                </div>
				<div className={'footer-nd'}>
                    <p>Copyright &copy; 2021 Online Library</p>
				</div>
			</div>
		);
	}
}

export default Footer;
