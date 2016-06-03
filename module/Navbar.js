import React from 'react';
import {Link} from 'react-router';

const Navbar = React.createClass({
	getInitialState() {
		return {
			hash : 'home'
		};
	},
	activeTab(evt) {
		this.setState({hash : location.hash.match(/\w+/)[0]});
		// let target = evt.target;
		// if(target.nodeName === 'A') {
		// 	let liEle = target.parentNode;
		// 	Array.prototype.slice.call(liEle.parentNode.childNodes).map(l => l.className = '');
		// 	liEle.className = 'active';
		// }
	},
	componentDidMount() {
		let hash = location.hash.match(/\w+/) ? location.hash.match(/\w+/) : 'home';
		this.setState({hash : hash});
	},
	render() {
		let hash = this.state.hash;
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/">Ryn·Smile</Link>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav" onClick={this.activeTab}>
							<li className={hash === 'home' ? "active" : ""}><Link to="/home">Home</Link></li>
					        <li className={hash === 'article' ? "active" : ""}><Link to="/article">Article</Link></li>
					        <li className={hash === 'gallery' ? "active" : ""}><Link to="/gallery">Gallery</Link></li>
					        {/*<li className={hash === 'codeBlock' ? "active" : ""}><Link to="/codeBlock">Code Block</Link></li>*/}
						</ul>
						<ul className="nav navbar-nav navbar-right">
				        	<li className={hash === 'about' ? "active" : ""} onClick={this.activeTab}><Link to="/about">About Me</Link></li>
				        	{/*<li className="dropdown">
				          		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
			          			<ul className="dropdown-menu">
			            			<li><a href="#">Action</a></li>
			            			<li><a href="#">Another action</a></li>
			            			<li><a href="#">Something else here</a></li>
			            			<li role="separator" className="divider"></li>
			            			<li><a href="#">Separated link</a></li>
			          			</ul>
			        		</li>*/}
				      	</ul>
					</div>
				</div>
			</nav>
		);
	}
});

export default Navbar;