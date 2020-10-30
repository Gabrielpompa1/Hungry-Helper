import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Recipe from './Components/Recipe/Recipe';
import Categories from './Components/Categories/Categories';
import Category from './Components/Category/Category';

const App = () => {
	return (
		<div>
			<header>
				<Header />
				<nav>
					<ul className='nav-ul'>
						<Link to='/'>
							<li>Home</li>
						</Link>
						<Link to='/random'>
							<li>Random</li>
						</Link>
						<Link to='/categories'>
							<li>Categories</li>
						</Link>
					</ul>
				</nav>
			</header>
			<main>
				<Route path='/' exact component={Home} />
				<Route path='/random' component={Recipe} />
				<Route path='/categories' component={Categories} />
				<Route path='/category:id' render={(routerProps) => {
					return (
						<Category
						match={routerProps.match} />
					)
				}} />
			</main>
		</div>
	);
};

export default App;
