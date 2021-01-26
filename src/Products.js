import './Navbar/Navbar-secnd.scss';
import React, { Component } from "react";


class Products extends Component 
{
	mouseEnter(element) 
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

	render()
	{
		return (
			<div className={'sidebar'}>
				<div className={'elem'} id={'type1'}>
					<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type1')}>element1</a>
				</div>

				<div className={'elem'} id={'type2'}>
					<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type2')}>element2</a>
				</div>

				<div className={'elem'} id={'type3'}>
					<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type3')}>element3</a>
				</div>

				<div className={'elem'} id={'type4'}>
					<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type4')}>Tip4</a>
				</div>

				<div className={'elem'} id={'type5'}>
					<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type5')}>Tip5</a>
				</div>

				<div className={'elem'} id={'type6'}>
					<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type6')}>Tip6</a>
				</div>

				<div className={'elem'} id={'type7'}>
					<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type7')}>Tip7</a>
				</div>

				<div className={'elem'} id={'type8'}>
					<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type8')}>Tip8</a>
				</div>

				<div className={'elem'} id={'type9'}>
					<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type9')}>Tip9</a>
				</div>

				<div className={'elem'} id={'type10'}>
					<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type10')}>Tip10</a>
				</div>

				<div className={'elem'} id={'type11'}>
					<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type11')}>Tip11</a>
				</div>

				<div className={'elem'} id={'type12'}>
					<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type12')}>Tip12</a>
				</div>

				<div className={'elem'} id={'type13'}>
					<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => this.mouseEnter('type13')}>Tip13</a>
				</div>

			</div>
		);
	}
}

export default Products;
