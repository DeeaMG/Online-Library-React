import './Navbar/Navbar-secnd.scss';
import React, { Component } from "react";


const Products = () =>
{
	const mouseEnter = (element) => 
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

	return (
		<div className={'sidebar'}>
			<div className={'elem'} id={'type1'}>
				<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => mouseEnter('type1')}>Pariatur nulla sunt mollit</a>
			</div>

			<div className={'elem'} id={'type2'}>
				<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => mouseEnter('type2')}>Veniam consectetur cupidatat </a>
			</div>

			<div className={'elem'} id={'type3'}>
				<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => mouseEnter('type3')}>Sunt ullamco</a>
			</div>

			<div className={'elem'} id={'type4'}>
				<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => mouseEnter('type4')}>Reprehenderit anim aliqua</a>
			</div>

			<div className={'elem'} id={'type5'}>
				<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => mouseEnter('type5')}>Commodo incididunt nisi</a>
			</div>

			<div className={'elem'} id={'type6'}>
				<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => mouseEnter('type6')}>Sit ad duis</a>
			</div>

			<div className={'elem'} id={'type7'}>
				<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => mouseEnter('type7')}>Eu occaecat commodo</a>
			</div>

			<div className={'elem'} id={'type8'}>
				<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => mouseEnter('type8')}>Labore commodo enim</a>
			</div>

			<div className={'elem'} id={'type9'}>
				<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => mouseEnter('type9')}>Ad ullamco eu</a>
			</div>

			<div className={'elem'} id={'type10'}>
				<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => mouseEnter('type10')}>Eu sit incididunt</a>
			</div>

			<div className={'elem'} id={'type11'}>
				<a href={'https://www.emag.ro/'} target='_blank' rel='noopener noreferrer' onMouseEnter={() => mouseEnter('type11')}>Duis minim quis</a>
			</div>

		</div>
	);
}

export default Products;
