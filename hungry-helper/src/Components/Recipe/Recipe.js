import React, { useState, useEffect } from 'react';

const Recipe = () => {
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
		<div className='recipe-div'>
			<img src={recipe.strMealThumb} alt='' />
			<h2>Recipe name: {recipe.strMeal}</h2>
			<h3>Category: {recipe.strCategory}</h3>
			<div className='ingredients-div'>
				<h2>Required Ingredients:</h2>
				<ul>
					<li>
						{recipe.strMeasure1} {recipe.strIngredient1}
					</li>
					<li>
						{recipe.strMeasure2} {recipe.strIngredient2}
					</li>
					<li>
						{recipe.strMeasure3} {recipe.strIngredient3}
					</li>
					<li>
						{recipe.strMeasure4} {recipe.strIngredient4}
					</li>
					<li>
						{recipe.strMeasure5} {recipe.strIngredient5}
					</li>
					<li>
						{recipe.strMeasure6} {recipe.strIngredient6}
					</li>
					<li>
						{recipe.strMeasure7} {recipe.strIngredient7}
					</li>
					<li>
						{recipe.strMeasure8} {recipe.strIngredient8}
					</li>
					<li>
						{recipe.strMeasure9} {recipe.strIngredient9}
					</li>
					<li>
						{recipe.strMeasure10} {recipe.strIngredient10}
					</li>
					<li>
						{recipe.strMeasure11} {recipe.strIngredient11}
					</li>
					<li>
						{recipe.strMeasure12} {recipe.strIngredient12}
					</li>
					<li>
						{recipe.strMeasure13} {recipe.strIngredient13}
					</li>
					<li>
						{recipe.strMeasure14} {recipe.strIngredient14}
					</li>
					<li>
						{recipe.strMeasure15} {recipe.strIngredient15}
					</li>
					<li>
						{recipe.strMeasure16} {recipe.strIngredient16}
					</li>
					<li>
						{recipe.strMeasure17} {recipe.strIngredient17}
					</li>
					<li>
						{recipe.strMeasure18} {recipe.strIngredient18}
					</li>
					<li>
						{recipe.strMeasure19} {recipe.strIngredient19}
					</li>
					<li>
						{recipe.strMeasure20} {recipe.strIngredient20}
					</li>
				</ul>
				<div className='instructions-div'>
					<h2>Measurements:</h2>
					<ul>
						<li></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
