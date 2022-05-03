/** @format */

import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Users from './Users';
// import Posts from './Posts';
import Photos from './Photos';
// import Albums from './Albums';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	
	render() {
		const route = window.location.pathname;

		const routes = {
			'/': <Home />,
			'/users': <Users />,
			// '/posts': <Posts />,
			'/photos': <Photos />,
			// '/albums': <Albums />
		};

		// TODO Error404.js
		return (
			<Fragment>
				<Navbar />
				{routes[route] || <Home />}
			</Fragment>
		);
	}
}

export default App;