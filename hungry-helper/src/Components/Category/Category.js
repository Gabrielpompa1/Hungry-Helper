import React, { useState, useEffect } from 'react';

const Category = () => {
	const [listItem, setListItem] = useState('');
	const apiKey = process.env.REACT_APP_STOCK_API_KEY;
	const catListUrl = `https://www.themealdb.com/api/json/v1/${apiKey}/filter.php?c=Lamb`;

	useEffect(() => {
		fetch(catListUrl)
			.then((res) => res.json())
			.then((resJson) => {
				setListItem(resJson.meals);
				console.log(listItem);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	if (!listItem) {
		return null;
	}

	let list = listItem.map((item) => {
		return <li key={item.idMeal}>{item.strMeal}</li>;
	});
	return (
		<div>
            <h2>Pick a recipe!</h2>
			<ul>{list}</ul>
		</div>
	);
};

export default Category;
