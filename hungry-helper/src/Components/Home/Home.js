import React from 'react';
import './Home.css'

const Home = () => {
	return (
		<div>
			<main>
				<div className='intro'>
					<h2>Welcome to Hungry Helper!</h2>
					<p>Your one-stop shop for cooking recipes!</p>
				</div>
                <div className='about'>
                    <h3>What is Hungry Helper?</h3>
                    <p>Hungry Helper is an application developed for the purpose of providing fantastic cooking recipes from all over the world.</p>
                </div>
                <div className='how'>
                    <h3>How does it work?</h3>
                    <p>Hungry Helper pull datat from a third party API, which contains a vast list of information on cooking recipes.</p>
                </div>
                <div className='get-started'>
                    <h3>How do I get started?</h3>
                    <h4>Random</h4>
                    <p>Click the 'Random" tab at the top of the page to be given a random recipe.</p>
                    <h4>Categories</h4>
                    <p>Click the 'Categories' tab at the top of the page to choose recipes from a list of categories.</p>
                </div>
			</main>
		</div>
	);
};

export default Home;
