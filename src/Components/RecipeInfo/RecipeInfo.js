import React, { useState, useEffect } from 'react';
import './RecipeInfo.css';

const RecipeInfo = ({ match }) => {
	const [specRecipe, setSpecRecipe] = useState('');
	const apiKey = process.env.REACT_APP_STOCK_API_KEY;
	const recUrl = `https://www.themealdb.com/api/json/v1/${apiKey}/lookup.php?i=${match.params.id}`;

	useEffect(() => {
		fetch(recUrl)
			.then((res) => res.json())
			.then((resJson) => {
				setSpecRecipe(resJson.meals[0]);

			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	if (!specRecipe) {
		return null;
	}
	// let list = specRecipe.map((item) => {
	// 	return <li>{item.strIngredient}</li>;
	// });

	return (
		<div className='container'>
			<div className='recipe-info-div'>
				{/* Header */}
				<header className='recipe-info-header'>
					<h1>{specRecipe.strMeal}</h1>
				</header>
				{/* End of Header */}

				{/* Image */}
				<div className='recipe-info-image-div'>
					<img
						id='recipe-info-image'
						src={specRecipe.strMealThumb}
						alt={specRecipe.strMeal}
					/>
				</div>
				{/* End of Image */}

				{/* Description */}
				<div className='recipe-info-description-div'>
					<h3>Category: {specRecipe.strCategory}</h3>
					<h3>Area: {specRecipe.strArea}</h3>
				</div>
				{/* End of Description */}

				{/* Ingredients */}
				<div className='recipe-info-ingredients-div'>
					<h2 className='recipe-info-ingredients-title'>
						Required Ingredients
					</h2>
					<ul>
						<li>
							{specRecipe.strMeasure1} {specRecipe.strIngredient1}
						</li>
						<li>
							{specRecipe.strMeasure2} {specRecipe.strIngredient2}
						</li>
						<li>
							{specRecipe.strMeasure3} {specRecipe.strIngredient3}
						</li>
						<li>
							{specRecipe.strMeasure4} {specRecipe.strIngredient4}
						</li>
						<li>
							{specRecipe.strMeasure5} {specRecipe.strIngredient5}
						</li>
						<li>
							{specRecipe.strMeasure6} {specRecipe.strIngredient6}
						</li>
						<li>
							{specRecipe.strMeasure7} {specRecipe.strIngredient7}
						</li>
						<li>
							{specRecipe.strMeasure8} {specRecipe.strIngredient8}
						</li>
						<li>
							{specRecipe.strMeasure9} {specRecipe.strIngredient9}
						</li>
						<li>
							{specRecipe.strMeasure10} {specRecipe.strIngredient10}
						</li>
						<li>
							{specRecipe.strMeasure11} {specRecipe.strIngredient11}
						</li>
						<li>
							{specRecipe.strMeasure12} {specRecipe.strIngredient12}
						</li>
						<li>
							{specRecipe.strMeasure13} {specRecipe.strIngredient13}
						</li>
						<li>
							{specRecipe.strMeasure14} {specRecipe.strIngredient14}
						</li>
						<li>
							{specRecipe.strMeasure15} {specRecipe.strIngredient15}
						</li>
						<li>
							{specRecipe.strMeasure16} {specRecipe.strIngredient16}
						</li>
						<li>
							{specRecipe.strMeasure17} {specRecipe.strIngredient17}
						</li>
						<li>
							{specRecipe.strMeasure18} {specRecipe.strIngredient18}
						</li>
						<li>
							{specRecipe.strMeasure19} {specRecipe.strIngredient19}
						</li>
						<li>
							{specRecipe.strMeasure20} {specRecipe.strIngredient20}
						</li>
					</ul>
				</div>
				{/* End of Ingredients */}

				{/* Instructions */}
				<div className='recipe-info-instructions-div'>
					<h2>Instructions</h2>
					<p>{specRecipe.strInstructions}</p>
					<h4>Video Tutorial</h4>
					<p>{specRecipe.strYoutube}</p>
				</div>
				{/* End of Instructions */}

				{/* Information */}
				<div className='recipe-info-information-div'>
					<h2>For more information.</h2>
					<p className='recipe-info-source-p'>{specRecipe.strSource}</p>
				</div>
				{/* End of Information */}
			</div>
		</div>
	);
};

export default RecipeInfo;
