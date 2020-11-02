import { Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Recipe from './Components/Recipe/Recipe';
import Categories from './Components/Categories/Categories';
import Category from './Components/Category/Category';
import RecipeInfo from './Components/RecipeInfo/RecipeInfo';
// import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => {
	return (
		<div>
			<header>
				<Header />
				<nav>
					<ul className='nav-ul'>
						<Link className='link' to='/'>
							<li className='li'>Home</li>
						</Link>
						<Link className='link' to='/random'>
							<li className='li'>Random</li>
						</Link>
						<Link className='link' to='/categories'>
							<li className='li'>Categories</li>
						</Link>
					</ul>
				</nav>
			</header>
			<main>
				<Route path='/' exact component={Home} />
				<Route path='/random' component={Recipe} />
				<Route path='/categories' component={Categories} />
				<Route
					path={`/category/:id`}
					render={(routerProps) => {
						return <Category match={routerProps.match} />;
					}}
				/>
				<Route
					path='/recipe/:id'
					render={(routerProps) => {
						return <RecipeInfo match={routerProps.match} />;
					}}
				/>
			</main>
			{/* <footer>
					{/* <Footer /> */}
			{/* </footer> */}
		</div>
	);
};

export default App;
