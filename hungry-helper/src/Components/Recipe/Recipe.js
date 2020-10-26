import React, { useState, useEffect } from 'react';

const Recipe = () => {
    const [recipe, setRecipe] = useState();
    const apiKey = process.env.REACT_APP_STOCK_API_KEY
	const url = `https://www.themealdb.com/api/json/v1/${apiKey}/search.php?f=c`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((resJson) => {
               setRecipe(resJson)
               console.log(resJson)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

	return <div>   
        <h2>Recipe Item: {}</h2>
    </div>;
};

export default Recipe;
