import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

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
				console.log(recipe);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className='container'>
			<div className='recipe-div'>
				{/* Header */}
				<header className='recipe-header'>
					<h1>{recipe.strMeal}</h1>
				</header>
				{/* End of Header */}

				{/* Image */}
				<div className='image-div'>
					<img
						id='recipe-image'
						src={recipe.strMealThumb}
						alt={recipe.strMeal}
					/>
				</div>
				{/* End of Image */}

				{/* Description */}
				<div className='description-div'>
					<h3>Category: {recipe.strCategory}</h3>
					<h3>Area: {recipe.strArea}</h3>
				</div>
				{/* End of Description */}

				{/* Ingredients */}
				<div className='ingredients-div'>
					<h2 className='ingredients-title'>Required Ingredients</h2>
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
				</div>
				{/* End of Ingredients */}

				{/* Instructions */}
				<div className='instructions-div'>
					<h2>Instructions</h2>
					<span>
						<h3>
							<a href={recipe.strYoutube}>Video Tutorial</a>
						</h3>
					</span>
					<p>{recipe.strInstructions}</p>
				</div>
				{/* End of Instructions */}

				{/* Information */}
				<div className='information-div'>
					<h2>
						Visit <a href={recipe.strSource}>here</a> for more information!
					</h2>
				</div>
				{/* End of Information */}
			</div>
		</div>
	);
};

export default Recipe;
