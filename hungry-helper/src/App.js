import React, { useState, useEffect} from 'react';
import Header from './Components/Header/Header'
import Recipe from './Components/Recipe/Recipe'

const App = () => {
	const [recipe, setRecipe] = useState({
        strMeal: '',
        strArea: '',
        strCategory: '',
        strThumb: ''
    });
	const apiKey = process.env.REACT_APP_STOCK_API_KEY;

	// Random Recipe
	const url = `https://www.themealdb.com/api/json/v1/${apiKey}/random.php`;

	// Search recipe by letter
	// const url = `https://www.themealdb.com/api/json/v1/${apiKey}/search.php?f=c`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				setRecipe(resJson);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
    
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Recipe recipe={recipe}/>
            </div>
        </div>
    );
};

export default App;