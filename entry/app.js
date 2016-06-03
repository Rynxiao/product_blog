// load normalize.css
// import 'normalize.css';

// load styles
// load bootstrap style
// import 'bootstrap/dist/css/bootstrap.min';
// import 'bootstrap/dist/css/bootstrap-theme';
// load style
import '../src/style/style';
import '../src/style/gallery';

// load react Libs
import React from 'react';
import Router from 'react-router';

// load addtions libs
// load bootstrap
// import 'bootstrap';

// load tools script
import moment from 'moment';
import 'moment/locale/zh-cn';

// 加载模块
import App from '../module/App';
import Home from '../module/Home';
import Article from '../module/Article';
import Gallery from '../module/Gallery';
import CodeBlock from '../module/CodeBlock';
import About from '../module/About';
import NotFound from '../module/NotFound';

const {Route, DefaultRoute, NotFoundRoute, Redirect, Link} = Router;

const routes = (
	<Route location='hash'>
		<Route path="/" handler={App}>
			<Route path="home" handler={Home} />
			<Route path="article" handler={Article} />
			<Route path="gallery" handler={Gallery} />
			// <Route path="codeBlock" handler={CodeBlock} />
			<Route path="about" handler={About} />
			<DefaultRoute handler={Home} />
			<NotFoundRoute handler={NotFound} />
		</Route>
	</Route>
);

Router.run(routes, Router.HashLocation, Root => {
  	React.render(<Root />, document.body);
});
