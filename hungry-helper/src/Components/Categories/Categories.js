import React, { useState, useEffect } from 'react';
import Category from '../Category/Category'

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
                console.log(category)
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	if (!category) {
		return null;
    }
    let catList = category.map((item) => {
        return (
            <li key={item.idCategory}>{item.strCategory}</li>
        )
    })
	return (
		<div>
			<h2>Choose a category to get started!</h2>
            <ul>{catList}</ul>
            <Category />
		</div>
	);
};

export default Categories;
