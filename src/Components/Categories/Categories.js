import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import './Categories.css';

const Categories = () => {
	const [category, setCategory] = useState('');

	const apiKey = process.env.REACT_APP_STOCK_API_KEY;
	// List all Categories
	const catUrl = `https://www.themealdb.com/api/json/v1/${apiKey}/categories.php`;

	useEffect(() => {
		fetch(catUrl)
			.then((res) => res.json())
			.then((resJson) => {
				setCategory(resJson.categories);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	console.log(category);
	if (!category) {
		return null;
	}
	let catList = category.map((item) => {
		return (
			<Link
				key={item.idCategory}
				className='link'
				to={`/category/${item.strCategory}`}>
				<li key={item.idCategory} className='cat-items'>
					{item.strCategory}
				</li>
			</Link>
		);
	});
	return (
		<div className='categories-div'>
			<h2>Choose a category to get started!</h2>
			<ul>{catList}</ul>
		</div>
	);
};

export default Categories;
