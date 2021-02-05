import {BrowserRouter as Router} from "react-router-dom";
import React, {Component} from "react";
// import Products from "../Products";
import './Navbar-secnd.scss';
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";


class NavbarSecnd extends Component 
{
	mouseEnter = (element) => 
	{
		if (element) 
		{
			let elem = document.getElementById(element);
			let continut = document.getElementById('continut');
			continut.innerHTML = '';
			let elemHTML = "<div class='elemSubtype'><a href='https://www.emag.ro/' target='_blank' rel='noopener noreferrer'>";

			if(elem) 
			{
				for(let i = 0; i <= 5; i++)
				{
					continut.innerHTML += elemHTML + element + " elem" + i + "</a></div>";
				}
			}
		}
	}

	mouseLeave = () =>
	{
		document.getElementById('continut').innerHTML = '';
	}
	render() 
	{
		return (
		<Router forceRefresh={true}>
			<div className={'navbar-second'}>
				<div className={'produse'}>
					<div className={'title'}><ViewHeadlineIcon className={'headLine-ico'}/>Products</div>
					<div className={'produse-tipuri'}>
						<div className={'sidebar'}>
							<div className={'elem'} id={'type1'}>
								<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type1')} onMouseLeave={() => this.mouseLeave()}>Pariatur nulla sunt mollit</a>
							</div>

							<div className={'elem'} id={'type2'}>
								<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type2')} onMouseLeave={() => this.mouseLeave()}>Veniam consectetur cupidatat </a>
							</div>
						</div>
						<div className={'produse-continut'} id={'continut'}></div>
					</div>
				</div>
			</div>
		</Router>
		);
	}	
}

export default NavbarSecnd;
