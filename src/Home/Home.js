import React, { Component } from "react";
import NavbarSecnd from "../Navbar/Navbar-secnd";
import "./Home.scss";
import image1 from '../images/profile.jpg';
import image2 from '../images/LetterA.jpg';
import image3 from '../images/logo.gif';
import image4 from '../images/LetterA-crem2.png';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


class Home extends Component
{
	constructor(props)
	{
		super(props);
		this.MAX_PRODS_FAV = 4;
		this.POS_MAX = this.MAX_PRODS_FAV - 1;
		this.count = 0;
	}

	setCount = (right) =>
	{
		if (right)
			this.count += 1;
		else
			this.count -= 1;
	}

	setStyle = (pos, isNone, lst) => 
	{
		if (isNone)
			lst[pos].style.display = "none";
		else
			lst[pos].style.display = "block";
	}

	onClickRightArr = (event) =>
	{
		event.preventDefault();

		const prodsLst = document.querySelectorAll('.prod-fav');
		console.log(prodsLst);

		if ((this.MAX_PRODS_FAV + this.count) === prodsLst.length) {console.log('rightArr return'); return}
		else 
		{
			this.setStyle(this.count, true, prodsLst);
			this.setCount(true);
			this.setStyle(this.POS_MAX + this.count, false, prodsLst);
		}
	}

	onClickLeftArr = (event) =>
	{
		event.preventDefault();

		const prodsLst = document.querySelectorAll('.prod-fav');
		if ((this.MAX_PRODS_FAV - this.count) === this.MAX_PRODS_FAV) {console.log('leftArr return'); return}
		else 
		{
			this.setStyle(this.POS_MAX + this.count, true, prodsLst);
			this.setCount(false);
			this.setStyle(this.count, false, prodsLst);
		}
	}
	
	render()
	{
		return (
			<div className="Home">
				<NavbarSecnd/>
				<div className={'home'}>
					<div className={'home-page'}>
						<section className={'favorite'}>
							<p className={'fav-title'}>Favorite</p>	
							<div className={'favorite-page'}>
								<a className={'fav-nav-arrow nav-before'} href='#left' id={'arr-left'} onClick={this.onClickLeftArr}><NavigateBeforeIcon className={'nav-before-ico nav-ico'}/></a>
								<div className={'fav-box'} id={'fav-box'}>
									<div className={'prod-fav'}>
										<img src={image1} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>45.67</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-fav'}>
										<img src={image2} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>456.78</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-fav'}>
										<img src={image3} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>4564.99</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-fav'}>
										<img src={image4} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>678</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-fav'}>
										<img src={image1} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>45.67</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-fav'}>
										<img src={image2} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>456.78</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-fav'}>
										<img src={image3} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>4564.99</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-fav'}>
										<img src={image4} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>678</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
								</div>
								<a className={'fav-nav-arrow nav-next'} href='#right' id={'arr-right'} onClick={this.onClickRightArr}><NavigateNextIcon className={'nav-next-ico nav-ico'}/></a>
							</div>					
						</section>

						<section className={'recommendations'}>
							<p className={'recom-title'}>Recommendations</p>	
							<div className={'recom-page'}>
								<a className={'recom-nav-arrow nav-before'} href='#left' id={'arr-left'} onClick={this.onClickLeftArr}><NavigateBeforeIcon className={'nav-before-ico nav-ico'}/></a>
								<div className={'recom-box'} id={'recom-box'}>
									<div className={'prod-recom'}>
										<img src={image1} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>45.67</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-recom'}>
										<img src={image2} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>456.78</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-recom'}>
										<img src={image3} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>4564.99</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-recom'}>
										<img src={image4} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>678</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-recom'}>
										<img src={image1} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>45.67</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-recom'}>
										<img src={image2} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>456.78</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-recom'}>
										<img src={image3} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>4564.99</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
									<div className={'prod-recom'}>
										<img src={image4} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>Et et ipsum incididunt anim tempor</p>
											<p className={'author'}>Lorem ipsum</p>
											<p className={'price'}>678</p>
											<button className={'add-to-cart'}>Add to cart</button>
										</div>
									</div>
								</div>
								<a className={'recom-nav-arrow nav-next'} href='#right' id={'arr-right'} onClick={this.onClickRightArr}><NavigateNextIcon className={'nav-next-ico nav-ico'}/></a>
							</div>
						</section>

					</div>
				</div>
				
			</div>
		);
	}
}

export default Home;
