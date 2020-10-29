import React, { useState, useEffect } from 'react';

const Category = () => {
	const [category, setCategories] = useState([]);

	const apiKey = process.env.REACT_APP_STOCK_API_KEY;
	// List all Categories
	const catUrl = `https://www.themealdb.com/api/json/v1/${apiKey}/categories.php`;

	useEffect(() => {
		fetch(catUrl)
			.then((res) => res.json())
			.then((resJson) => {
				setCategories(resJson.categories);
				console.log(category);
			})
			.catch((error) => {
				console.error(error);
			});
    }, []);

    
	return (
		<div>
			<h2>Choose a category to get started!</h2>
			<ul>
				<li>{category[0].strCategory}</li>
				<li>{category[1].strCategory}</li>
				<li>{category[2].strCategory}</li>
				<li>{category[3].strCategory}</li>
				<li>{category[4].strCategory}</li>
				<li>{category[5].strCategory}</li>
				<li>{category[6].strCategory}</li>
				<li>{category[7].strCategory}</li>
				<li>{category[8].strCategory}</li>
				<li>{category[9].strCategory}</li>
				<li>{category[10].strCategory}</li>
				<li>{category[11].strCategory}</li>
				<li>{category[11].strCategory}</li>
				<li>{category[12].strCategory}</li>
				<li>{category[13].strCategory}</li>
			</ul>
		</div>
	);
};

export default Category;
