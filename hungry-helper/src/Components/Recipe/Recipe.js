import React from 'react';

const Recipe = () => {
const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=c`;

fetch(url)
	.then((res) => res.json())
	.then((resJson) => {
		console.log(resJson);
	});
    return (
        <div>
            
        </div>
    );
};

export default Recipe;