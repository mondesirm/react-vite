import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
// const virtualElement = React.createElement(App);

/* const recipe = () => {
	[
		"Sucre",
		"Sel",
		"Citron",
		"Vanille"
	]
};

const handleSubmit = (event) => {
	event.preventDefault();
};

root.render(
	<Fragment>
		<h1>{recipe.title}</h1>
		<ul>
			{recipe.ingredients.map(ingredient => (
				<li>{ingredient}</li>
			))}
		</ul>
		
		<form onSubmit="{handleSubmit}">
			<label htmlFor="email">Email</label>
			<input id="email" type="text" />
			<button type="submit">Register</button>
		</form>
	</Fragment>
); */

root.render(<App />);