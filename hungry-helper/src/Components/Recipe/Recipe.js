import React from 'react';

const Recipe = ({ recipe }) => {


	console.log(recipe.strMeal);
    if(recipe === null) {
        return null
    } else
	return (
		<div className='recipe-div'>
			<h2>Recipe name:</h2>
		</div>
	);
};

export default Recipe;
