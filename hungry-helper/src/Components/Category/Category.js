import React, { useState, useEffect } from 'react';

const Category = () => {
	const [listItem, setListItem] = useState('');
	const apiKey = process.env.REACT_APP_STOCK_API_KEY;
	const catListUrl = `https://www.themealdb.com/api/json/v1/${apiKey}/filter.php?c=Seafood`;

	useEffect(() => {
		fetch(catListUrl)
			.then((res) => res.json())
			.then((resJson) => {
				setListItem(resJson.meals);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	if (!listItem) {
		return null;
	}

	return (
		<div>
			<ul>
				<li>{listItem[0].strMeal}</li>
			</ul>
		</div>
	);
};

export default Category;
