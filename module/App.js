import React from 'react';
import {RouteHandler} from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const App = React.createClass({
	render() {
		return (
			<div id="blog">
				<Navbar />
				<div>
					<RouteHandler />
				</div>
				<Footer />
			</div>
		);
	}
});

export default App;