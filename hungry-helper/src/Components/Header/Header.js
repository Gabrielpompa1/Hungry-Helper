import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className='header'>
			<header>
				<h1 className='title'>Hungry Helper</h1>
			</header>
			<nav >
				<ul className='nav-ul'>
						<li>Home</li>
						<li>Random</li>
						<li>Categories</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
