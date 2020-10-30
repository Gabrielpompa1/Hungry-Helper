import React, { useState, useEffect } from 'react';
import './Category.css'

const Category = ({ match }) => {
	const [listItem, setListItem] = useState('');
	const apiKey = process.env.REACT_APP_STOCK_API_KEY;
	const catListUrl = `https://www.themealdb.com/api/json/v1/${apiKey}/filter.php?c=${match.params.id}`;

	useEffect(() => {
		console.log(match)
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
		return <li className='list-items' key={item.idMeal}>{item.strMeal}</li>;
	});
	return (
		<div>
            <h2>Pick a recipe!</h2>
			<ul>{list}</ul>
		</div>
	);
};

export default Category;
