import React from 'react';
import {RouteHandler, Link} from 'react-router';

const NotFound = React.createClass({
	render() {
		return (
			<div className="blog">
				<div className="container">
					<div className="jumbotron">
					  	<h1>404 Not Found!</h1>
					  	<p>你找的页面可能已经不存在了哦！去主页逛逛吧...</p>
					  	<p><Link className="btn btn-link btn-lg" to="/" role="button">Go Home&#x3e;&#x3e;</Link></p>
					</div>
				</div>
			</div>
		);
	}
});

export default NotFound;