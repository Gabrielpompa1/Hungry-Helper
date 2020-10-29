import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Recipe from './Components/Recipe/Recipe';
import Categories from './Components/Categories/Categories';

const App = () => {
	const [recipe, setRecipe] = useState('');
	const apiKey = process.env.REACT_APP_STOCK_API_KEY;

	// Random Recipe
	const url = `https://www.themealdb.com/api/json/v1/${apiKey}/random.php`;

	// Search recipe by letter
	// const url = `https://www.themealdb.com/api/json/v1/${apiKey}/search.php?f=c`;



	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				setRecipe(resJson.meals[0]);

			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

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
				<Route
					path='/random'
					render={() => {
						return <Recipe recipe={recipe} setRecipe={setRecipe} />;
					}}
				/>
				{/* <Route
					path='/categories'
					render={() => {
						return <Categories categories={categories} setCategories={setCategories}/>;
					}}
				/> */}
				<Route path='/categories' component={Categories}/>
			</main>
		</div>
	);
};

export default App;
