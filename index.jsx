/** @format */

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
// const virtualElement = React.createElement(App);

// const recipe = () => {
// 	[
// 		"Sucre",
// 		"Sel",
// 		"Citron",
// 		"Vanille"
// 	]
// };

// const handleSubmit = (event) => {
// 	event.preventDefault();
// };

// root.render(
//	<Fragment>
// 		<h1>{recipe.title}</h1>
// 		<ul>
// 			{recipe.ingredients.map(ingredient => (
// 				<li>{ingredient}</li>
// 			))}
// 		</ul>
		
// 		<form onSubmit="{handleSubmit}">
// 			<label htmlFor="email">Email</label>
// 			<input id="email" type="text" />
// 			<button type="submit">Register</button>
// 		</form>
// 	</Fragment>
// );

const App = () => {
	const [counter, setCounter] = useState(0);

	return (
		<Fragment>
			<Navbar />
			<div>
				<h1>Compteur!</h1>
				<h2>Elapsed time: {counter}</h2>
				<button onClick={() => setCounter(counter + 1)}>Click me</button>
			</div>
		</Fragment>
	);
}

root.render(<App />);