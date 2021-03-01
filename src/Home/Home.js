import React from "react";
import NavbarSecnd from "../Navbar/Navbar-secnd";
import "./Home.scss";
import image1 from '../images/profile.jpg';
import image2 from '../images/LetterA.jpg';
import image3 from '../images/logo.gif';
import image4 from '../images/LetterA-crem2.png';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const Home = () =>
{
	const MAX_PRODS = 4;
	const POS_MAX = MAX_PRODS - 1;
	let count_fav = 0;
	let count_recom = 0;

	const setCount = (right, pg) =>
	{
		if(pg === '.prod-fav')
		{
			if (right) { count_fav += 1; }
			else { count_fav -= 1; }
		}
		else if(pg === '.prod-recom')
		{
			if (right) { count_recom += 1; }
			else { count_recom -= 1; }
		}
	}

	const setStyle = (pos, prodPage, lst, right=false) =>
	{
		lst[pos].style.display = "none";

		if(right)
		{
			setCount(true, prodPage);
			pos = getCount(prodPage) + POS_MAX;
		}
		else
		{
			setCount(false, prodPage);
			pos = getCount(prodPage);
		}

		lst[pos].style.display = "block";
	}

	const getCount = (pg) =>
	{
		if(pg === '.prod-fav') { return count_fav;}
		return count_recom;
	}

	const onClickRightArr = (e, prodPage) =>
	{
		e.preventDefault();
		let count = getCount(prodPage);
		const prodsLst = document.querySelectorAll(prodPage);
		if ((MAX_PRODS + count) === prodsLst.length) { return }
		else { setStyle(count, prodPage, prodsLst, true); }
	}

	const onClickLeftArr = (e, prodPage) =>
	{
		e.preventDefault();
		let count = getCount(prodPage);
		const prodsLst = document.querySelectorAll(prodPage);
		if ((MAX_PRODS - count) === MAX_PRODS) { return }
		else { setStyle(POS_MAX + count, prodPage, prodsLst); }
	}

	const onAddToCart = () =>
	{
		
	}

	return (
		<div className="Home">
			<NavbarSecnd/>
			<div className={'home'}>
				<div className={'home-page'}>
					<section className={'favorite'}>
						<p className={'fav-title'}>Favorite</p>	
						<div className={'favorite-page'}>
							<a className={'fav-nav-arrow'} href='#' onClick={(e) => onClickLeftArr(e, '.prod-fav')}><NavigateBeforeIcon className={'nav-ico'}/></a>
							<div className={'fav-box'} id={'fav-box'}>
								<div className={'prod-fav'}>
									<img src={image1} alt='Not found'/>
									<div className={'details'}>
										<p className={'title'}>Et et ipsum incididunt anim tempor</p>
										<p className={'author'}>Lorem ipsum</p>
										<p className={'stock'}>NONE</p>
										<p className={'price'}>45.67</p>
										<button className={'add-to-cart'}>Add to cart</button>
									</div>
								</div>
								<div className={'prod-fav'}>
									<img src={image2} alt='Not found'/>
									<div className={'details'}>
										<p className={'title'}>Et et ipsum incididunt anim tempor</p>
										<p className={'author'}>Lorem ipsum</p>
										<p className={'stock'}>NONE</p>
										<p className={'price'}>456.78</p>
										<button className={'add-to-cart'}>Add to cart</button>
									</div>
								</div>
								<div className={'prod-fav'}>
									<img src={image3} alt='Not found'/>
									<div className={'details'}>
										<p className={'title'}>Et et ipsum incididunt anim tempor</p>
										<p className={'author'}>Lorem ipsum</p>
										<p className={'stock'}>NONE</p>
										<p className={'price'}>4564.99</p>
										<button className={'add-to-cart'}>Add to cart</button>
									</div>
								</div>
								<div className={'prod-fav'}>
									<img src={image4} alt='Not found'/>
									<div className={'details'}>
										<p className={'title'}>Et et ipsum incididunt anim tempor</p>
										<p className={'author'}>Lorem ipsum</p>
										<p className={'stock'}>NONE</p>
										<p className={'price'}>678</p>
										<button className={'add-to-cart'}>Add to cart</button>
									</div>
								</div>
							</div>
							<a className={'fav-nav-arrow'} href='#' onClick={(e) => onClickRightArr(e, '.prod-fav')}><NavigateNextIcon className={'nav-ico'}/></a>
						</div>					
					</section>

					<section className={'recommendations'}>
						<p className={'recom-title'}>Recommendations</p>	
						<div className={'recom-page'}>
							<a className={'recom-nav-arrow'} href='#' onClick={(e) => onClickLeftArr(e, '.prod-recom')}><NavigateBeforeIcon className={'nav-ico'}/></a>
							<div className={'recom-box'} id={'recom-box'}>
								<div className={'prod-recom'}>
									<img src={image1} alt='Not found'/>
									<div className={'details'}>
										<p className={'title'}>Et et ipsum incididunt anim tempor</p>
										<p className={'author'}>Lorem ipsum</p>
										<p className={'stock'}>NONE</p>
										<p className={'price'}>45.67</p>
										<button className={'add-to-cart'}>Add to cart</button>
									</div>
								</div>
								<div className={'prod-recom'}>
									<img src={image2} alt='Not found'/>
									<div className={'details'}>
										<p className={'title'}>Et et ipsum incididunt anim tempor</p>
										<p className={'author'}>Lorem ipsum</p>
										<p className={'stock'}>NONE</p>
										<p className={'price'}>456.78</p>
										<button className={'add-to-cart'}>Add to cart</button>
									</div>
								</div>
								<div className={'prod-recom'}>
									<img src={image3} alt='Not found'/>
									<div className={'details'}>
										<p className={'title'}>Et et ipsum incididunt anim tempor</p>
										<p className={'author'}>Lorem ipsum</p>
										<p className={'stock'}>NONE</p>
										<p className={'price'}>4564.99</p>
										<button className={'add-to-cart'}>Add to cart</button>
									</div>
								</div>
								<div className={'prod-recom'}>
									<img src={image4} alt='Not found'/>
									<div className={'details'}>
										<p className={'title'}>Et et ipsum incididunt anim tempor</p>
										<p className={'author'}>Lorem ipsum</p>
										<p className={'stock'}>NONE</p>
										<p className={'price'}>678</p>
										<button className={'add-to-cart'}>Add to cart</button>
									</div>
								</div>
							</div>
							<a className={'recom-nav-arrow'} href='#' onClick={(e) => onClickRightArr(e, '.prod-recom')}><NavigateNextIcon className={'nav-ico'}/></a>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default Home;
