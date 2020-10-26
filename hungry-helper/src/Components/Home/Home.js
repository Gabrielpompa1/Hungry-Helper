import React, { useState } from 'react';
import Recipe from '../Recipe/Recipe'

const Home = ({ recipe }) => {

    return (
			<div>
				<main>
                    <h1>Home</h1>
                    <Recipe recipe={recipe}/>
                </main>
			</div>
		);
};

export default Home;