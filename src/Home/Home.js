import React, {useEffect, useState} from "react";
import NavbarSecnd from "../Navbar/Navbar-secnd";
import {cartProdCount} from "../Navbar/Navbar-frst";
import "./Home.scss";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { db } from "../firebase";


const Home = () =>
{
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);

	const BOOKS_COLLECTION = db.collection('books');
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

	const onAddToCart = (e, bookId) =>
	{
		e.preventDefault();
		const storageLst = localStorage.getItem('cart-summary-token') ? JSON.parse(localStorage.getItem('cart-summary-token')) : [];
		localStorage['cartCount'] = 0;
		let storageCount = 0;

		for(let i=0; i<books.length; i++)
		{
			if(books[i]['id'] === bookId) { storageLst.push(bookId); }
		}
		storageCount = storageLst.length;
		localStorage.setItem('cart-summary-token', JSON.stringify(storageLst));
		localStorage.setItem('cartCount', storageCount.toString());
		console.log(localStorage['cart-summary-token']);
	}

	const getBooks = () =>
	{
		setLoading(true);
		BOOKS_COLLECTION.onSnapshot((query) => 
		{
			const BOOKS = [];
			let book = {};
			query.forEach((doc) => 
			{
				book = doc.data();
				book = Object.assign({id: doc.id}, book);
				BOOKS.push(book); 
			});
			console.log(BOOKS);
			setBooks(BOOKS);
			setLoading(false)
		})
	}

	useEffect(() => { getBooks(); }, []);

	if(loading) return (<h1>Loading...</h1>)

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
								{books.map((book) => (
									<div className={'prod-fav'} key={book.id} id={'prod-fav'}>
										<img src={book.url} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>{book.title}</p>
											<p className={'author'}>{book.author}</p>
											<p className={'stock'}>{book.stock}</p>
											<p className={'price'}>{book.price}</p>
											<button className={'add-to-cart'} onClick={(e) => onAddToCart(e, book.id)}>Add to cart</button>
										</div>
									</div>
								))}
							</div>
							<a className={'fav-nav-arrow'} href='#' onClick={(e) => onClickRightArr(e, '.prod-fav')}><NavigateNextIcon className={'nav-ico'}/></a>
						</div>					
					</section>

					<section className={'recommendations'}>
						<p className={'recom-title'}>Recommendations</p>	
						<div className={'recom-page'}>
							<a className={'recom-nav-arrow'} href='#' onClick={(e) => onClickLeftArr(e, '.prod-recom')}><NavigateBeforeIcon className={'nav-ico'}/></a>
							<div className={'recom-box'} id={'recom-box'}>
								{books.map((book) => (
									<div className={'prod-recom'} key={book.id} id={'prod-recom'}>
										<img src={book.url} alt='Not found'/>
										<div className={'details'}>
											<p className={'title'}>{book.title}</p>
											<p className={'author'}>{book.author}</p>
											<p className={'stock'}>{book.stock}</p>
											<p className={'price'}>{book.price}</p>
											<button className={'add-to-cart'} onClick={(e) => onAddToCart(e, book.id)}>Add to cart</button>
										</div>
									</div>
								))}
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
