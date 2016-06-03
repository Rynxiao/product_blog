webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// load normalize.css
	// import 'normalize.css';

	// load styles
	// load bootstrap style
	// import 'bootstrap/dist/css/bootstrap.min';
	// import 'bootstrap/dist/css/bootstrap-theme';
	// load style
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(3);

	__webpack_require__(9);

	// load react Libs

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(15);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	// load addtions libs
	// load bootstrap
	// import 'bootstrap';

	// load tools script

	var _moment = __webpack_require__(16);

	var _moment2 = _interopRequireDefault(_moment);

	__webpack_require__(113);

	// 加载模块

	var _moduleApp = __webpack_require__(115);

	var _moduleApp2 = _interopRequireDefault(_moduleApp);

	var _moduleHome = __webpack_require__(118);

	var _moduleHome2 = _interopRequireDefault(_moduleHome);

	var _moduleArticle = __webpack_require__(119);

	var _moduleArticle2 = _interopRequireDefault(_moduleArticle);

	var _moduleGallery = __webpack_require__(120);

	var _moduleGallery2 = _interopRequireDefault(_moduleGallery);

	var _moduleCodeBlock = __webpack_require__(121);

	var _moduleCodeBlock2 = _interopRequireDefault(_moduleCodeBlock);

	var _moduleAbout = __webpack_require__(122);

	var _moduleAbout2 = _interopRequireDefault(_moduleAbout);

	var _moduleNotFound = __webpack_require__(123);

	var _moduleNotFound2 = _interopRequireDefault(_moduleNotFound);

	var Route = _reactRouter2['default'].Route;
	var DefaultRoute = _reactRouter2['default'].DefaultRoute;
	var NotFoundRoute = _reactRouter2['default'].NotFoundRoute;
	var Redirect = _reactRouter2['default'].Redirect;
	var Link = _reactRouter2['default'].Link;

	var routes = _react2['default'].createElement(
		Route,
		{ location: 'hash' },
		_react2['default'].createElement(
			Route,
			{ path: '/', handler: _moduleApp2['default'] },
			_react2['default'].createElement(Route, { path: 'home', handler: _moduleHome2['default'] }),
			_react2['default'].createElement(Route, { path: 'article', handler: _moduleArticle2['default'] }),
			_react2['default'].createElement(Route, { path: 'gallery', handler: _moduleGallery2['default'] }),
			'// ',
			_react2['default'].createElement(Route, { path: 'codeBlock', handler: _moduleCodeBlock2['default'] }),
			_react2['default'].createElement(Route, { path: 'about', handler: _moduleAbout2['default'] }),
			_react2['default'].createElement(DefaultRoute, { handler: _moduleHome2['default'] }),
			_react2['default'].createElement(NotFoundRoute, { handler: _moduleNotFound2['default'] })
		)
	);

	_reactRouter2['default'].run(routes, _reactRouter2['default'].HashLocation, function (Root) {
		_react2['default'].render(_react2['default'].createElement(Root, null), document.body);
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js?strictMath&noIeCompat!./style.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js?strictMath&noIeCompat!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/********************** Home **************************/\n/********************** Article **************************/\n/********************** Gallery **************************/\n#blog {\n  color: #fff;\n  background: #020202;\n  background: -webkit-linear-gradient(top, #ccc, #020202);\n  background: linear-gradient(top, #ccc, #020202);\n}\n#blog .home {\n  min-height: 900px;\n}\n#blog .home .home-page1 {\n  background: url(" + __webpack_require__(6) + ") center no-repeat;\n  background-size: cover;\n}\n#blog .article {\n  height: 100%;\n  background-image: url(" + __webpack_require__(7) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n#blog .gallery {\n  background: #212121;\n}\n#blog .codeBlock {\n  min-height: 900px;\n}\n#blog .about {\n  min-height: 900px;\n}\n.navbar {\n  margin-bottom: 0;\n}\n#blog .home .home-page1 .jumbotron {\n  width: 70%;\n  margin: 0 auto;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 30px;\n}\n/* page style */\nhtml,\nbody {\n  height: 100%;\n  margin-left: 0;\n  margin-right: 0;\n}\n/* tools style */\na {\n  text-decoration: none;\n  outline: none;\n}\na:hover,\na:visited {\n  text-decoration: none;\n}\n#blog {\n  padding-top: 51px;\n  /*\n  home.less ��ҳ��ʽԤ��������\n*/\n  /*\n  article.less ��ҳ��ʽԤ��������\n*/\n  /*\n  about.less ��ҳ��ʽԤ��������\n*/\n  /*\n  footer.less ��ҳ��ʽԤ��������\n*/\n}\n#blog .home .home-page1 {\n  height: 700px;\n  position: relative;\n  padding: 120px 0;\n}\n#blog .home .home-page1 h1 {\n  text-shadow: 0 0 3em #000;\n}\n#blog .home .home-page1 .time {\n  position: absolute;\n  top: 30px;\n  right: 90px;\n  font-size: 64px;\n  color: #f0f0f0;\n}\n#blog .home .home-page1 .time-detail {\n  position: absolute;\n  top: 120px;\n  right: 131px;\n}\n#blog .home .home-page1 .more a {\n  margin-top: 10px;\n  display: inline-block;\n  border: 2px solid #fff;\n  padding: 15px 108px;\n  border-radius: 7px;\n  box-shadow: 0 0 1em #000;\n  font-size: 20px;\n  color: #1a1a1a;\n  text-shadow: 1px 1px 3px #fff;\n}\n#blog .home .home-page2 {\n  position: relative;\n  background-image: -webkit-gradient(linear, center top, center bottom, color-stop(0.1, #ccc), color-stop(0.1, transparent), to(transparent));\n  background-size: 100% 20px;\n  background-color: #f0f0f0;\n  padding: 100px 0;\n}\n#blog .home .home-page2 .honeycomb {\n  width: 810px;\n  margin: 0 auto;\n}\n#blog .home .home-page2 .hex {\n  width: 150px;\n  height: 86px;\n  margin: 25px 5px;\n  position: relative;\n  float: left;\n  background-color: #ccc;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  -webkit-background-size: auto 173px;\n  text-align: center;\n  zoom: 1;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n#blog .home .home-page2 .hex-gap {\n  margin-left: 86px;\n}\n#blog .home .home-page2 .hex a {\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-indent: -9999em;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 5;\n}\n#blog .home .home-page2 .hex:hover {\n  transform: rotate(360deg);\n  -webkit-transform: rotate(360deg);\n  -moz-transform: rotate(360deg);\n  -o-transform: rotate(360deg);\n  -ms-transform: rotate(360deg);\n}\n#blog .home .home-page2 .hex .corner1,\n#blog .home .home-page2 .hex .corner2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: inherit;\n  overflow: hidden;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n#blog .home .home-page2 .hex .corner1 {\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg);\n}\n#blog .home .home-page2 .hex .corner2 {\n  -webkit-transform: rotate(-60deg);\n          transform: rotate(-60deg);\n}\n#blog .home .home-page2 .hex .corner1:before {\n  -webkit-transform: rotate(-60deg) translate(-87px, 0px);\n          transform: rotate(-60deg) translate(-87px, 0px);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n#blog .home .home-page2 .hex .corner2:before {\n  -webkit-transform: rotate(60deg) translate(-48px, -11px);\n          transform: rotate(60deg) translate(-48px, -11px);\n  bottom: 0;\n}\n#blog .home .home-page2 .hex .corner1:before,\n#blog .home .home-page2 .hex .corner2:before {\n  width: 173px;\n  height: 173px;\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background: inherit;\n  background-repeat: no-repeat;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n#blog .home .home-page3 {\n  background-color: rgba(0, 0, 0, 0);\n  padding: 100px 10%;\n}\n#blog .home .home-page3 .timeline {\n  width: 100%;\n  margin: 40px auto;\n  padding: 50px 10%;\n  background: rgba(58, 58, 58, 0);\n  /*box-shadow: 0 0 7px @timelineBoxShadow;*/\n  position: relative;\n}\n#blog .home .home-page3 .timeline .divideLine {\n  width: 2px;\n  height: 100%;\n  background-color: #fff;\n  position: absolute;\n  left: 50%;\n  top: -20px;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n#blog .home .home-page3 .timeline .left,\n#blog .home .home-page3 .timeline .right {\n  width: 50%;\n}\n#blog .home .home-page3 .timeline .left .sub-time,\n#blog .home .home-page3 .timeline .right .sub-time {\n  width: 100%;\n  position: relative;\n  margin-bottom: 30px;\n}\n#blog .home .home-page3 .timeline .left .sub-time .dot-outer,\n#blog .home .home-page3 .timeline .right .sub-time .dot-outer {\n  display: block;\n  width: 14px;\n  height: 14px;\n  background-color: #EF5555;\n  position: absolute;\n  top: 6px;\n  left: 0;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  border-radius: 50%;\n}\n#blog .home .home-page3 .timeline .left .sub-time .dot-inner,\n#blog .home .home-page3 .timeline .right .sub-time .dot-inner {\n  display: block;\n  width: 8px;\n  height: 8px;\n  background-color: #fff;\n  position: absolute;\n  top: 9px;\n  left: 0;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  border-radius: 50%;\n}\n#blog .home .home-page3 .timeline .left .sub-time .time-date,\n#blog .home .home-page3 .timeline .right .sub-time .time-date {\n  position: relative;\n}\n#blog .home .home-page3 .timeline .left .sub-time .time-date .date,\n#blog .home .home-page3 .timeline .right .sub-time .time-date .date {\n  display: inline-block;\n  background-color: #EF5555;\n  color: #fff;\n  padding: 5px 10px;\n  border-radius: 3px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);\n}\n#blog .home .home-page3 .timeline .left .sub-time .time-date .arrow,\n#blog .home .home-page3 .timeline .right .sub-time .time-date .arrow {\n  position: absolute;\n  display: inline-block;\n  border-left: 5px solid transparent;\n  border-right: 5px solid #EF5555;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  left: -10px;\n  top: 8px;\n}\n#blog .home .home-page3 .timeline .left .sub-time .time-content,\n#blog .home .home-page3 .timeline .right .sub-time .time-content {\n  width: 100%;\n  padding: 10px 20px 20px;\n  margin-top: 10px;\n  box-sizing: border-box;\n  background-color: rgba(253, 250, 250, 0.39);\n  border-radius: 3px;\n  font-family: 'MicroSoft YaHei', Helvetica, Arial, sans-serif;\n}\n#blog .home .home-page3 .timeline .left .sub-time .time-content p,\n#blog .home .home-page3 .timeline .right .sub-time .time-content p {\n  padding: 10px 0;\n}\n#blog .home .home-page3 .timeline .left .sub-time .time-content .title,\n#blog .home .home-page3 .timeline .right .sub-time .time-content .title {\n  font-size: 16px;\n  font-weight: bold;\n}\n#blog .home .home-page3 .timeline .left .sub-time .time-content .author > span,\n#blog .home .home-page3 .timeline .right .sub-time .time-content .author > span {\n  display: inline-block;\n  padding-right: 16px;\n}\n#blog .home .home-page3 .timeline .left .sub-time .time-content .author > span a,\n#blog .home .home-page3 .timeline .right .sub-time .time-content .author > span a {\n  color: #555;\n  margin-left: 5px;\n}\n#blog .home .home-page3 .timeline .left .sub-time .time-content .author > span span,\n#blog .home .home-page3 .timeline .right .sub-time .time-content .author > span span {\n  width: 12px;\n  height: 12px;\n  color: #555;\n}\n#blog .home .home-page3 .timeline .left .sub-time .time-content .content,\n#blog .home .home-page3 .timeline .right .sub-time .time-content .content {\n  color: #000;\n}\n#blog .home .home-page3 .timeline .left .sub-time {\n  padding-right: 40px;\n}\n#blog .home .home-page3 .timeline .left .sub-time .dot-outer {\n  left: 100%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n#blog .home .home-page3 .timeline .left .sub-time .dot-inner {\n  left: 100%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n#blog .home .home-page3 .timeline .left .sub-time .time-date {\n  text-align: right;\n}\n#blog .home .home-page3 .timeline .left .sub-time .time-date .arrow {\n  border-left: 5px solid #EF5555;\n  border-right: 5px solid transparent;\n  left: 100%;\n}\n#blog .home .home-page3 .timeline .right {\n  padding-top: 30px;\n}\n#blog .home .home-page3 .timeline .right .sub-time {\n  padding-left: 40px;\n}\n#blog .article {\n  overflow: hidden;\n}\n#blog .article .article-wrapper {\n  width: 90%;\n}\n#blog .article .article-wrapper .article-detail {\n  width: 70%;\n  margin: 100px 0;\n  padding: 50px 5%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n#blog .article .article-wrapper .article-detail .a-list {\n  width: 100%;\n  overflow: hidden;\n  box-shadow: 0 0 6px #fff;\n  margin: 30px 0;\n  padding: 10px 20px 30px;\n  background-color: rgba(62, 62, 62, 0.3);\n}\n#blog .article .article-wrapper .article-detail .a-list .a-time {\n  padding-right: 5%;\n}\n#blog .article .article-wrapper .article-search {\n  width: 25%;\n  margin: 100px 0 100px 20px;\n  padding: 50px 3%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n#blog .article .article-wrapper .article-search .search input {\n  width: 60%;\n  height: 30px;\n  line-height: 30px;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid white;\n  outline: none;\n  border-radius: 2px;\n  margin-right: 10px;\n  text-indent: 10px;\n  font-weight: bold;\n  -webkit-transition: width 0.25s ease-in-out;\n  transition: width 0.25s ease-in-out;\n}\n#blog .article .article-wrapper .article-search .search input:focus {\n  width: 80%;\n}\n#blog .article .article-wrapper .article-search .search .s-btn {\n  background-color: #f0f0f0;\n  color: #333;\n  border: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 2px;\n}\n#blog .article .article-wrapper .article-search .ca-list {\n  width: 85%;\n  margin: 20px 0;\n  border: 1px solid #fff;\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: rgba(62, 62, 62, 0.3);\n}\n#blog .article .article-wrapper .article-search .ca-list .type-list li a {\n  display: inline-block;\n  padding: 2px 0;\n  color: #f0f0f0;\n}\n#blog .about {\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, #333), color-stop(0.25, transparent), color-stop(0.75, transparent), color-stop(0.75, #333)), -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, #333), color-stop(0.25, transparent), color-stop(0.75, transparent), color-stop(0.75, #333));\n  background-position: 0 0, 1px 1px;\n  background-color: #222;\n  background-size: 3px 3px;\n  font-family: \"MicroSoft YaHei\", Georgia, \"MS Sans Serif\", Geneva, sans-serif;\n}\n#blog .about .portrait {\n  padding-top: 40px;\n}\n#blog .about .hobby {\n  padding: 20px 0 0 15px;\n}\n#blog .about .brief .brief-normal {\n  height: 319px;\n  margin-top: 30px;\n  overflow: hidden;\n  position: relative;\n}\n#blog .about .brief .brief-normal > h4 {\n  padding-left: 15px;\n}\n#blog .about .brief .brief-normal .brief-row {\n  position: absolute;\n  top: 39px;\n  left: 0;\n  margin-bottom: 20px;\n  padding: 10px 0;\n  background: rgba(56, 56, 56, 0.84);\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n#blog .about .brief .literature > div {\n  width: 100%;\n}\n#blog .about .brief .literature .literature-1 {\n  opacity: 1;\n}\n#blog .about .brief .literature .literature-2 {\n  opacity: 0;\n}\n#blog .about .backToTop {\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  position: fixed;\n  right: 5px;\n  bottom: 150px;\n  background-color: #999;\n}\n#blog .about .backToTop a {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  color: #fff;\n}\n#blog .about .backToTop a .glyphicon {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  -webkit-transition: opacity .25s linear;\n  transition: opacity .25s linear;\n}\n#blog .about .backToTop a .toTop {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  -webkit-transition: opacity .25s linear;\n  transition: opacity .25s linear;\n}\n#blog .about .backToTop a:hover .glyphicon {\n  opacity: 0;\n}\n#blog .about .backToTop a:hover .toTop {\n  opacity: 1;\n}\n#blog .footer {\n  padding: 50px;\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	"use strict";

	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "28d856ac95af1b121b9d019b6e46fb07.jpg";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "581d0d4338bf842564ebb9deaa8449ce.jpg";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js?strictMath&noIeCompat!./gallery.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js?strictMath&noIeCompat!./gallery.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".gallery {\n  background: #212121;\n  color: #fff;\n  font-size: 1em;\n  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  min-height: 100vh;\n  height: 100%;\n  overflow: hidden;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/* Hero image */\n.hero {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n.hero > div {\n  background: #212121 url(" + __webpack_require__(11) + ") no-repeat 50% 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.hero__back--static,\n.hero__front {\n  -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;\n  -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;\n  transition: opacity 0.5s, -webkit-transform 0.5s;\n  transition: transform 0.5s, opacity 0.5s;\n  transition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;\n  -webkit-transform-origin: 50% 60px;\n  transform-origin: 50% 60px;\n  -webkit-transition-timing-function: cubic-bezier(0.6, 0, 0.4, 1);\n  transition-timing-function: cubic-bezier(0.6, 0, 0.4, 1);\n}\n.hero__back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.hero__back--mover {\n  opacity: 0.7;\n  -webkit-transition: -webkit-transform 0.4s, opacity 0s 0.5s;\n  -webkit-transition: opacity 0s 0.5s, -webkit-transform 0.4s;\n  transition: opacity 0s 0.5s, -webkit-transform 0.4s;\n  transition: transform 0.4s, opacity 0s 0.5s;\n  transition: transform 0.4s, opacity 0s 0.5s, -webkit-transform 0.4s;\n}\n.move-items .hero__back--mover {\n  opacity: 0;\n  -webkit-transition-delay: 0s;\n  transition-delay: 0s;\n}\n.hero__front {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin: 0 0 0 -391px;\n  width: 782px;\n  height: 782px;\n  border-radius: 50%;\n  opacity: 0;\n}\n.move-items .hero__back--static {\n  opacity: 0;\n  -webkit-transform: scale3d(0.15, 0.15, 1);\n  transform: scale3d(0.15, 0.15, 1);\n}\n.move-items .hero__front {\n  opacity: 1;\n  -webkit-transition-duration: 0.5s, 0s;\n  transition-duration: 0.5s, 0s;\n  -webkit-transform: scale3d(0.15, 0.15, 1);\n  transform: scale3d(0.15, 0.15, 1);\n}\n/* Stack slider */\n.stack-slider {\n  position: absolute;\n  height: 40vh;\n  width: 100vw;\n  top: 0;\n  opacity: 0;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-transform: translate3d(0, 60vh, 0);\n  transform: translate3d(0, 60vh, 0);\n  -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;\n  -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;\n  transition: opacity 0.5s, -webkit-transform 0.5s;\n  transition: transform 0.5s, opacity 0.5s;\n  transition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.6, 0, 0.4, 1);\n  transition-timing-function: cubic-bezier(0.6, 0, 0.4, 1);\n}\n.view-init .stack-slider {\n  opacity: 1;\n}\n.move-items .stack-slider {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.view-full .flickity-viewport {\n  overflow: visible;\n}\n/* Loader */\n.loader {\n  position: fixed;\n  width: 60px;\n  height: 15px;\n  top: 80vh;\n  left: 50%;\n  margin: -7px 0 0 -30px;\n}\n.view-init .loader {\n  display: none;\n}\n.stacks-wrapper {\n  height: 100%;\n  outline: none;\n}\n.stack {\n  width: 45%;\n  min-width: 300px;\n  height: 100%;\n  text-align: center;\n}\n.stack.is-selected {\n  height: auto;\n}\n.stack.stack-prev,\n.stack.stack-next {\n  -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;\n  -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;\n  transition: opacity 0.5s, -webkit-transform 0.5s;\n  transition: transform 0.5s, opacity 0.5s;\n  transition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.6, 0, 0.4, 1);\n  transition-timing-function: cubic-bezier(0.6, 0, 0.4, 1);\n}\n.move-items .stack.stack-prev,\n.move-items .stack.stack-next {\n  opacity: 0;\n}\n.move-items .stack.stack-prev {\n  -webkit-transform: translate3d(-70px, 65vh, 0);\n  transform: translate3d(-70px, 65vh, 0);\n}\n.move-items .stack.stack-next {\n  -webkit-transform: translate3d(70px, 65vh, 0);\n  transform: translate3d(70px, 65vh, 0);\n}\n.stack.is-selected .stack-title::before,\n.stack.stack-prev .stack-title::after,\n.stack.stack-next .stack-title::after {\n  content: '';\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  opacity: 0;\n  z-index: 100;\n}\n.stack.is-selected .stack-title::before {\n  margin: 0 0 0 -15px;\n  left: 50%;\n  top: 10px;\n  background: url(" + __webpack_require__(12) + ") no-repeat center center;\n  -webkit-transition: -webkit-transform 0.5s, opacity 0.3s;\n  -webkit-transition: opacity 0.3s, -webkit-transform 0.5s;\n  transition: opacity 0.3s, -webkit-transform 0.5s;\n  transition: transform 0.5s, opacity 0.3s;\n  transition: transform 0.5s, opacity 0.3s, -webkit-transform 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.6, 0, 0.4, 1);\n  transition-timing-function: cubic-bezier(0.6, 0, 0.4, 1);\n}\n.item-clickable .stack.is-selected .stack-title::before {\n  opacity: 1;\n}\n.move-items .is-selected .stack-title::before {\n  -webkit-transform: rotate3d(0, 0, 1, 180deg);\n  transform: rotate3d(0, 0, 1, 180deg);\n}\n.stack.stack-prev .stack-title::after,\n.stack.stack-next .stack-title::after {\n  content: '';\n  top: 1.65em;\n  background: url(" + __webpack_require__(13) + ") no-repeat center center;\n}\n.stack.stack-prev .stack-title::after {\n  right: 0;\n  -webkit-transform: rotate3d(0, 0, 1, -90deg);\n  transform: rotate3d(0, 0, 1, -90deg);\n}\n.stack.stack-next .stack-title::after {\n  left: 0;\n  -webkit-transform: rotate3d(0, 0, 1, 90deg);\n  transform: rotate3d(0, 0, 1, 90deg);\n}\n.stack.stack-prev .stack-title:hover::after,\n.stack.stack-next .stack-title:hover::after {\n  opacity: 1;\n}\n.stack-title {\n  font-size: 2.25em;\n  font-weight: 700;\n  margin: 80px 0 30px;\n  padding: 50px 40px 15px;\n  text-align: center;\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n}\n.stack-title a {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  color: #fff;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  text-decoration: none;\n  outline: none;\n}\n.stack-title a::after {\n  content: attr(data-text);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  font-size: 0.5em;\n  line-height: 2.5;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}\n.stack-title a span {\n  display: block;\n  color: #595959;\n  cursor: pointer;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.is-selected .stack-title a span {\n  color: #ef5350;\n}\n.stack-title a::after,\n.stack-title a span {\n  -webkit-transition: -webkit-transform 1s 0.15s, opacity 1s 0.15s;\n  -webkit-transition: opacity 1s 0.15s, -webkit-transform 1s 0.15s;\n  transition: opacity 1s 0.15s, -webkit-transform 1s 0.15s;\n  transition: transform 1s 0.15s, opacity 1s 0.15s;\n  transition: transform 1s 0.15s, opacity 1s 0.15s, -webkit-transform 1s 0.15s;\n  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n}\n.stack-title a:hover {\n  color: #fff;\n}\n.move-items .is-selected .stack-title a::after {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.move-items .is-selected .stack-title a span {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -150%, 0);\n  transform: translate3d(0, -150%, 0);\n}\n.item {\n  padding: 0 5% 5%;\n  opacity: 0;\n  width: 100%;\n  position: relative;\n  text-align: left;\n  -webkit-transform: translate3d(0, 75px, 0);\n  transform: translate3d(0, 75px, 0);\n  -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;\n  -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;\n  transition: opacity 0.5s, -webkit-transform 0.5s;\n  transition: transform 0.5s, opacity 0.5s;\n  transition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.6, 0, 0.4, 1);\n  transition-timing-function: cubic-bezier(0.6, 0, 0.4, 1);\n}\n.move-items .is-selected .item {\n  opacity: 1;\n}\n.move-items .is-selected .item:first-of-type .item__content::after {\n  -webkit-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1);\n  transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1);\n}\n.move-items .is-selected .item:first-of-type .item__content::before {\n  -webkit-transform: translate3d(0, 0, 0) scale3d(0.9, 0.9, 1);\n  transform: translate3d(0, 0, 0) scale3d(0.9, 0.9, 1);\n}\n.item:first-of-type {\n  opacity: 0.25;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.move-items .is-selected .item {\n  -webkit-transition-delay: 0.15s;\n  transition-delay: 0.15s;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.move-items .is-selected .item:first-of-type {\n  -webkit-transition-delay: 0s;\n  transition-delay: 0s;\n}\n.item__content {\n  position: relative;\n  z-index: 100;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.item__content p {\n  font-size: 0.75em;\n}\n.item:first-of-type .item__content::before,\n.item:first-of-type .item__content::after {\n  content: '';\n  width: 100%;\n  height: 20px;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  position: absolute;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.item:first-of-type .item__content::before {\n  background: #b8b8b8;\n  -webkit-transform: translate3d(0, -20px, 0) scale3d(0.9, 0.9, 1);\n  transform: translate3d(0, -20px, 0) scale3d(0.9, 0.9, 1);\n}\n.item:first-of-type .item__content::after {\n  background: #a7a7a7;\n  -webkit-transform: translate3d(0, -10px, 0) scale3d(0.95, 0.95, 1);\n  transform: translate3d(0, -10px, 0) scale3d(0.95, 0.95, 1);\n}\n.item img {\n  width: 100%;\n  display: block;\n  position: relative;\n  z-index: 100;\n}\n.item__title {\n  font-size: 1.25em;\n  margin: 0;\n  padding: 0.75em 0;\n  color: #9d9d9d;\n}\n.item__date {\n  font-size: 0.5em;\n  vertical-align: middle;\n  display: inline-block;\n  color: #4F4E4E;\n  margin-left: 5px;\n}\n.item__details {\n  text-align: left;\n  margin: 0 0 2em;\n}\n.item__details ul {\n  font-family: 'Avenir Next', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.item__details ul li {\n  display: block;\n  padding: 3px 0;\n  color: #9d9d9d;\n  white-space: nowrap;\n  opacity: 0;\n  -webkit-transform: translate3d(0, 20px, 0);\n  transform: translate3d(0, 20px, 0);\n  -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;\n  -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;\n  transition: opacity 0.5s, -webkit-transform 0.5s;\n  transition: transform 0.5s, opacity 0.5s;\n  transition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;\n}\n.move-items .is-selected .item__details ul li {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.move-items .is-selected .item__details ul li:first-child {\n  -webkit-transition-delay: 0.25s;\n  transition-delay: 0.25s;\n}\n.move-items .is-selected .item__details ul li:nth-child(2) {\n  -webkit-transition-delay: 0.3s;\n  transition-delay: 0.3s;\n}\n.move-items .is-selected .item__details ul li:nth-child(3) {\n  -webkit-transition-delay: 0.35s;\n  transition-delay: 0.35s;\n}\n.move-items .is-selected .item__details ul li:nth-child(4) {\n  -webkit-transition-delay: 0.4s;\n  transition-delay: 0.4s;\n}\n.move-items .is-selected .item__details ul li:nth-child(5) {\n  -webkit-transition-delay: 0.45s;\n  transition-delay: 0.45s;\n}\n.item__details ul li:first-child {\n  font-weight: bold;\n  color: #ef5350;\n}\n/* Mobile-first media queries */\n@media screen and (min-width: 65em) {\n  .item__details {\n    position: absolute;\n    top: 0;\n    margin: 0 0 0 1em;\n    z-index: 1000;\n    left: 100%;\n    width: 40%;\n  }\n}\n/* Mobile-specific media queries */\n@media screen and (max-width: 65em) {\n  .stack {\n    width: 60%;\n  }\n}\n@media screen and (max-width: 45em) {\n  .stack-title {\n    font-size: 1.75em;\n  }\n  .stack.stack-prev .stack-title::after,\n  .stack.stack-next .stack-title::after {\n    top: 1.85em;\n  }\n}\n@media screen and (max-height: 35em) {\n  .stack-slider {\n    height: 60vh;\n    -webkit-transform: translate3d(0, 40vh, 0);\n    transform: translate3d(0, 40vh, 0);\n  }\n}\n.item__details .glyphicon + span {\n  margin-left: 5px;\n  vertical-align: middle;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ce34b16d2b4b06dbf929f9dd592d8ad8.jpg";

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABNUlEQVQ4T62TzVHDMBBGvyUF4K0ApwJKIOlAONwJHdABoQQqAO7Ys1SAqQA6iKlAoYAgRrKdyI4Uj2ey1129edofwpHQmVqC8OxKDO64kJdYOcUSWqkEZ/gCIW1AFRcyHQ/K1AqEBxh8AkhAuITBIxeyCsGCRo3NGuQA88boAwYb/GHKIps+LAzybLiQmX2kM1WCcBWzOgD1bfhNSge6UTMYRK0OQQtlJ3ML4J1zUf4XdlbAE+dy7+c6IK1UignWrmDrelF1QEfyXdDe5pVzWYamoyM1O9CQTQuN1e1B7VQC/++beVbCuVzbvAO1EzHAL22Rhvak16vETFARcG73zE62Bg3sSLBX7a4BJecyp7E2Xq86VqQz9T10R9HD9qxIL5SBwQ8XUl/5iGiuwIpc1KATxMlA/7nXq+o1l2WWAAAAAElFTkSuQmCC"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABQklEQVQ4T62TvVHDQBCF38usCHeAVAElYHcgslWE6YAOMCVQASa6DeUKMBXgDhAdmMjOljmNz3OW9YNmuPR2v/nu9i3Rc0RkQfLVl5jZg6quusrZdZHn+XQymXySTI+gSlWz0SARWZJ8AvBhZlOSN2b2rKrLNlirkbdJkuQLwNTM5r6R5DuA3X6/z8qy3DVhraDYxjk3801FUWwA3HZZXYCaNqrqARCRWZ/VBUhEViTvzWytqnn8hGAF4MU59xjfnYFEJCXp/8aPO1PVKi7uu2+Cgs2bqi7aphMZn9WcQEM2AdpVdwL1vb9pFqwAlM65uzoe8UTM7OdwOKRtOYlhx9RXJK98zvxka9BQRjr+qk6+mW1Udc6Qj7/aBGjTyoO2Q3vUtahhA7wVi6IwAN/OuXrLx5zjFmwBXAfQmP7W2n8D/QKh69xAHnaSFgAAAABJRU5ErkJggg=="

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.11.2
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com
	'use strict';;(function(global,factory){ true?module.exports = factory():typeof define === 'function' && define.amd?define(factory):global.moment = factory();})(undefined,function(){'use strict';var hookCallback;function utils_hooks__hooks(){return hookCallback.apply(null,arguments);} // This is done to register the method called with moment()
	// without creating circular dependencies.
	function setHookCallback(callback){hookCallback = callback;}function isArray(input){return Object.prototype.toString.call(input) === '[object Array]';}function isDate(input){return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';}function map(arr,fn){var res=[],i;for(i = 0;i < arr.length;++i) {res.push(fn(arr[i],i));}return res;}function hasOwnProp(a,b){return Object.prototype.hasOwnProperty.call(a,b);}function extend(a,b){for(var i in b) {if(hasOwnProp(b,i)){a[i] = b[i];}}if(hasOwnProp(b,'toString')){a.toString = b.toString;}if(hasOwnProp(b,'valueOf')){a.valueOf = b.valueOf;}return a;}function create_utc__createUTC(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,true).utc();}function defaultParsingFlags(){ // We need to deep clone this object.
	return {empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false};}function getParsingFlags(m){if(m._pf == null){m._pf = defaultParsingFlags();}return m._pf;}function valid__isValid(m){if(m._isValid == null){var flags=getParsingFlags(m);m._isValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated;if(m._strict){m._isValid = m._isValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;}}return m._isValid;}function valid__createInvalid(flags){var m=create_utc__createUTC(NaN);if(flags != null){extend(getParsingFlags(m),flags);}else {getParsingFlags(m).userInvalidated = true;}return m;}function isUndefined(input){return input === void 0;} // Plugins that add properties should also add the key here (null value),
	// so we can properly clone ourselves.
	var momentProperties=utils_hooks__hooks.momentProperties = [];function copyConfig(to,from){var i,prop,val;if(!isUndefined(from._isAMomentObject)){to._isAMomentObject = from._isAMomentObject;}if(!isUndefined(from._i)){to._i = from._i;}if(!isUndefined(from._f)){to._f = from._f;}if(!isUndefined(from._l)){to._l = from._l;}if(!isUndefined(from._strict)){to._strict = from._strict;}if(!isUndefined(from._tzm)){to._tzm = from._tzm;}if(!isUndefined(from._isUTC)){to._isUTC = from._isUTC;}if(!isUndefined(from._offset)){to._offset = from._offset;}if(!isUndefined(from._pf)){to._pf = getParsingFlags(from);}if(!isUndefined(from._locale)){to._locale = from._locale;}if(momentProperties.length > 0){for(i in momentProperties) {prop = momentProperties[i];val = from[prop];if(!isUndefined(val)){to[prop] = val;}}}return to;}var updateInProgress=false; // Moment prototype object
	function Moment(config){copyConfig(this,config);this._d = new Date(config._d != null?config._d.getTime():NaN); // Prevent infinite loop in case updateOffset creates new moment
	// objects.
	if(updateInProgress === false){updateInProgress = true;utils_hooks__hooks.updateOffset(this);updateInProgress = false;}}function isMoment(obj){return obj instanceof Moment || obj != null && obj._isAMomentObject != null;}function absFloor(number){if(number < 0){return Math.ceil(number);}else {return Math.floor(number);}}function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(coercedNumber !== 0 && isFinite(coercedNumber)){value = absFloor(coercedNumber);}return value;} // compare two arrays, return the number of differences
	function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length - array2.length),diffs=0,i;for(i = 0;i < len;i++) {if(dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])){diffs++;}}return diffs + lengthDiff;}function Locale(){} // internal storage for locale config files
	var locales={};var globalLocale;function normalizeLocale(key){return key?key.toLowerCase().replace('_','-'):key;} // pick the locale from the array
	// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	function chooseLocale(names){var i=0,j,next,locale,split;while(i < names.length) {split = normalizeLocale(names[i]).split('-');j = split.length;next = normalizeLocale(names[i + 1]);next = next?next.split('-'):null;while(j > 0) {locale = loadLocale(split.slice(0,j).join('-'));if(locale){return locale;}if(next && next.length >= j && compareArrays(split,next,true) >= j - 1){ //the next array item is better than a shallower substring of this one
	break;}j--;}i++;}return null;}function loadLocale(name){var oldLocale=null; // TODO: Find a better way to register and load all the locales in Node
	if(!locales[name] && typeof module !== 'undefined' && module && module.exports){try{oldLocale = globalLocale._abbr;__webpack_require__(18)("./" + name); // because defineLocale currently also sets the global locale, we
	// want to undo that for lazy loaded locales
	locale_locales__getSetGlobalLocale(oldLocale);}catch(e) {}}return locales[name];} // This function will load locale and then set the global locale.  If
	// no arguments are passed in, it will simply return the current global
	// locale key.
	function locale_locales__getSetGlobalLocale(key,values){var data;if(key){if(isUndefined(values)){data = locale_locales__getLocale(key);}else {data = defineLocale(key,values);}if(data){ // moment.duration._locale = moment._locale = data;
	globalLocale = data;}}return globalLocale._abbr;}function defineLocale(name,values){if(values !== null){values.abbr = name;locales[name] = locales[name] || new Locale();locales[name].set(values); // backwards compat for now: also set the locale
	locale_locales__getSetGlobalLocale(name);return locales[name];}else { // useful for testing
	delete locales[name];return null;}} // returns locale data
	function locale_locales__getLocale(key){var locale;if(key && key._locale && key._locale._abbr){key = key._locale._abbr;}if(!key){return globalLocale;}if(!isArray(key)){ //short-circuit everything else
	locale = loadLocale(key);if(locale){return locale;}key = [key];}return chooseLocale(key);}var aliases={};function addUnitAlias(unit,shorthand){var lowerCase=unit.toLowerCase();aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;}function normalizeUnits(units){return typeof units === 'string'?aliases[units] || aliases[units.toLowerCase()]:undefined;}function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject) {if(hasOwnProp(inputObject,prop)){normalizedProp = normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp] = inputObject[prop];}}}return normalizedInput;}function isFunction(input){return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';}function makeGetSet(unit,keepTime){return function(value){if(value != null){get_set__set(this,unit,value);utils_hooks__hooks.updateOffset(this,keepTime);return this;}else {return get_set__get(this,unit);}};}function get_set__get(mom,unit){return mom.isValid()?mom._d['get' + (mom._isUTC?'UTC':'') + unit]():NaN;}function get_set__set(mom,unit,value){if(mom.isValid()){mom._d['set' + (mom._isUTC?'UTC':'') + unit](value);}} // MOMENTS
	function getSet(units,value){var unit;if(typeof units === 'object'){for(unit in units) {this.set(unit,units[unit]);}}else {units = normalizeUnits(units);if(isFunction(this[units])){return this[units](value);}}return this;}function zeroFill(number,targetLength,forceSign){var absNumber='' + Math.abs(number),zerosToFill=targetLength - absNumber.length,sign=number >= 0;return (sign?forceSign?'+':'':'-') + Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1) + absNumber;}var formattingTokens=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;var localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;var formatFunctions={};var formatTokenFunctions={}; // token:    'M'
	// padded:   ['MM', 2]
	// ordinal:  'Mo'
	// callback: function () { this.month() + 1 }
	function addFormatToken(token,padded,ordinal,callback){var func=callback;if(typeof callback === 'string'){func = function(){return this[callback]();};}if(token){formatTokenFunctions[token] = func;}if(padded){formatTokenFunctions[padded[0]] = function(){return zeroFill(func.apply(this,arguments),padded[1],padded[2]);};}if(ordinal){formatTokenFunctions[ordinal] = function(){return this.localeData().ordinal(func.apply(this,arguments),token);};}}function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,'');}return input.replace(/\\/g,'');}function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i = 0,length = array.length;i < length;i++) {if(formatTokenFunctions[array[i]]){array[i] = formatTokenFunctions[array[i]];}else {array[i] = removeFormattingTokens(array[i]);}}return function(mom){var output='';for(i = 0;i < length;i++) {output += array[i] instanceof Function?array[i].call(mom,format):array[i];}return output;};} // format date using native date object
	function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate();}format = expandFormat(format,m.localeData());formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);return formatFunctions[format](m);}function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input) || input;}localFormattingTokens.lastIndex = 0;while(i >= 0 && localFormattingTokens.test(format)) {format = format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex = 0;i -= 1;}return format;}var match1=/\d/; //       0 - 9
	var match2=/\d\d/; //      00 - 99
	var match3=/\d{3}/; //     000 - 999
	var match4=/\d{4}/; //    0000 - 9999
	var match6=/[+-]?\d{6}/; // -999999 - 999999
	var match1to2=/\d\d?/; //       0 - 99
	var match3to4=/\d\d\d\d?/; //     999 - 9999
	var match5to6=/\d\d\d\d\d\d?/; //   99999 - 999999
	var match1to3=/\d{1,3}/; //       0 - 999
	var match1to4=/\d{1,4}/; //       0 - 9999
	var match1to6=/[+-]?\d{1,6}/; // -999999 - 999999
	var matchUnsigned=/\d+/; //       0 - inf
	var matchSigned=/[+-]?\d+/; //    -inf - inf
	var matchOffset=/Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
	var matchShortOffset=/Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
	var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
	// any word (or two) characters or numbers including two/three word month in arabic.
	// includes scottish gaelic two word and hyphenated months
	var matchWord=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;var regexes={};function addRegexToken(token,regex,strictRegex){regexes[token] = isFunction(regex)?regex:function(isStrict,localeData){return isStrict && strictRegex?strictRegex:regex;};}function getParseRegexForToken(token,config){if(!hasOwnProp(regexes,token)){return new RegExp(unescapeFormat(token));}return regexes[token](config._strict,config._locale);} // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	function unescapeFormat(s){return regexEscape(s.replace('\\','').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1 || p2 || p3 || p4;}));}function regexEscape(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');}var tokens={};function addParseToken(token,callback){var i,func=callback;if(typeof token === 'string'){token = [token];}if(typeof callback === 'number'){func = function(input,array){array[callback] = toInt(input);};}for(i = 0;i < token.length;i++) {tokens[token[i]] = func;}}function addWeekParseToken(token,callback){addParseToken(token,function(input,array,config,token){config._w = config._w || {};callback(input,config._w,config,token);});}function addTimeToArrayFromToken(token,input,config){if(input != null && hasOwnProp(tokens,token)){tokens[token](input,config._a,config,token);}}var YEAR=0;var MONTH=1;var DATE=2;var HOUR=3;var MINUTE=4;var SECOND=5;var MILLISECOND=6;var WEEK=7;var WEEKDAY=8;function daysInMonth(year,month){return new Date(Date.UTC(year,month + 1,0)).getUTCDate();} // FORMATTING
	addFormatToken('M',['MM',2],'Mo',function(){return this.month() + 1;});addFormatToken('MMM',0,0,function(format){return this.localeData().monthsShort(this,format);});addFormatToken('MMMM',0,0,function(format){return this.localeData().months(this,format);}); // ALIASES
	addUnitAlias('month','M'); // PARSING
	addRegexToken('M',match1to2);addRegexToken('MM',match1to2,match2);addRegexToken('MMM',function(isStrict,locale){return locale.monthsShortRegex(isStrict);});addRegexToken('MMMM',function(isStrict,locale){return locale.monthsRegex(isStrict);});addParseToken(['M','MM'],function(input,array){array[MONTH] = toInt(input) - 1;});addParseToken(['MMM','MMMM'],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict); // if we didn't find a month name, mark the date as invalid.
	if(month != null){array[MONTH] = month;}else {getParsingFlags(config).invalidMonth = input;}}); // LOCALES
	var MONTHS_IN_FORMAT=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;var defaultLocaleMonths='January_February_March_April_May_June_July_August_September_October_November_December'.split('_');function localeMonths(m,format){return isArray(this._months)?this._months[m.month()]:this._months[MONTHS_IN_FORMAT.test(format)?'format':'standalone'][m.month()];}var defaultLocaleMonthsShort='Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');function localeMonthsShort(m,format){return isArray(this._monthsShort)?this._monthsShort[m.month()]:this._monthsShort[MONTHS_IN_FORMAT.test(format)?'format':'standalone'][m.month()];}function localeMonthsParse(monthName,format,strict){var i,mom,regex;if(!this._monthsParse){this._monthsParse = [];this._longMonthsParse = [];this._shortMonthsParse = [];}for(i = 0;i < 12;i++) { // make the regex if we don't have it already
	mom = create_utc__createUTC([2000,i]);if(strict && !this._longMonthsParse[i]){this._longMonthsParse[i] = new RegExp('^' + this.months(mom,'').replace('.','') + '$','i');this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom,'').replace('.','') + '$','i');}if(!strict && !this._monthsParse[i]){regex = '^' + this.months(mom,'') + '|^' + this.monthsShort(mom,'');this._monthsParse[i] = new RegExp(regex.replace('.',''),'i');} // test the regex
	if(strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)){return i;}else if(strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)){return i;}else if(!strict && this._monthsParse[i].test(monthName)){return i;}}} // MOMENTS
	function setMonth(mom,value){var dayOfMonth;if(!mom.isValid()){ // No op
	return mom;} // TODO: Move this out of here!
	if(typeof value === 'string'){value = mom.localeData().monthsParse(value); // TODO: Another silent failure?
	if(typeof value !== 'number'){return mom;}}dayOfMonth = Math.min(mom.date(),daysInMonth(mom.year(),value));mom._d['set' + (mom._isUTC?'UTC':'') + 'Month'](value,dayOfMonth);return mom;}function getSetMonth(value){if(value != null){setMonth(this,value);utils_hooks__hooks.updateOffset(this,true);return this;}else {return get_set__get(this,'Month');}}function getDaysInMonth(){return daysInMonth(this.year(),this.month());}var defaultMonthsShortRegex=matchWord;function monthsShortRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,'_monthsRegex')){computeMonthsParse.call(this);}if(isStrict){return this._monthsShortStrictRegex;}else {return this._monthsShortRegex;}}else {return this._monthsShortStrictRegex && isStrict?this._monthsShortStrictRegex:this._monthsShortRegex;}}var defaultMonthsRegex=matchWord;function monthsRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,'_monthsRegex')){computeMonthsParse.call(this);}if(isStrict){return this._monthsStrictRegex;}else {return this._monthsRegex;}}else {return this._monthsStrictRegex && isStrict?this._monthsStrictRegex:this._monthsRegex;}}function computeMonthsParse(){function cmpLenRev(a,b){return b.length - a.length;}var shortPieces=[],longPieces=[],mixedPieces=[],i,mom;for(i = 0;i < 12;i++) { // make the regex if we don't have it already
	mom = create_utc__createUTC([2000,i]);shortPieces.push(this.monthsShort(mom,''));longPieces.push(this.months(mom,''));mixedPieces.push(this.months(mom,''));mixedPieces.push(this.monthsShort(mom,''));} // Sorting makes sure if one month (or abbr) is a prefix of another it
	// will match the longer piece.
	shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i = 0;i < 12;i++) {shortPieces[i] = regexEscape(shortPieces[i]);longPieces[i] = regexEscape(longPieces[i]);mixedPieces[i] = regexEscape(mixedPieces[i]);}this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')','i');this._monthsShortRegex = this._monthsRegex;this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')$','i');this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')$','i');}function checkOverflow(m){var overflow;var a=m._a;if(a && getParsingFlags(m).overflow === -2){overflow = a[MONTH] < 0 || a[MONTH] > 11?MONTH:a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR],a[MONTH])?DATE:a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)?HOUR:a[MINUTE] < 0 || a[MINUTE] > 59?MINUTE:a[SECOND] < 0 || a[SECOND] > 59?SECOND:a[MILLISECOND] < 0 || a[MILLISECOND] > 999?MILLISECOND:-1;if(getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)){overflow = DATE;}if(getParsingFlags(m)._overflowWeeks && overflow === -1){overflow = WEEK;}if(getParsingFlags(m)._overflowWeekday && overflow === -1){overflow = WEEKDAY;}getParsingFlags(m).overflow = overflow;}return m;}function warn(msg){if(utils_hooks__hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn){console.warn('Deprecation warning: ' + msg);}}function deprecate(msg,fn){var firstTime=true;return extend(function(){if(firstTime){warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + new Error().stack);firstTime = false;}return fn.apply(this,arguments);},fn);}var deprecations={};function deprecateSimple(name,msg){if(!deprecations[name]){warn(msg);deprecations[name] = true;}}utils_hooks__hooks.suppressDeprecationWarnings = false; // iso 8601 regex
	// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	var extendedIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;var basicIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;var tzRegex=/Z|[+-]\d\d(?::?\d\d)?/;var isoDates=[['YYYYYY-MM-DD',/[+-]\d{6}-\d\d-\d\d/],['YYYY-MM-DD',/\d{4}-\d\d-\d\d/],['GGGG-[W]WW-E',/\d{4}-W\d\d-\d/],['GGGG-[W]WW',/\d{4}-W\d\d/,false],['YYYY-DDD',/\d{4}-\d{3}/],['YYYY-MM',/\d{4}-\d\d/,false],['YYYYYYMMDD',/[+-]\d{10}/],['YYYYMMDD',/\d{8}/], // YYYYMM is NOT allowed by the standard
	['GGGG[W]WWE',/\d{4}W\d{3}/],['GGGG[W]WW',/\d{4}W\d{2}/,false],['YYYYDDD',/\d{7}/]]; // iso time formats and regexes
	var isoTimes=[['HH:mm:ss.SSSS',/\d\d:\d\d:\d\d\.\d+/],['HH:mm:ss,SSSS',/\d\d:\d\d:\d\d,\d+/],['HH:mm:ss',/\d\d:\d\d:\d\d/],['HH:mm',/\d\d:\d\d/],['HHmmss.SSSS',/\d\d\d\d\d\d\.\d+/],['HHmmss,SSSS',/\d\d\d\d\d\d,\d+/],['HHmmss',/\d\d\d\d\d\d/],['HHmm',/\d\d\d\d/],['HH',/\d\d/]];var aspNetJsonRegex=/^\/?Date\((\-?\d+)/i; // date from iso format
	function configFromISO(config){var i,l,string=config._i,match=extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),allowTime,dateFormat,timeFormat,tzFormat;if(match){getParsingFlags(config).iso = true;for(i = 0,l = isoDates.length;i < l;i++) {if(isoDates[i][1].exec(match[1])){dateFormat = isoDates[i][0];allowTime = isoDates[i][2] !== false;break;}}if(dateFormat == null){config._isValid = false;return;}if(match[3]){for(i = 0,l = isoTimes.length;i < l;i++) {if(isoTimes[i][1].exec(match[3])){ // match[2] should be 'T' or space
	timeFormat = (match[2] || ' ') + isoTimes[i][0];break;}}if(timeFormat == null){config._isValid = false;return;}}if(!allowTime && timeFormat != null){config._isValid = false;return;}if(match[4]){if(tzRegex.exec(match[4])){tzFormat = 'Z';}else {config._isValid = false;return;}}config._f = dateFormat + (timeFormat || '') + (tzFormat || '');configFromStringAndFormat(config);}else {config._isValid = false;}} // date from iso format or fallback
	function configFromString(config){var matched=aspNetJsonRegex.exec(config._i);if(matched !== null){config._d = new Date(+matched[1]);return;}configFromISO(config);if(config._isValid === false){delete config._isValid;utils_hooks__hooks.createFromInputFallback(config);}}utils_hooks__hooks.createFromInputFallback = deprecate('moment construction falls back to js Date. This is ' + 'discouraged and will be removed in upcoming major ' + 'release. Please refer to ' + 'https://github.com/moment/moment/issues/1407 for more info.',function(config){config._d = new Date(config._i + (config._useUTC?' UTC':''));});function createDate(y,m,d,h,M,s,ms){ //can't just apply() to create a date:
	//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	var date=new Date(y,m,d,h,M,s,ms); //the date constructor remaps years 0-99 to 1900-1999
	if(y < 100 && y >= 0 && isFinite(date.getFullYear())){date.setFullYear(y);}return date;}function createUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments)); //the Date.UTC function remaps years 0-99 to 1900-1999
	if(y < 100 && y >= 0 && isFinite(date.getUTCFullYear())){date.setUTCFullYear(y);}return date;} // FORMATTING
	addFormatToken('Y',0,0,function(){var y=this.year();return y <= 9999?'' + y:'+' + y;});addFormatToken(0,['YY',2],0,function(){return this.year() % 100;});addFormatToken(0,['YYYY',4],0,'year');addFormatToken(0,['YYYYY',5],0,'year');addFormatToken(0,['YYYYYY',6,true],0,'year'); // ALIASES
	addUnitAlias('year','y'); // PARSING
	addRegexToken('Y',matchSigned);addRegexToken('YY',match1to2,match2);addRegexToken('YYYY',match1to4,match4);addRegexToken('YYYYY',match1to6,match6);addRegexToken('YYYYYY',match1to6,match6);addParseToken(['YYYYY','YYYYYY'],YEAR);addParseToken('YYYY',function(input,array){array[YEAR] = input.length === 2?utils_hooks__hooks.parseTwoDigitYear(input):toInt(input);});addParseToken('YY',function(input,array){array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);});addParseToken('Y',function(input,array){array[YEAR] = parseInt(input,10);}); // HELPERS
	function daysInYear(year){return isLeapYear(year)?366:365;}function isLeapYear(year){return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;} // HOOKS
	utils_hooks__hooks.parseTwoDigitYear = function(input){return toInt(input) + (toInt(input) > 68?1900:2000);}; // MOMENTS
	var getSetYear=makeGetSet('FullYear',false);function getIsLeapYear(){return isLeapYear(this.year());} // start-of-first-week - start-of-year
	function firstWeekOffset(year,dow,doy){var  // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	fwd=7 + dow - doy, // first-week day local weekday -- which local weekday is fwd
	fwdlw=(7 + createUTCDate(year,0,fwd).getUTCDay() - dow) % 7;return -fwdlw + fwd - 1;} //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	function dayOfYearFromWeeks(year,week,weekday,dow,doy){var localWeekday=(7 + weekday - dow) % 7,weekOffset=firstWeekOffset(year,dow,doy),dayOfYear=1 + 7 * (week - 1) + localWeekday + weekOffset,resYear,resDayOfYear;if(dayOfYear <= 0){resYear = year - 1;resDayOfYear = daysInYear(resYear) + dayOfYear;}else if(dayOfYear > daysInYear(year)){resYear = year + 1;resDayOfYear = dayOfYear - daysInYear(year);}else {resYear = year;resDayOfYear = dayOfYear;}return {year:resYear,dayOfYear:resDayOfYear};}function weekOfYear(mom,dow,doy){var weekOffset=firstWeekOffset(mom.year(),dow,doy),week=Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,resWeek,resYear;if(week < 1){resYear = mom.year() - 1;resWeek = week + weeksInYear(resYear,dow,doy);}else if(week > weeksInYear(mom.year(),dow,doy)){resWeek = week - weeksInYear(mom.year(),dow,doy);resYear = mom.year() + 1;}else {resYear = mom.year();resWeek = week;}return {week:resWeek,year:resYear};}function weeksInYear(year,dow,doy){var weekOffset=firstWeekOffset(year,dow,doy),weekOffsetNext=firstWeekOffset(year + 1,dow,doy);return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;} // Pick the first defined of two or three arguments.
	function defaults(a,b,c){if(a != null){return a;}if(b != null){return b;}return c;}function currentDateArray(config){ // hooks is actually the exported moment object
	var nowValue=new Date(utils_hooks__hooks.now());if(config._useUTC){return [nowValue.getUTCFullYear(),nowValue.getUTCMonth(),nowValue.getUTCDate()];}return [nowValue.getFullYear(),nowValue.getMonth(),nowValue.getDate()];} // convert an array to a date.
	// the array should mirror the parameters below
	// note: all values past the year are optional and will default to the lowest possible value.
	// [year, month, day , hour, minute, second, millisecond]
	function configFromArray(config){var i,date,input=[],currentDate,yearToUse;if(config._d){return;}currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays
	if(config._w && config._a[DATE] == null && config._a[MONTH] == null){dayOfYearFromWeekInfo(config);} //if the day of the year is set, figure out what it is
	if(config._dayOfYear){yearToUse = defaults(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear > daysInYear(yearToUse)){getParsingFlags(config)._overflowDayOfYear = true;}date = createUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH] = date.getUTCMonth();config._a[DATE] = date.getUTCDate();} // Default to current date.
	// * if no year, month, day of month are given, default to today
	// * if day of month is given, default month and year
	// * if month is given, default only year
	// * if year is given, don't default anything
	for(i = 0;i < 3 && config._a[i] == null;++i) {config._a[i] = input[i] = currentDate[i];} // Zero out whatever was not defaulted, including time
	for(;i < 7;i++) {config._a[i] = input[i] = config._a[i] == null?i === 2?1:0:config._a[i];} // Check for 24:00:00.000
	if(config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0){config._nextDay = true;config._a[HOUR] = 0;}config._d = (config._useUTC?createUTCDate:createDate).apply(null,input); // Apply timezone offset from input. The actual utcOffset can be changed
	// with parseZone.
	if(config._tzm != null){config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);}if(config._nextDay){config._a[HOUR] = 24;}}function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp,weekdayOverflow;w = config._w;if(w.GG != null || w.W != null || w.E != null){dow = 1;doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
	// how we interpret now (local, utc, fixed offset). So create
	// a now version of current config (take local/utc/offset flags, and
	// create now).
	weekYear = defaults(w.GG,config._a[YEAR],weekOfYear(local__createLocal(),1,4).year);week = defaults(w.W,1);weekday = defaults(w.E,1);if(weekday < 1 || weekday > 7){weekdayOverflow = true;}}else {dow = config._locale._week.dow;doy = config._locale._week.doy;weekYear = defaults(w.gg,config._a[YEAR],weekOfYear(local__createLocal(),dow,doy).year);week = defaults(w.w,1);if(w.d != null){ // weekday -- low day numbers are considered next week
	weekday = w.d;if(weekday < 0 || weekday > 6){weekdayOverflow = true;}}else if(w.e != null){ // local weekday -- counting starts from begining of week
	weekday = w.e + dow;if(w.e < 0 || w.e > 6){weekdayOverflow = true;}}else { // default to begining of week
	weekday = dow;}}if(week < 1 || week > weeksInYear(weekYear,dow,doy)){getParsingFlags(config)._overflowWeeks = true;}else if(weekdayOverflow != null){getParsingFlags(config)._overflowWeekday = true;}else {temp = dayOfYearFromWeeks(weekYear,week,weekday,dow,doy);config._a[YEAR] = temp.year;config._dayOfYear = temp.dayOfYear;}} // constant that refers to the ISO standard
	utils_hooks__hooks.ISO_8601 = function(){}; // date from string and format string
	function configFromStringAndFormat(config){ // TODO: Move this to another part of the creation flow to prevent circular deps
	if(config._f === utils_hooks__hooks.ISO_8601){configFromISO(config);return;}config._a = [];getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`
	var string='' + config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;tokens = expandFormat(config._f,config._locale).match(formattingTokens) || [];for(i = 0;i < tokens.length;i++) {token = tokens[i];parsedInput = (string.match(getParseRegexForToken(token,config)) || [])[0]; // console.log('token', token, 'parsedInput', parsedInput,
	//         'regex', getParseRegexForToken(token, config));
	if(parsedInput){skipped = string.substr(0,string.indexOf(parsedInput));if(skipped.length > 0){getParsingFlags(config).unusedInput.push(skipped);}string = string.slice(string.indexOf(parsedInput) + parsedInput.length);totalParsedInputLength += parsedInput.length;} // don't parse if it's not a known token
	if(formatTokenFunctions[token]){if(parsedInput){getParsingFlags(config).empty = false;}else {getParsingFlags(config).unusedTokens.push(token);}addTimeToArrayFromToken(token,parsedInput,config);}else if(config._strict && !parsedInput){getParsingFlags(config).unusedTokens.push(token);}} // add remaining unparsed input length to the string
	getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;if(string.length > 0){getParsingFlags(config).unusedInput.push(string);} // clear _12h flag if hour is <= 12
	if(getParsingFlags(config).bigHour === true && config._a[HOUR] <= 12 && config._a[HOUR] > 0){getParsingFlags(config).bigHour = undefined;} // handle meridiem
	config._a[HOUR] = meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);configFromArray(config);checkOverflow(config);}function meridiemFixWrap(locale,hour,meridiem){var isPm;if(meridiem == null){ // nothing to do
	return hour;}if(locale.meridiemHour != null){return locale.meridiemHour(hour,meridiem);}else if(locale.isPM != null){ // Fallback
	isPm = locale.isPM(meridiem);if(isPm && hour < 12){hour += 12;}if(!isPm && hour === 12){hour = 0;}return hour;}else { // this is not supposed to happen
	return hour;}} // date from string and array of format strings
	function configFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(config._f.length === 0){getParsingFlags(config).invalidFormat = true;config._d = new Date(NaN);return;}for(i = 0;i < config._f.length;i++) {currentScore = 0;tempConfig = copyConfig({},config);if(config._useUTC != null){tempConfig._useUTC = config._useUTC;}tempConfig._f = config._f[i];configFromStringAndFormat(tempConfig);if(!valid__isValid(tempConfig)){continue;} // if there is any input that was not parsed add a penalty for that format
	currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens
	currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;getParsingFlags(tempConfig).score = currentScore;if(scoreToBeat == null || currentScore < scoreToBeat){scoreToBeat = currentScore;bestMoment = tempConfig;}}extend(config,bestMoment || tempConfig);}function configFromObject(config){if(config._d){return;}var i=normalizeObjectUnits(config._i);config._a = map([i.year,i.month,i.day || i.date,i.hour,i.minute,i.second,i.millisecond],function(obj){return obj && parseInt(obj,10);});configFromArray(config);}function createFromConfig(config){var res=new Moment(checkOverflow(prepareConfig(config)));if(res._nextDay){ // Adding is smart enough around DST
	res.add(1,'d');res._nextDay = undefined;}return res;}function prepareConfig(config){var input=config._i,format=config._f;config._locale = config._locale || locale_locales__getLocale(config._l);if(input === null || format === undefined && input === ''){return valid__createInvalid({nullInput:true});}if(typeof input === 'string'){config._i = input = config._locale.preparse(input);}if(isMoment(input)){return new Moment(checkOverflow(input));}else if(isArray(format)){configFromStringAndArray(config);}else if(format){configFromStringAndFormat(config);}else if(isDate(input)){config._d = input;}else {configFromInput(config);}if(!valid__isValid(config)){config._d = null;}return config;}function configFromInput(config){var input=config._i;if(input === undefined){config._d = new Date(utils_hooks__hooks.now());}else if(isDate(input)){config._d = new Date(+input);}else if(typeof input === 'string'){configFromString(config);}else if(isArray(input)){config._a = map(input.slice(0),function(obj){return parseInt(obj,10);});configFromArray(config);}else if(typeof input === 'object'){configFromObject(config);}else if(typeof input === 'number'){ // from milliseconds
	config._d = new Date(input);}else {utils_hooks__hooks.createFromInputFallback(config);}}function createLocalOrUTC(input,format,locale,strict,isUTC){var c={};if(typeof locale === 'boolean'){strict = locale;locale = undefined;} // object construction must be done this way.
	// https://github.com/moment/moment/issues/1423
	c._isAMomentObject = true;c._useUTC = c._isUTC = isUTC;c._l = locale;c._i = input;c._f = format;c._strict = strict;return createFromConfig(c);}function local__createLocal(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,false);}var prototypeMin=deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',function(){var other=local__createLocal.apply(null,arguments);if(this.isValid() && other.isValid()){return other < this?this:other;}else {return valid__createInvalid();}});var prototypeMax=deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',function(){var other=local__createLocal.apply(null,arguments);if(this.isValid() && other.isValid()){return other > this?this:other;}else {return valid__createInvalid();}}); // Pick a moment m from moments so that m[fn](other) is true for all
	// other. This relies on the function fn to be transitive.
	//
	// moments should either be an array of moment objects or an array, whose
	// first element is an array of moment objects.
	function pickBy(fn,moments){var res,i;if(moments.length === 1 && isArray(moments[0])){moments = moments[0];}if(!moments.length){return local__createLocal();}res = moments[0];for(i = 1;i < moments.length;++i) {if(!moments[i].isValid() || moments[i][fn](res)){res = moments[i];}}return res;} // TODO: Use [].sort instead?
	function min(){var args=[].slice.call(arguments,0);return pickBy('isBefore',args);}function max(){var args=[].slice.call(arguments,0);return pickBy('isAfter',args);}var now=function now(){return Date.now?Date.now():+new Date();};function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year || 0,quarters=normalizedInput.quarter || 0,months=normalizedInput.month || 0,weeks=normalizedInput.week || 0,days=normalizedInput.day || 0,hours=normalizedInput.hour || 0,minutes=normalizedInput.minute || 0,seconds=normalizedInput.second || 0,milliseconds=normalizedInput.millisecond || 0; // representation for dateAddRemove
	this._milliseconds = +milliseconds + seconds * 1e3 +  // 1000
	minutes * 6e4 +  // 1000 * 60
	hours * 36e5; // 1000 * 60 * 60
	// Because of dateAddRemove treats 24 hours as different from a
	// day when working around DST, we need to store them separately
	this._days = +days + weeks * 7; // It is impossible translate months into days without knowing
	// which months you are are talking about, so we have to store
	// it separately.
	this._months = +months + quarters * 3 + years * 12;this._data = {};this._locale = locale_locales__getLocale();this._bubble();}function isDuration(obj){return obj instanceof Duration;} // FORMATTING
	function offset(token,separator){addFormatToken(token,0,0,function(){var offset=this.utcOffset();var sign='+';if(offset < 0){offset = -offset;sign = '-';}return sign + zeroFill(~ ~(offset / 60),2) + separator + zeroFill(~ ~offset % 60,2);});}offset('Z',':');offset('ZZ',''); // PARSING
	addRegexToken('Z',matchShortOffset);addRegexToken('ZZ',matchShortOffset);addParseToken(['Z','ZZ'],function(input,array,config){config._useUTC = true;config._tzm = offsetFromString(matchShortOffset,input);}); // HELPERS
	// timezone chunker
	// '+10:00' > ['10',  '00']
	// '-1530'  > ['-15', '30']
	var chunkOffset=/([\+\-]|\d\d)/gi;function offsetFromString(matcher,string){var matches=(string || '').match(matcher) || [];var chunk=matches[matches.length - 1] || [];var parts=(chunk + '').match(chunkOffset) || ['-',0,0];var minutes=+(parts[1] * 60) + toInt(parts[2]);return parts[0] === '+'?minutes:-minutes;} // Return a moment from input, that is local/utc/zone equivalent to model.
	function cloneWithOffset(input,model){var res,diff;if(model._isUTC){res = model.clone();diff = (isMoment(input) || isDate(input)?+input:+local__createLocal(input)) - +res; // Use low-level api, because this fn is low-level api.
	res._d.setTime(+res._d + diff);utils_hooks__hooks.updateOffset(res,false);return res;}else {return local__createLocal(input).local();}}function getDateOffset(m){ // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	// https://github.com/moment/moment/pull/1871
	return -Math.round(m._d.getTimezoneOffset() / 15) * 15;} // HOOKS
	// This function will be called whenever a moment is mutated.
	// It is intended to keep the offset in sync with the timezone.
	utils_hooks__hooks.updateOffset = function(){}; // MOMENTS
	// keepLocalTime = true means only change the timezone, without
	// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	// +0200, so we adjust the time as needed, to be valid.
	//
	// Keeping the time actually adds/subtracts (one hour)
	// from the actual represented time. That is why we call updateOffset
	// a second time. In case it wants us to change the offset again
	// _changeInProgress == true case, then we have to adjust, because
	// there is no such time in the given timezone.
	function getSetOffset(input,keepLocalTime){var offset=this._offset || 0,localAdjust;if(!this.isValid()){return input != null?this:NaN;}if(input != null){if(typeof input === 'string'){input = offsetFromString(matchShortOffset,input);}else if(Math.abs(input) < 16){input = input * 60;}if(!this._isUTC && keepLocalTime){localAdjust = getDateOffset(this);}this._offset = input;this._isUTC = true;if(localAdjust != null){this.add(localAdjust,'m');}if(offset !== input){if(!keepLocalTime || this._changeInProgress){add_subtract__addSubtract(this,create__createDuration(input - offset,'m'),1,false);}else if(!this._changeInProgress){this._changeInProgress = true;utils_hooks__hooks.updateOffset(this,true);this._changeInProgress = null;}}return this;}else {return this._isUTC?offset:getDateOffset(this);}}function getSetZone(input,keepLocalTime){if(input != null){if(typeof input !== 'string'){input = -input;}this.utcOffset(input,keepLocalTime);return this;}else {return -this.utcOffset();}}function setOffsetToUTC(keepLocalTime){return this.utcOffset(0,keepLocalTime);}function setOffsetToLocal(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC = false;if(keepLocalTime){this.subtract(getDateOffset(this),'m');}}return this;}function setOffsetToParsedOffset(){if(this._tzm){this.utcOffset(this._tzm);}else if(typeof this._i === 'string'){this.utcOffset(offsetFromString(matchOffset,this._i));}return this;}function hasAlignedHourOffset(input){if(!this.isValid()){return false;}input = input?local__createLocal(input).utcOffset():0;return (this.utcOffset() - input) % 60 === 0;}function isDaylightSavingTime(){return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();}function isDaylightSavingTimeShifted(){if(!isUndefined(this._isDSTShifted)){return this._isDSTShifted;}var c={};copyConfig(c,this);c = prepareConfig(c);if(c._a){var other=c._isUTC?create_utc__createUTC(c._a):local__createLocal(c._a);this._isDSTShifted = this.isValid() && compareArrays(c._a,other.toArray()) > 0;}else {this._isDSTShifted = false;}return this._isDSTShifted;}function isLocal(){return this.isValid()?!this._isUTC:false;}function isUtcOffset(){return this.isValid()?this._isUTC:false;}function isUtc(){return this.isValid()?this._isUTC && this._offset === 0:false;} // ASP.NET json date format regex
	var aspNetRegex=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	var isoRegex=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;function create__createDuration(input,key){var duration=input, // matching against regexp is expensive, do it on demand
	match=null,sign,ret,diffRes;if(isDuration(input)){duration = {ms:input._milliseconds,d:input._days,M:input._months};}else if(typeof input === 'number'){duration = {};if(key){duration[key] = input;}else {duration.milliseconds = input;}}else if(!!(match = aspNetRegex.exec(input))){sign = match[1] === '-'?-1:1;duration = {y:0,d:toInt(match[DATE]) * sign,h:toInt(match[HOUR]) * sign,m:toInt(match[MINUTE]) * sign,s:toInt(match[SECOND]) * sign,ms:toInt(match[MILLISECOND]) * sign};}else if(!!(match = isoRegex.exec(input))){sign = match[1] === '-'?-1:1;duration = {y:parseIso(match[2],sign),M:parseIso(match[3],sign),d:parseIso(match[4],sign),h:parseIso(match[5],sign),m:parseIso(match[6],sign),s:parseIso(match[7],sign),w:parseIso(match[8],sign)};}else if(duration == null){ // checks for null or undefined
	duration = {};}else if(typeof duration === 'object' && ('from' in duration || 'to' in duration)){diffRes = momentsDifference(local__createLocal(duration.from),local__createLocal(duration.to));duration = {};duration.ms = diffRes.milliseconds;duration.M = diffRes.months;}ret = new Duration(duration);if(isDuration(input) && hasOwnProp(input,'_locale')){ret._locale = input._locale;}return ret;}create__createDuration.fn = Duration.prototype;function parseIso(inp,sign){ // We'd normally use ~~inp for this, but unfortunately it also
	// converts floats to ints.
	// inp may be undefined, so careful calling replace on it.
	var res=inp && parseFloat(inp.replace(',','.')); // apply sign while we're at it
	return (isNaN(res)?0:res) * sign;}function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0};res.months = other.month() - base.month() + (other.year() - base.year()) * 12;if(base.clone().add(res.months,'M').isAfter(other)){--res.months;}res.milliseconds = +other - +base.clone().add(res.months,'M');return res;}function momentsDifference(base,other){var res;if(!(base.isValid() && other.isValid())){return {milliseconds:0,months:0};}other = cloneWithOffset(other,base);if(base.isBefore(other)){res = positiveMomentsDifference(base,other);}else {res = positiveMomentsDifference(other,base);res.milliseconds = -res.milliseconds;res.months = -res.months;}return res;} // TODO: remove 'name' arg after deprecation is removed
	function createAdder(direction,name){return function(val,period){var dur,tmp; //invert the arguments, but complain about it
	if(period !== null && !isNaN(+period)){deprecateSimple(name,'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');tmp = val;val = period;period = tmp;}val = typeof val === 'string'?+val:val;dur = create__createDuration(val,period);add_subtract__addSubtract(this,dur,direction);return this;};}function add_subtract__addSubtract(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=duration._days,months=duration._months;if(!mom.isValid()){ // No op
	return;}updateOffset = updateOffset == null?true:updateOffset;if(milliseconds){mom._d.setTime(+mom._d + milliseconds * isAdding);}if(days){get_set__set(mom,'Date',get_set__get(mom,'Date') + days * isAdding);}if(months){setMonth(mom,get_set__get(mom,'Month') + months * isAdding);}if(updateOffset){utils_hooks__hooks.updateOffset(mom,days || months);}}var add_subtract__add=createAdder(1,'add');var add_subtract__subtract=createAdder(-1,'subtract');function moment_calendar__calendar(time,formats){ // We want to compare the start of today, vs this.
	// Getting start-of-today depends on whether we're local/utc/offset or not.
	var now=time || local__createLocal(),sod=cloneWithOffset(now,this).startOf('day'),diff=this.diff(sod,'days',true),format=diff < -6?'sameElse':diff < -1?'lastWeek':diff < 0?'lastDay':diff < 1?'sameDay':diff < 2?'nextDay':diff < 7?'nextWeek':'sameElse';var output=formats && (isFunction(formats[format])?formats[format]():formats[format]);return this.format(output || this.localeData().calendar(format,this,local__createLocal(now)));}function clone(){return new Moment(this);}function isAfter(input,units){var localInput=isMoment(input)?input:local__createLocal(input);if(!(this.isValid() && localInput.isValid())){return false;}units = normalizeUnits(!isUndefined(units)?units:'millisecond');if(units === 'millisecond'){return +this > +localInput;}else {return +localInput < +this.clone().startOf(units);}}function isBefore(input,units){var localInput=isMoment(input)?input:local__createLocal(input);if(!(this.isValid() && localInput.isValid())){return false;}units = normalizeUnits(!isUndefined(units)?units:'millisecond');if(units === 'millisecond'){return +this < +localInput;}else {return +this.clone().endOf(units) < +localInput;}}function isBetween(from,to,units){return this.isAfter(from,units) && this.isBefore(to,units);}function isSame(input,units){var localInput=isMoment(input)?input:local__createLocal(input),inputMs;if(!(this.isValid() && localInput.isValid())){return false;}units = normalizeUnits(units || 'millisecond');if(units === 'millisecond'){return +this === +localInput;}else {inputMs = +localInput;return +this.clone().startOf(units) <= inputMs && inputMs <= +this.clone().endOf(units);}}function isSameOrAfter(input,units){return this.isSame(input,units) || this.isAfter(input,units);}function isSameOrBefore(input,units){return this.isSame(input,units) || this.isBefore(input,units);}function diff(input,units,asFloat){var that,zoneDelta,delta,output;if(!this.isValid()){return NaN;}that = cloneWithOffset(input,this);if(!that.isValid()){return NaN;}zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;units = normalizeUnits(units);if(units === 'year' || units === 'month' || units === 'quarter'){output = monthDiff(this,that);if(units === 'quarter'){output = output / 3;}else if(units === 'year'){output = output / 12;}}else {delta = this - that;output = units === 'second'?delta / 1e3: // 1000
	units === 'minute'?delta / 6e4: // 1000 * 60
	units === 'hour'?delta / 36e5: // 1000 * 60 * 60
	units === 'day'?(delta - zoneDelta) / 864e5: // 1000 * 60 * 60 * 24, negate dst
	units === 'week'?(delta - zoneDelta) / 6048e5: // 1000 * 60 * 60 * 24 * 7, negate dst
	delta;}return asFloat?output:absFloor(output);}function monthDiff(a,b){ // difference in months
	var wholeMonthDiff=(b.year() - a.year()) * 12 + (b.month() - a.month()), // b is in (anchor - 1 month, anchor + 1 month)
	anchor=a.clone().add(wholeMonthDiff,'months'),anchor2,adjust;if(b - anchor < 0){anchor2 = a.clone().add(wholeMonthDiff - 1,'months'); // linear across the month
	adjust = (b - anchor) / (anchor - anchor2);}else {anchor2 = a.clone().add(wholeMonthDiff + 1,'months'); // linear across the month
	adjust = (b - anchor) / (anchor2 - anchor);}return -(wholeMonthDiff + adjust);}utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';function toString(){return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');}function moment_format__toISOString(){var m=this.clone().utc();if(0 < m.year() && m.year() <= 9999){if(isFunction(Date.prototype.toISOString)){ // native implementation is ~50x faster, use it when we can
	return this.toDate().toISOString();}else {return formatMoment(m,'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}else {return formatMoment(m,'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}function format(inputString){var output=formatMoment(this,inputString || utils_hooks__hooks.defaultFormat);return this.localeData().postformat(output);}function from(time,withoutSuffix){if(this.isValid() && (isMoment(time) && time.isValid() || local__createLocal(time).isValid())){return create__createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix);}else {return this.localeData().invalidDate();}}function fromNow(withoutSuffix){return this.from(local__createLocal(),withoutSuffix);}function to(time,withoutSuffix){if(this.isValid() && (isMoment(time) && time.isValid() || local__createLocal(time).isValid())){return create__createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix);}else {return this.localeData().invalidDate();}}function toNow(withoutSuffix){return this.to(local__createLocal(),withoutSuffix);} // If passed a locale key, it will set the locale for this
	// instance.  Otherwise, it will return the locale configuration
	// variables for this instance.
	function locale(key){var newLocaleData;if(key === undefined){return this._locale._abbr;}else {newLocaleData = locale_locales__getLocale(key);if(newLocaleData != null){this._locale = newLocaleData;}return this;}}var lang=deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',function(key){if(key === undefined){return this.localeData();}else {return this.locale(key);}});function localeData(){return this._locale;}function startOf(units){units = normalizeUnits(units); // the following switch intentionally omits break keywords
	// to utilize falling through the cases.
	switch(units){case 'year':this.month(0); /* falls through */case 'quarter':case 'month':this.date(1); /* falls through */case 'week':case 'isoWeek':case 'day':this.hours(0); /* falls through */case 'hour':this.minutes(0); /* falls through */case 'minute':this.seconds(0); /* falls through */case 'second':this.milliseconds(0);} // weeks are a special case
	if(units === 'week'){this.weekday(0);}if(units === 'isoWeek'){this.isoWeekday(1);} // quarters are also special
	if(units === 'quarter'){this.month(Math.floor(this.month() / 3) * 3);}return this;}function endOf(units){units = normalizeUnits(units);if(units === undefined || units === 'millisecond'){return this;}return this.startOf(units).add(1,units === 'isoWeek'?'week':units).subtract(1,'ms');}function to_type__valueOf(){return +this._d - (this._offset || 0) * 60000;}function unix(){return Math.floor(+this / 1000);}function toDate(){return this._offset?new Date(+this):this._d;}function toArray(){var m=this;return [m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()];}function toObject(){var m=this;return {years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),milliseconds:m.milliseconds()};}function toJSON(){ // JSON.stringify(new Date(NaN)) === 'null'
	return this.isValid()?this.toISOString():'null';}function moment_valid__isValid(){return valid__isValid(this);}function parsingFlags(){return extend({},getParsingFlags(this));}function invalidAt(){return getParsingFlags(this).overflow;}function creationData(){return {input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict};} // FORMATTING
	addFormatToken(0,['gg',2],0,function(){return this.weekYear() % 100;});addFormatToken(0,['GG',2],0,function(){return this.isoWeekYear() % 100;});function addWeekYearFormatToken(token,getter){addFormatToken(0,[token,token.length],0,getter);}addWeekYearFormatToken('gggg','weekYear');addWeekYearFormatToken('ggggg','weekYear');addWeekYearFormatToken('GGGG','isoWeekYear');addWeekYearFormatToken('GGGGG','isoWeekYear'); // ALIASES
	addUnitAlias('weekYear','gg');addUnitAlias('isoWeekYear','GG'); // PARSING
	addRegexToken('G',matchSigned);addRegexToken('g',matchSigned);addRegexToken('GG',match1to2,match2);addRegexToken('gg',match1to2,match2);addRegexToken('GGGG',match1to4,match4);addRegexToken('gggg',match1to4,match4);addRegexToken('GGGGG',match1to6,match6);addRegexToken('ggggg',match1to6,match6);addWeekParseToken(['gggg','ggggg','GGGG','GGGGG'],function(input,week,config,token){week[token.substr(0,2)] = toInt(input);});addWeekParseToken(['gg','GG'],function(input,week,config,token){week[token] = utils_hooks__hooks.parseTwoDigitYear(input);}); // MOMENTS
	function getSetWeekYear(input){return getSetWeekYearHelper.call(this,input,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy);}function getSetISOWeekYear(input){return getSetWeekYearHelper.call(this,input,this.isoWeek(),this.isoWeekday(),1,4);}function getISOWeeksInYear(){return weeksInYear(this.year(),1,4);}function getWeeksInYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);}function getSetWeekYearHelper(input,week,weekday,dow,doy){var weeksTarget;if(input == null){return weekOfYear(this,dow,doy).year;}else {weeksTarget = weeksInYear(input,dow,doy);if(week > weeksTarget){week = weeksTarget;}return setWeekAll.call(this,input,week,weekday,dow,doy);}}function setWeekAll(weekYear,week,weekday,dow,doy){var dayOfYearData=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy),date=createUTCDate(dayOfYearData.year,0,dayOfYearData.dayOfYear); // console.log("got", weekYear, week, weekday, "set", date.toISOString());
	this.year(date.getUTCFullYear());this.month(date.getUTCMonth());this.date(date.getUTCDate());return this;} // FORMATTING
	addFormatToken('Q',0,'Qo','quarter'); // ALIASES
	addUnitAlias('quarter','Q'); // PARSING
	addRegexToken('Q',match1);addParseToken('Q',function(input,array){array[MONTH] = (toInt(input) - 1) * 3;}); // MOMENTS
	function getSetQuarter(input){return input == null?Math.ceil((this.month() + 1) / 3):this.month((input - 1) * 3 + this.month() % 3);} // FORMATTING
	addFormatToken('w',['ww',2],'wo','week');addFormatToken('W',['WW',2],'Wo','isoWeek'); // ALIASES
	addUnitAlias('week','w');addUnitAlias('isoWeek','W'); // PARSING
	addRegexToken('w',match1to2);addRegexToken('ww',match1to2,match2);addRegexToken('W',match1to2);addRegexToken('WW',match1to2,match2);addWeekParseToken(['w','ww','W','WW'],function(input,week,config,token){week[token.substr(0,1)] = toInt(input);}); // HELPERS
	// LOCALES
	function localeWeek(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week;}var defaultLocaleWeek={dow:0, // Sunday is the first day of the week.
	doy:6 // The week that contains Jan 1st is the first week of the year.
	};function localeFirstDayOfWeek(){return this._week.dow;}function localeFirstDayOfYear(){return this._week.doy;} // MOMENTS
	function getSetWeek(input){var week=this.localeData().week(this);return input == null?week:this.add((input - week) * 7,'d');}function getSetISOWeek(input){var week=weekOfYear(this,1,4).week;return input == null?week:this.add((input - week) * 7,'d');} // FORMATTING
	addFormatToken('D',['DD',2],'Do','date'); // ALIASES
	addUnitAlias('date','D'); // PARSING
	addRegexToken('D',match1to2);addRegexToken('DD',match1to2,match2);addRegexToken('Do',function(isStrict,locale){return isStrict?locale._ordinalParse:locale._ordinalParseLenient;});addParseToken(['D','DD'],DATE);addParseToken('Do',function(input,array){array[DATE] = toInt(input.match(match1to2)[0],10);}); // MOMENTS
	var getSetDayOfMonth=makeGetSet('Date',true); // FORMATTING
	addFormatToken('d',0,'do','day');addFormatToken('dd',0,0,function(format){return this.localeData().weekdaysMin(this,format);});addFormatToken('ddd',0,0,function(format){return this.localeData().weekdaysShort(this,format);});addFormatToken('dddd',0,0,function(format){return this.localeData().weekdays(this,format);});addFormatToken('e',0,0,'weekday');addFormatToken('E',0,0,'isoWeekday'); // ALIASES
	addUnitAlias('day','d');addUnitAlias('weekday','e');addUnitAlias('isoWeekday','E'); // PARSING
	addRegexToken('d',match1to2);addRegexToken('e',match1to2);addRegexToken('E',match1to2);addRegexToken('dd',matchWord);addRegexToken('ddd',matchWord);addRegexToken('dddd',matchWord);addWeekParseToken(['dd','ddd','dddd'],function(input,week,config,token){var weekday=config._locale.weekdaysParse(input,token,config._strict); // if we didn't get a weekday name, mark the date as invalid
	if(weekday != null){week.d = weekday;}else {getParsingFlags(config).invalidWeekday = input;}});addWeekParseToken(['d','e','E'],function(input,week,config,token){week[token] = toInt(input);}); // HELPERS
	function parseWeekday(input,locale){if(typeof input !== 'string'){return input;}if(!isNaN(input)){return parseInt(input,10);}input = locale.weekdaysParse(input);if(typeof input === 'number'){return input;}return null;} // LOCALES
	var defaultLocaleWeekdays='Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');function localeWeekdays(m,format){return isArray(this._weekdays)?this._weekdays[m.day()]:this._weekdays[this._weekdays.isFormat.test(format)?'format':'standalone'][m.day()];}var defaultLocaleWeekdaysShort='Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');function localeWeekdaysShort(m){return this._weekdaysShort[m.day()];}var defaultLocaleWeekdaysMin='Su_Mo_Tu_We_Th_Fr_Sa'.split('_');function localeWeekdaysMin(m){return this._weekdaysMin[m.day()];}function localeWeekdaysParse(weekdayName,format,strict){var i,mom,regex;if(!this._weekdaysParse){this._weekdaysParse = [];this._minWeekdaysParse = [];this._shortWeekdaysParse = [];this._fullWeekdaysParse = [];}for(i = 0;i < 7;i++) { // make the regex if we don't have it already
	mom = local__createLocal([2000,1]).day(i);if(strict && !this._fullWeekdaysParse[i]){this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom,'').replace('.','\.?') + '$','i');this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom,'').replace('.','\.?') + '$','i');this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom,'').replace('.','\.?') + '$','i');}if(!this._weekdaysParse[i]){regex = '^' + this.weekdays(mom,'') + '|^' + this.weekdaysShort(mom,'') + '|^' + this.weekdaysMin(mom,'');this._weekdaysParse[i] = new RegExp(regex.replace('.',''),'i');} // test the regex
	if(strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)){return i;}else if(strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)){return i;}else if(strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)){return i;}else if(!strict && this._weekdaysParse[i].test(weekdayName)){return i;}}} // MOMENTS
	function getSetDayOfWeek(input){if(!this.isValid()){return input != null?this:NaN;}var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(input != null){input = parseWeekday(input,this.localeData());return this.add(input - day,'d');}else {return day;}}function getSetLocaleDayOfWeek(input){if(!this.isValid()){return input != null?this:NaN;}var weekday=(this.day() + 7 - this.localeData()._week.dow) % 7;return input == null?weekday:this.add(input - weekday,'d');}function getSetISODayOfWeek(input){if(!this.isValid()){return input != null?this:NaN;} // behaves the same as moment#day except
	// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	// as a setter, sunday should belong to the previous week.
	return input == null?this.day() || 7:this.day(this.day() % 7?input:input - 7);} // FORMATTING
	addFormatToken('DDD',['DDDD',3],'DDDo','dayOfYear'); // ALIASES
	addUnitAlias('dayOfYear','DDD'); // PARSING
	addRegexToken('DDD',match1to3);addRegexToken('DDDD',match3);addParseToken(['DDD','DDDD'],function(input,array,config){config._dayOfYear = toInt(input);}); // HELPERS
	// MOMENTS
	function getSetDayOfYear(input){var dayOfYear=Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;return input == null?dayOfYear:this.add(input - dayOfYear,'d');} // FORMATTING
	function hFormat(){return this.hours() % 12 || 12;}addFormatToken('H',['HH',2],0,'hour');addFormatToken('h',['hh',2],0,hFormat);addFormatToken('hmm',0,0,function(){return '' + hFormat.apply(this) + zeroFill(this.minutes(),2);});addFormatToken('hmmss',0,0,function(){return '' + hFormat.apply(this) + zeroFill(this.minutes(),2) + zeroFill(this.seconds(),2);});addFormatToken('Hmm',0,0,function(){return '' + this.hours() + zeroFill(this.minutes(),2);});addFormatToken('Hmmss',0,0,function(){return '' + this.hours() + zeroFill(this.minutes(),2) + zeroFill(this.seconds(),2);});function meridiem(token,lowercase){addFormatToken(token,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),lowercase);});}meridiem('a',true);meridiem('A',false); // ALIASES
	addUnitAlias('hour','h'); // PARSING
	function matchMeridiem(isStrict,locale){return locale._meridiemParse;}addRegexToken('a',matchMeridiem);addRegexToken('A',matchMeridiem);addRegexToken('H',match1to2);addRegexToken('h',match1to2);addRegexToken('HH',match1to2,match2);addRegexToken('hh',match1to2,match2);addRegexToken('hmm',match3to4);addRegexToken('hmmss',match5to6);addRegexToken('Hmm',match3to4);addRegexToken('Hmmss',match5to6);addParseToken(['H','HH'],HOUR);addParseToken(['a','A'],function(input,array,config){config._isPm = config._locale.isPM(input);config._meridiem = input;});addParseToken(['h','hh'],function(input,array,config){array[HOUR] = toInt(input);getParsingFlags(config).bigHour = true;});addParseToken('hmm',function(input,array,config){var pos=input.length - 2;array[HOUR] = toInt(input.substr(0,pos));array[MINUTE] = toInt(input.substr(pos));getParsingFlags(config).bigHour = true;});addParseToken('hmmss',function(input,array,config){var pos1=input.length - 4;var pos2=input.length - 2;array[HOUR] = toInt(input.substr(0,pos1));array[MINUTE] = toInt(input.substr(pos1,2));array[SECOND] = toInt(input.substr(pos2));getParsingFlags(config).bigHour = true;});addParseToken('Hmm',function(input,array,config){var pos=input.length - 2;array[HOUR] = toInt(input.substr(0,pos));array[MINUTE] = toInt(input.substr(pos));});addParseToken('Hmmss',function(input,array,config){var pos1=input.length - 4;var pos2=input.length - 2;array[HOUR] = toInt(input.substr(0,pos1));array[MINUTE] = toInt(input.substr(pos1,2));array[SECOND] = toInt(input.substr(pos2));}); // LOCALES
	function localeIsPM(input){ // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	// Using charAt should be more compatible.
	return (input + '').toLowerCase().charAt(0) === 'p';}var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i;function localeMeridiem(hours,minutes,isLower){if(hours > 11){return isLower?'pm':'PM';}else {return isLower?'am':'AM';}} // MOMENTS
	// Setting the hour should keep the time, because the user explicitly
	// specified which hour he wants. So trying to maintain the same hour (in
	// a new timezone) makes sense. Adding/subtracting hours does not follow
	// this rule.
	var getSetHour=makeGetSet('Hours',true); // FORMATTING
	addFormatToken('m',['mm',2],0,'minute'); // ALIASES
	addUnitAlias('minute','m'); // PARSING
	addRegexToken('m',match1to2);addRegexToken('mm',match1to2,match2);addParseToken(['m','mm'],MINUTE); // MOMENTS
	var getSetMinute=makeGetSet('Minutes',false); // FORMATTING
	addFormatToken('s',['ss',2],0,'second'); // ALIASES
	addUnitAlias('second','s'); // PARSING
	addRegexToken('s',match1to2);addRegexToken('ss',match1to2,match2);addParseToken(['s','ss'],SECOND); // MOMENTS
	var getSetSecond=makeGetSet('Seconds',false); // FORMATTING
	addFormatToken('S',0,0,function(){return ~ ~(this.millisecond() / 100);});addFormatToken(0,['SS',2],0,function(){return ~ ~(this.millisecond() / 10);});addFormatToken(0,['SSS',3],0,'millisecond');addFormatToken(0,['SSSS',4],0,function(){return this.millisecond() * 10;});addFormatToken(0,['SSSSS',5],0,function(){return this.millisecond() * 100;});addFormatToken(0,['SSSSSS',6],0,function(){return this.millisecond() * 1000;});addFormatToken(0,['SSSSSSS',7],0,function(){return this.millisecond() * 10000;});addFormatToken(0,['SSSSSSSS',8],0,function(){return this.millisecond() * 100000;});addFormatToken(0,['SSSSSSSSS',9],0,function(){return this.millisecond() * 1000000;}); // ALIASES
	addUnitAlias('millisecond','ms'); // PARSING
	addRegexToken('S',match1to3,match1);addRegexToken('SS',match1to3,match2);addRegexToken('SSS',match1to3,match3);var token;for(token = 'SSSS';token.length <= 9;token += 'S') {addRegexToken(token,matchUnsigned);}function parseMs(input,array){array[MILLISECOND] = toInt(('0.' + input) * 1000);}for(token = 'S';token.length <= 9;token += 'S') {addParseToken(token,parseMs);} // MOMENTS
	var getSetMillisecond=makeGetSet('Milliseconds',false); // FORMATTING
	addFormatToken('z',0,0,'zoneAbbr');addFormatToken('zz',0,0,'zoneName'); // MOMENTS
	function getZoneAbbr(){return this._isUTC?'UTC':'';}function getZoneName(){return this._isUTC?'Coordinated Universal Time':'';}var momentPrototype__proto=Moment.prototype;momentPrototype__proto.add = add_subtract__add;momentPrototype__proto.calendar = moment_calendar__calendar;momentPrototype__proto.clone = clone;momentPrototype__proto.diff = diff;momentPrototype__proto.endOf = endOf;momentPrototype__proto.format = format;momentPrototype__proto.from = from;momentPrototype__proto.fromNow = fromNow;momentPrototype__proto.to = to;momentPrototype__proto.toNow = toNow;momentPrototype__proto.get = getSet;momentPrototype__proto.invalidAt = invalidAt;momentPrototype__proto.isAfter = isAfter;momentPrototype__proto.isBefore = isBefore;momentPrototype__proto.isBetween = isBetween;momentPrototype__proto.isSame = isSame;momentPrototype__proto.isSameOrAfter = isSameOrAfter;momentPrototype__proto.isSameOrBefore = isSameOrBefore;momentPrototype__proto.isValid = moment_valid__isValid;momentPrototype__proto.lang = lang;momentPrototype__proto.locale = locale;momentPrototype__proto.localeData = localeData;momentPrototype__proto.max = prototypeMax;momentPrototype__proto.min = prototypeMin;momentPrototype__proto.parsingFlags = parsingFlags;momentPrototype__proto.set = getSet;momentPrototype__proto.startOf = startOf;momentPrototype__proto.subtract = add_subtract__subtract;momentPrototype__proto.toArray = toArray;momentPrototype__proto.toObject = toObject;momentPrototype__proto.toDate = toDate;momentPrototype__proto.toISOString = moment_format__toISOString;momentPrototype__proto.toJSON = toJSON;momentPrototype__proto.toString = toString;momentPrototype__proto.unix = unix;momentPrototype__proto.valueOf = to_type__valueOf;momentPrototype__proto.creationData = creationData; // Year
	momentPrototype__proto.year = getSetYear;momentPrototype__proto.isLeapYear = getIsLeapYear; // Week Year
	momentPrototype__proto.weekYear = getSetWeekYear;momentPrototype__proto.isoWeekYear = getSetISOWeekYear; // Quarter
	momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter; // Month
	momentPrototype__proto.month = getSetMonth;momentPrototype__proto.daysInMonth = getDaysInMonth; // Week
	momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek;momentPrototype__proto.weeksInYear = getWeeksInYear;momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear; // Day
	momentPrototype__proto.date = getSetDayOfMonth;momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;momentPrototype__proto.weekday = getSetLocaleDayOfWeek;momentPrototype__proto.isoWeekday = getSetISODayOfWeek;momentPrototype__proto.dayOfYear = getSetDayOfYear; // Hour
	momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour; // Minute
	momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute; // Second
	momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond; // Millisecond
	momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond; // Offset
	momentPrototype__proto.utcOffset = getSetOffset;momentPrototype__proto.utc = setOffsetToUTC;momentPrototype__proto.local = setOffsetToLocal;momentPrototype__proto.parseZone = setOffsetToParsedOffset;momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;momentPrototype__proto.isDST = isDaylightSavingTime;momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted;momentPrototype__proto.isLocal = isLocal;momentPrototype__proto.isUtcOffset = isUtcOffset;momentPrototype__proto.isUtc = isUtc;momentPrototype__proto.isUTC = isUtc; // Timezone
	momentPrototype__proto.zoneAbbr = getZoneAbbr;momentPrototype__proto.zoneName = getZoneName; // Deprecations
	momentPrototype__proto.dates = deprecate('dates accessor is deprecated. Use date instead.',getSetDayOfMonth);momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead',getSetMonth);momentPrototype__proto.years = deprecate('years accessor is deprecated. Use year instead',getSetYear);momentPrototype__proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779',getSetZone);var momentPrototype=momentPrototype__proto;function moment__createUnix(input){return local__createLocal(input * 1000);}function moment__createInZone(){return local__createLocal.apply(null,arguments).parseZone();}var defaultCalendar={sameDay:'[Today at] LT',nextDay:'[Tomorrow at] LT',nextWeek:'dddd [at] LT',lastDay:'[Yesterday at] LT',lastWeek:'[Last] dddd [at] LT',sameElse:'L'};function locale_calendar__calendar(key,mom,now){var output=this._calendar[key];return isFunction(output)?output.call(mom,now):output;}var defaultLongDateFormat={LTS:'h:mm:ss A',LT:'h:mm A',L:'MM/DD/YYYY',LL:'MMMM D, YYYY',LLL:'MMMM D, YYYY h:mm A',LLLL:'dddd, MMMM D, YYYY h:mm A'};function longDateFormat(key){var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];if(format || !formatUpper){return format;}this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1);});return this._longDateFormat[key];}var defaultInvalidDate='Invalid date';function invalidDate(){return this._invalidDate;}var defaultOrdinal='%d';var defaultOrdinalParse=/\d{1,2}/;function ordinal(number){return this._ordinal.replace('%d',number);}function preParsePostFormat(string){return string;}var defaultRelativeTime={future:'in %s',past:'%s ago',s:'a few seconds',m:'a minute',mm:'%d minutes',h:'an hour',hh:'%d hours',d:'a day',dd:'%d days',M:'a month',MM:'%d months',y:'a year',yy:'%d years'};function relative__relativeTime(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return isFunction(output)?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);}function pastFuture(diff,output){var format=this._relativeTime[diff > 0?'future':'past'];return isFunction(format)?format(output):format.replace(/%s/i,output);}function locale_set__set(config){var prop,i;for(i in config) {prop = config[i];if(isFunction(prop)){this[i] = prop;}else {this['_' + i] = prop;}} // Lenient ordinal parsing accepts just a number in addition to
	// number + (possibly) stuff coming from _ordinalParseLenient.
	this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);}var prototype__proto=Locale.prototype;prototype__proto._calendar = defaultCalendar;prototype__proto.calendar = locale_calendar__calendar;prototype__proto._longDateFormat = defaultLongDateFormat;prototype__proto.longDateFormat = longDateFormat;prototype__proto._invalidDate = defaultInvalidDate;prototype__proto.invalidDate = invalidDate;prototype__proto._ordinal = defaultOrdinal;prototype__proto.ordinal = ordinal;prototype__proto._ordinalParse = defaultOrdinalParse;prototype__proto.preparse = preParsePostFormat;prototype__proto.postformat = preParsePostFormat;prototype__proto._relativeTime = defaultRelativeTime;prototype__proto.relativeTime = relative__relativeTime;prototype__proto.pastFuture = pastFuture;prototype__proto.set = locale_set__set; // Month
	prototype__proto.months = localeMonths;prototype__proto._months = defaultLocaleMonths;prototype__proto.monthsShort = localeMonthsShort;prototype__proto._monthsShort = defaultLocaleMonthsShort;prototype__proto.monthsParse = localeMonthsParse;prototype__proto._monthsRegex = defaultMonthsRegex;prototype__proto.monthsRegex = monthsRegex;prototype__proto._monthsShortRegex = defaultMonthsShortRegex;prototype__proto.monthsShortRegex = monthsShortRegex; // Week
	prototype__proto.week = localeWeek;prototype__proto._week = defaultLocaleWeek;prototype__proto.firstDayOfYear = localeFirstDayOfYear;prototype__proto.firstDayOfWeek = localeFirstDayOfWeek; // Day of Week
	prototype__proto.weekdays = localeWeekdays;prototype__proto._weekdays = defaultLocaleWeekdays;prototype__proto.weekdaysMin = localeWeekdaysMin;prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin;prototype__proto.weekdaysShort = localeWeekdaysShort;prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;prototype__proto.weekdaysParse = localeWeekdaysParse; // Hours
	prototype__proto.isPM = localeIsPM;prototype__proto._meridiemParse = defaultLocaleMeridiemParse;prototype__proto.meridiem = localeMeridiem;function lists__get(format,index,field,setter){var locale=locale_locales__getLocale();var utc=create_utc__createUTC().set(setter,index);return locale[field](utc,format);}function list(format,index,field,count,setter){if(typeof format === 'number'){index = format;format = undefined;}format = format || '';if(index != null){return lists__get(format,index,field,setter);}var i;var out=[];for(i = 0;i < count;i++) {out[i] = lists__get(format,i,field,setter);}return out;}function lists__listMonths(format,index){return list(format,index,'months',12,'month');}function lists__listMonthsShort(format,index){return list(format,index,'monthsShort',12,'month');}function lists__listWeekdays(format,index){return list(format,index,'weekdays',7,'day');}function lists__listWeekdaysShort(format,index){return list(format,index,'weekdaysShort',7,'day');}function lists__listWeekdaysMin(format,index){return list(format,index,'weekdaysMin',7,'day');}locale_locales__getSetGlobalLocale('en',{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function ordinal(number){var b=number % 10,output=toInt(number % 100 / 10) === 1?'th':b === 1?'st':b === 2?'nd':b === 3?'rd':'th';return number + output;}}); // Side effect imports
	utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.',locale_locales__getSetGlobalLocale);utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.',locale_locales__getLocale);var mathAbs=Math.abs;function duration_abs__abs(){var data=this._data;this._milliseconds = mathAbs(this._milliseconds);this._days = mathAbs(this._days);this._months = mathAbs(this._months);data.milliseconds = mathAbs(data.milliseconds);data.seconds = mathAbs(data.seconds);data.minutes = mathAbs(data.minutes);data.hours = mathAbs(data.hours);data.months = mathAbs(data.months);data.years = mathAbs(data.years);return this;}function duration_add_subtract__addSubtract(duration,input,value,direction){var other=create__createDuration(input,value);duration._milliseconds += direction * other._milliseconds;duration._days += direction * other._days;duration._months += direction * other._months;return duration._bubble();} // supports only 2.0-style add(1, 's') or add(duration)
	function duration_add_subtract__add(input,value){return duration_add_subtract__addSubtract(this,input,value,1);} // supports only 2.0-style subtract(1, 's') or subtract(duration)
	function duration_add_subtract__subtract(input,value){return duration_add_subtract__addSubtract(this,input,value,-1);}function absCeil(number){if(number < 0){return Math.floor(number);}else {return Math.ceil(number);}}function bubble(){var milliseconds=this._milliseconds;var days=this._days;var months=this._months;var data=this._data;var seconds,minutes,hours,years,monthsFromDays; // if we have a mix of positive and negative values, bubble down first
	// check: https://github.com/moment/moment/issues/2166
	if(!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)){milliseconds += absCeil(monthsToDays(months) + days) * 864e5;days = 0;months = 0;} // The following code bubbles up values, see the tests for
	// examples of what that means.
	data.milliseconds = milliseconds % 1000;seconds = absFloor(milliseconds / 1000);data.seconds = seconds % 60;minutes = absFloor(seconds / 60);data.minutes = minutes % 60;hours = absFloor(minutes / 60);data.hours = hours % 24;days += absFloor(hours / 24); // convert days to months
	monthsFromDays = absFloor(daysToMonths(days));months += monthsFromDays;days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year
	years = absFloor(months / 12);months %= 12;data.days = days;data.months = months;data.years = years;return this;}function daysToMonths(days){ // 400 years have 146097 days (taking into account leap year rules)
	// 400 years have 12 months === 4800
	return days * 4800 / 146097;}function monthsToDays(months){ // the reverse of daysToMonths
	return months * 146097 / 4800;}function as(units){var days;var months;var milliseconds=this._milliseconds;units = normalizeUnits(units);if(units === 'month' || units === 'year'){days = this._days + milliseconds / 864e5;months = this._months + daysToMonths(days);return units === 'month'?months:months / 12;}else { // handle milliseconds separately because of floating point math errors (issue #1867)
	days = this._days + Math.round(monthsToDays(this._months));switch(units){case 'week':return days / 7 + milliseconds / 6048e5;case 'day':return days + milliseconds / 864e5;case 'hour':return days * 24 + milliseconds / 36e5;case 'minute':return days * 1440 + milliseconds / 6e4;case 'second':return days * 86400 + milliseconds / 1000; // Math.floor prevents floating point math errors here
	case 'millisecond':return Math.floor(days * 864e5) + milliseconds;default:throw new Error('Unknown unit ' + units);}}} // TODO: Use this.as('ms')?
	function duration_as__valueOf(){return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;}function makeAs(alias){return function(){return this.as(alias);};}var asMilliseconds=makeAs('ms');var asSeconds=makeAs('s');var asMinutes=makeAs('m');var asHours=makeAs('h');var asDays=makeAs('d');var asWeeks=makeAs('w');var asMonths=makeAs('M');var asYears=makeAs('y');function duration_get__get(units){units = normalizeUnits(units);return this[units + 's']();}function makeGetter(name){return function(){return this._data[name];};}var milliseconds=makeGetter('milliseconds');var seconds=makeGetter('seconds');var minutes=makeGetter('minutes');var hours=makeGetter('hours');var days=makeGetter('days');var months=makeGetter('months');var years=makeGetter('years');function weeks(){return absFloor(this.days() / 7);}var round=Math.round;var thresholds={s:45, // seconds to minute
	m:45, // minutes to hour
	h:22, // hours to day
	d:26, // days to month
	M:11 // months to year
	}; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number || 1,!!withoutSuffix,string,isFuture);}function duration_humanize__relativeTime(posNegDuration,withoutSuffix,locale){var duration=create__createDuration(posNegDuration).abs();var seconds=round(duration.as('s'));var minutes=round(duration.as('m'));var hours=round(duration.as('h'));var days=round(duration.as('d'));var months=round(duration.as('M'));var years=round(duration.as('y'));var a=seconds < thresholds.s && ['s',seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm',minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh',hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd',days] || months <= 1 && ['M'] || months < thresholds.M && ['MM',months] || years <= 1 && ['y'] || ['yy',years];a[2] = withoutSuffix;a[3] = +posNegDuration > 0;a[4] = locale;return substituteTimeAgo.apply(null,a);} // This function allows you to set a threshold for relative time strings
	function duration_humanize__getSetRelativeTimeThreshold(threshold,limit){if(thresholds[threshold] === undefined){return false;}if(limit === undefined){return thresholds[threshold];}thresholds[threshold] = limit;return true;}function humanize(withSuffix){var locale=this.localeData();var output=duration_humanize__relativeTime(this,!withSuffix,locale);if(withSuffix){output = locale.pastFuture(+this,output);}return locale.postformat(output);}var iso_string__abs=Math.abs;function iso_string__toISOString(){ // for ISO strings we do not use the normal bubbling rules:
	//  * milliseconds bubble up until they become hours
	//  * days do not bubble at all
	//  * months bubble up until they become years
	// This is because there is no context-free conversion between hours and days
	// (think of clock changes)
	// and also not between days and months (28-31 days per month)
	var seconds=iso_string__abs(this._milliseconds) / 1000;var days=iso_string__abs(this._days);var months=iso_string__abs(this._months);var minutes,hours,years; // 3600 seconds -> 60 minutes -> 1 hour
	minutes = absFloor(seconds / 60);hours = absFloor(minutes / 60);seconds %= 60;minutes %= 60; // 12 months -> 1 year
	years = absFloor(months / 12);months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	var Y=years;var M=months;var D=days;var h=hours;var m=minutes;var s=seconds;var total=this.asSeconds();if(!total){ // this is the same as C#'s (Noda) and python (isodate)...
	// but not other JS (goog.date)
	return 'P0D';}return (total < 0?'-':'') + 'P' + (Y?Y + 'Y':'') + (M?M + 'M':'') + (D?D + 'D':'') + (h || m || s?'T':'') + (h?h + 'H':'') + (m?m + 'M':'') + (s?s + 'S':'');}var duration_prototype__proto=Duration.prototype;duration_prototype__proto.abs = duration_abs__abs;duration_prototype__proto.add = duration_add_subtract__add;duration_prototype__proto.subtract = duration_add_subtract__subtract;duration_prototype__proto.as = as;duration_prototype__proto.asMilliseconds = asMilliseconds;duration_prototype__proto.asSeconds = asSeconds;duration_prototype__proto.asMinutes = asMinutes;duration_prototype__proto.asHours = asHours;duration_prototype__proto.asDays = asDays;duration_prototype__proto.asWeeks = asWeeks;duration_prototype__proto.asMonths = asMonths;duration_prototype__proto.asYears = asYears;duration_prototype__proto.valueOf = duration_as__valueOf;duration_prototype__proto._bubble = bubble;duration_prototype__proto.get = duration_get__get;duration_prototype__proto.milliseconds = milliseconds;duration_prototype__proto.seconds = seconds;duration_prototype__proto.minutes = minutes;duration_prototype__proto.hours = hours;duration_prototype__proto.days = days;duration_prototype__proto.weeks = weeks;duration_prototype__proto.months = months;duration_prototype__proto.years = years;duration_prototype__proto.humanize = humanize;duration_prototype__proto.toISOString = iso_string__toISOString;duration_prototype__proto.toString = iso_string__toISOString;duration_prototype__proto.toJSON = iso_string__toISOString;duration_prototype__proto.locale = locale;duration_prototype__proto.localeData = localeData; // Deprecations
	duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',iso_string__toISOString);duration_prototype__proto.lang = lang; // Side effect imports
	// FORMATTING
	addFormatToken('X',0,0,'unix');addFormatToken('x',0,0,'valueOf'); // PARSING
	addRegexToken('x',matchSigned);addRegexToken('X',matchTimestamp);addParseToken('X',function(input,array,config){config._d = new Date(parseFloat(input,10) * 1000);});addParseToken('x',function(input,array,config){config._d = new Date(toInt(input));}); // Side effect imports
	utils_hooks__hooks.version = '2.11.2';setHookCallback(local__createLocal);utils_hooks__hooks.fn = momentPrototype;utils_hooks__hooks.min = min;utils_hooks__hooks.max = max;utils_hooks__hooks.now = now;utils_hooks__hooks.utc = create_utc__createUTC;utils_hooks__hooks.unix = moment__createUnix;utils_hooks__hooks.months = lists__listMonths;utils_hooks__hooks.isDate = isDate;utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;utils_hooks__hooks.invalid = valid__createInvalid;utils_hooks__hooks.duration = create__createDuration;utils_hooks__hooks.isMoment = isMoment;utils_hooks__hooks.weekdays = lists__listWeekdays;utils_hooks__hooks.parseZone = moment__createInZone;utils_hooks__hooks.localeData = locale_locales__getLocale;utils_hooks__hooks.isDuration = isDuration;utils_hooks__hooks.monthsShort = lists__listMonthsShort;utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;utils_hooks__hooks.defineLocale = defineLocale;utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;utils_hooks__hooks.normalizeUnits = normalizeUnits;utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;utils_hooks__hooks.prototype = momentPrototype;var _moment=utils_hooks__hooks;return _moment;});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 19,
		"./af.js": 19,
		"./ar": 20,
		"./ar-ma": 21,
		"./ar-ma.js": 21,
		"./ar-sa": 22,
		"./ar-sa.js": 22,
		"./ar-tn": 23,
		"./ar-tn.js": 23,
		"./ar.js": 20,
		"./az": 24,
		"./az.js": 24,
		"./be": 25,
		"./be.js": 25,
		"./bg": 26,
		"./bg.js": 26,
		"./bn": 27,
		"./bn.js": 27,
		"./bo": 28,
		"./bo.js": 28,
		"./br": 29,
		"./br.js": 29,
		"./bs": 30,
		"./bs.js": 30,
		"./ca": 31,
		"./ca.js": 31,
		"./cs": 32,
		"./cs.js": 32,
		"./cv": 33,
		"./cv.js": 33,
		"./cy": 34,
		"./cy.js": 34,
		"./da": 35,
		"./da.js": 35,
		"./de": 36,
		"./de-at": 37,
		"./de-at.js": 37,
		"./de.js": 36,
		"./dv": 38,
		"./dv.js": 38,
		"./el": 39,
		"./el.js": 39,
		"./en-au": 40,
		"./en-au.js": 40,
		"./en-ca": 41,
		"./en-ca.js": 41,
		"./en-gb": 42,
		"./en-gb.js": 42,
		"./en-ie": 43,
		"./en-ie.js": 43,
		"./en-nz": 44,
		"./en-nz.js": 44,
		"./eo": 45,
		"./eo.js": 45,
		"./es": 46,
		"./es.js": 46,
		"./et": 47,
		"./et.js": 47,
		"./eu": 48,
		"./eu.js": 48,
		"./fa": 49,
		"./fa.js": 49,
		"./fi": 50,
		"./fi.js": 50,
		"./fo": 51,
		"./fo.js": 51,
		"./fr": 52,
		"./fr-ca": 53,
		"./fr-ca.js": 53,
		"./fr-ch": 54,
		"./fr-ch.js": 54,
		"./fr.js": 52,
		"./fy": 55,
		"./fy.js": 55,
		"./gd": 56,
		"./gd.js": 56,
		"./gl": 57,
		"./gl.js": 57,
		"./he": 58,
		"./he.js": 58,
		"./hi": 59,
		"./hi.js": 59,
		"./hr": 60,
		"./hr.js": 60,
		"./hu": 61,
		"./hu.js": 61,
		"./hy-am": 62,
		"./hy-am.js": 62,
		"./id": 63,
		"./id.js": 63,
		"./is": 64,
		"./is.js": 64,
		"./it": 65,
		"./it.js": 65,
		"./ja": 66,
		"./ja.js": 66,
		"./jv": 67,
		"./jv.js": 67,
		"./ka": 68,
		"./ka.js": 68,
		"./kk": 69,
		"./kk.js": 69,
		"./km": 70,
		"./km.js": 70,
		"./ko": 71,
		"./ko.js": 71,
		"./lb": 72,
		"./lb.js": 72,
		"./lo": 73,
		"./lo.js": 73,
		"./lt": 74,
		"./lt.js": 74,
		"./lv": 75,
		"./lv.js": 75,
		"./me": 76,
		"./me.js": 76,
		"./mk": 77,
		"./mk.js": 77,
		"./ml": 78,
		"./ml.js": 78,
		"./mr": 79,
		"./mr.js": 79,
		"./ms": 80,
		"./ms-my": 81,
		"./ms-my.js": 81,
		"./ms.js": 80,
		"./my": 82,
		"./my.js": 82,
		"./nb": 83,
		"./nb.js": 83,
		"./ne": 84,
		"./ne.js": 84,
		"./nl": 85,
		"./nl.js": 85,
		"./nn": 86,
		"./nn.js": 86,
		"./pl": 87,
		"./pl.js": 87,
		"./pt": 88,
		"./pt-br": 89,
		"./pt-br.js": 89,
		"./pt.js": 88,
		"./ro": 90,
		"./ro.js": 90,
		"./ru": 91,
		"./ru.js": 91,
		"./se": 92,
		"./se.js": 92,
		"./si": 93,
		"./si.js": 93,
		"./sk": 94,
		"./sk.js": 94,
		"./sl": 95,
		"./sl.js": 95,
		"./sq": 96,
		"./sq.js": 96,
		"./sr": 97,
		"./sr-cyrl": 98,
		"./sr-cyrl.js": 98,
		"./sr.js": 97,
		"./sv": 99,
		"./sv.js": 99,
		"./sw": 100,
		"./sw.js": 100,
		"./ta": 101,
		"./ta.js": 101,
		"./te": 102,
		"./te.js": 102,
		"./th": 103,
		"./th.js": 103,
		"./tl-ph": 104,
		"./tl-ph.js": 104,
		"./tlh": 105,
		"./tlh.js": 105,
		"./tr": 106,
		"./tr.js": 106,
		"./tzl": 107,
		"./tzl.js": 107,
		"./tzm": 108,
		"./tzm-latn": 109,
		"./tzm-latn.js": 109,
		"./tzm.js": 108,
		"./uk": 110,
		"./uk.js": 110,
		"./uz": 111,
		"./uz.js": 111,
		"./vi": 112,
		"./vi.js": 112,
		"./zh-cn": 113,
		"./zh-cn.js": 113,
		"./zh-tw": 114,
		"./zh-tw.js": 114
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 18;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : afrikaans (af)
	//! author : Werner Mollentze : https://github.com/wernerm

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var af = moment.defineLocale('af', {
	        months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
	        weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
	        weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
	        weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
	        meridiemParse: /vm|nm/i,
	        isPM: function isPM(input) {
	            return (/^nm$/i.test(input)
	            );
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower ? 'vm' : 'VM';
	            } else {
	                return isLower ? 'nm' : 'NM';
	            }
	        },
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Vandag om] LT',
	            nextDay: '[Môre om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[Gister om] LT',
	            lastWeek: '[Laas] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'oor %s',
	            past: '%s gelede',
	            s: '\'n paar sekondes',
	            m: '\'n minuut',
	            mm: '%d minute',
	            h: '\'n uur',
	            hh: '%d ure',
	            d: '\'n dag',
	            dd: '%d dae',
	            M: '\'n maand',
	            MM: '%d maande',
	            y: '\'n jaar',
	            yy: '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal: function ordinal(number) {
	            return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
	        },
	        week: {
	            dow: 1, // Maandag is die eerste dag van die week.
	            doy: 4 // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
	        }
	    });

	    return af;
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! Locale: Arabic (ar)
	//! Author: Abdel Said: https://github.com/abdelsaid
	//! Changes in months, weekdays: Ahmed Elkhatib
	//! Native plural forms: forabi https://github.com/forabi

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    },
	        numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    },
	        pluralForm = function pluralForm(n) {
	        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
	    },
	        plurals = {
	        s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
	        m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
	        h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
	        d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
	        M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
	        y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
	    },
	        pluralize = function pluralize(u) {
	        return function (number, withoutSuffix, string, isFuture) {
	            var f = pluralForm(number),
	                str = plurals[u][pluralForm(number)];
	            if (f === 2) {
	                str = str[withoutSuffix ? 0 : 1];
	            }
	            return str.replace(/%d/i, number);
	        };
	    },
	        months = ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو', 'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر', 'كانون الأول ديسمبر'];

	    var ar = moment.defineLocale('ar', {
	        months: months,
	        monthsShort: months,
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'D/‏M/‏YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ص|م/,
	        isPM: function isPM(input) {
	            return 'م' === input;
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar: {
	            sameDay: '[اليوم عند الساعة] LT',
	            nextDay: '[غدًا عند الساعة] LT',
	            nextWeek: 'dddd [عند الساعة] LT',
	            lastDay: '[أمس عند الساعة] LT',
	            lastWeek: 'dddd [عند الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'بعد %s',
	            past: 'منذ %s',
	            s: pluralize('s'),
	            m: pluralize('m'),
	            mm: pluralize('m'),
	            h: pluralize('h'),
	            hh: pluralize('h'),
	            d: pluralize('d'),
	            dd: pluralize('d'),
	            M: pluralize('M'),
	            MM: pluralize('M'),
	            y: pluralize('y'),
	            yy: pluralize('y')
	        },
	        preparse: function preparse(string) {
	            return string.replace(/\u200f/g, '').replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ar;
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Moroccan Arabic (ar-ma)
	//! author : ElFadili Yassine : https://github.com/ElFadiliY
	//! author : Abdel Said : https://github.com/abdelsaid

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ar_ma = moment.defineLocale('ar-ma', {
	        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات'
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ar_ma;
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic Saudi Arabia (ar-sa)
	//! author : Suhail Alkowaileet : https://github.com/xsoh

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    },
	        numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    };

	    var ar_sa = moment.defineLocale('ar-sa', {
	        months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ص|م/,
	        isPM: function isPM(input) {
	            return 'م' === input;
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ar_sa;
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale  : Tunisian Arabic (ar-tn)

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ar_tn = moment.defineLocale('ar-tn', {
	        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return ar_tn;
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : azerbaijani (az)
	//! author : topchiyev : https://github.com/topchiyev

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var suffixes = {
	        1: '-inci',
	        5: '-inci',
	        8: '-inci',
	        70: '-inci',
	        80: '-inci',
	        2: '-nci',
	        7: '-nci',
	        20: '-nci',
	        50: '-nci',
	        3: '-üncü',
	        4: '-üncü',
	        100: '-üncü',
	        6: '-ncı',
	        9: '-uncu',
	        10: '-uncu',
	        30: '-uncu',
	        60: '-ıncı',
	        90: '-ıncı'
	    };

	    var az = moment.defineLocale('az', {
	        months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
	        monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
	        weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
	        weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
	        weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[bugün saat] LT',
	            nextDay: '[sabah saat] LT',
	            nextWeek: '[gələn həftə] dddd [saat] LT',
	            lastDay: '[dünən] LT',
	            lastWeek: '[keçən həftə] dddd [saat] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s sonra',
	            past: '%s əvvəl',
	            s: 'birneçə saniyyə',
	            m: 'bir dəqiqə',
	            mm: '%d dəqiqə',
	            h: 'bir saat',
	            hh: '%d saat',
	            d: 'bir gün',
	            dd: '%d gün',
	            M: 'bir ay',
	            MM: '%d ay',
	            y: 'bir il',
	            yy: '%d il'
	        },
	        meridiemParse: /gecə|səhər|gündüz|axşam/,
	        isPM: function isPM(input) {
	            return (/^(gündüz|axşam)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'gecə';
	            } else if (hour < 12) {
	                return 'səhər';
	            } else if (hour < 17) {
	                return 'gündüz';
	            } else {
	                return 'axşam';
	            }
	        },
	        ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
	        ordinal: function ordinal(number) {
	            if (number === 0) {
	                // special case for zero
	                return number + '-ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;
	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return az;
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : belarusian (be)
	//! author : Dmitry Demidov : https://github.com/demidov91
	//! author: Praleska: http://praleska.pro/
	//! Author : Menelion Elensúle : https://github.com/Oire

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
	            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
	            'dd': 'дзень_дні_дзён',
	            'MM': 'месяц_месяцы_месяцаў',
	            'yy': 'год_гады_гадоў'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвіліна' : 'хвіліну';
	        } else if (key === 'h') {
	            return withoutSuffix ? 'гадзіна' : 'гадзіну';
	        } else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }

	    var be = moment.defineLocale('be', {
	        months: {
	            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
	            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
	        },
	        monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
	        weekdays: {
	            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
	            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
	            isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
	        },
	        weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY г.',
	            LLL: 'D MMMM YYYY г., HH:mm',
	            LLLL: 'dddd, D MMMM YYYY г., HH:mm'
	        },
	        calendar: {
	            sameDay: '[Сёння ў] LT',
	            nextDay: '[Заўтра ў] LT',
	            lastDay: '[Учора ў] LT',
	            nextWeek: function nextWeek() {
	                return '[У] dddd [ў] LT';
	            },
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 5:
	                    case 6:
	                        return '[У мінулую] dddd [ў] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                        return '[У мінулы] dddd [ў] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'праз %s',
	            past: '%s таму',
	            s: 'некалькі секунд',
	            m: relativeTimeWithPlural,
	            mm: relativeTimeWithPlural,
	            h: relativeTimeWithPlural,
	            hh: relativeTimeWithPlural,
	            d: 'дзень',
	            dd: relativeTimeWithPlural,
	            M: 'месяц',
	            MM: relativeTimeWithPlural,
	            y: 'год',
	            yy: relativeTimeWithPlural
	        },
	        meridiemParse: /ночы|раніцы|дня|вечара/,
	        isPM: function isPM(input) {
	            return (/^(дня|вечара)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночы';
	            } else if (hour < 12) {
	                return 'раніцы';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечара';
	            }
	        },
	        ordinalParse: /\d{1,2}-(і|ы|га)/,
	        ordinal: function ordinal(number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                case 'w':
	                case 'W':
	                    return (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? number + '-і' : number + '-ы';
	                case 'D':
	                    return number + '-га';
	                default:
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return be;
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : bulgarian (bg)
	//! author : Krasen Borisov : https://github.com/kraz

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var bg = moment.defineLocale('bg', {
	        months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
	        weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
	        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'D.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY H:mm',
	            LLLL: 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[Днес в] LT',
	            nextDay: '[Утре в] LT',
	            nextWeek: 'dddd [в] LT',
	            lastDay: '[Вчера в] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 6:
	                        return '[В изминалата] dddd [в] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[В изминалия] dddd [в] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'след %s',
	            past: 'преди %s',
	            s: 'няколко секунди',
	            m: 'минута',
	            mm: '%d минути',
	            h: 'час',
	            hh: '%d часа',
	            d: 'ден',
	            dd: '%d дни',
	            M: 'месец',
	            MM: '%d месеца',
	            y: 'година',
	            yy: '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal: function ordinal(number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return bg;
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bengali (bn)
	//! author : Kaushik Gandhi : https://github.com/kaushikgandhi

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '১',
	        '2': '২',
	        '3': '৩',
	        '4': '৪',
	        '5': '৫',
	        '6': '৬',
	        '7': '৭',
	        '8': '৮',
	        '9': '৯',
	        '0': '০'
	    },
	        numberMap = {
	        '১': '1',
	        '২': '2',
	        '৩': '3',
	        '৪': '4',
	        '৫': '5',
	        '৬': '6',
	        '৭': '7',
	        '৮': '8',
	        '৯': '9',
	        '০': '0'
	    };

	    var bn = moment.defineLocale('bn', {
	        months: 'জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
	        monthsShort: 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_'),
	        weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার'.split('_'),
	        weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি'.split('_'),
	        weekdaysMin: 'রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm সময়',
	            LTS: 'A h:mm:ss সময়',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm সময়',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm সময়'
	        },
	        calendar: {
	            sameDay: '[আজ] LT',
	            nextDay: '[আগামীকাল] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[গতকাল] LT',
	            lastWeek: '[গত] dddd, LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s পরে',
	            past: '%s আগে',
	            s: 'কয়েক সেকেন্ড',
	            m: 'এক মিনিট',
	            mm: '%d মিনিট',
	            h: 'এক ঘন্টা',
	            hh: '%d ঘন্টা',
	            d: 'এক দিন',
	            dd: '%d দিন',
	            M: 'এক মাস',
	            MM: '%d মাস',
	            y: 'এক বছর',
	            yy: '%d বছর'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
	        isPM: function isPM(input) {
	            return (/^(দুপুর|বিকাল|রাত)$/.test(input)
	            );
	        },
	        //Bengali is a vast language its spoken
	        //in different forms in various parts of the world.
	        //I have just generalized with most common one used
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'রাত';
	            } else if (hour < 10) {
	                return 'সকাল';
	            } else if (hour < 17) {
	                return 'দুপুর';
	            } else if (hour < 20) {
	                return 'বিকাল';
	            } else {
	                return 'রাত';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return bn;
	});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : tibetan (bo)
	//! author : Thupten N. Chakrishar : https://github.com/vajradog

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '༡',
	        '2': '༢',
	        '3': '༣',
	        '4': '༤',
	        '5': '༥',
	        '6': '༦',
	        '7': '༧',
	        '8': '༨',
	        '9': '༩',
	        '0': '༠'
	    },
	        numberMap = {
	        '༡': '1',
	        '༢': '2',
	        '༣': '3',
	        '༤': '4',
	        '༥': '5',
	        '༦': '6',
	        '༧': '7',
	        '༨': '8',
	        '༩': '9',
	        '༠': '0'
	    };

	    var bo = moment.defineLocale('bo', {
	        months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        monthsShort: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
	        weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm',
	            LTS: 'A h:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm'
	        },
	        calendar: {
	            sameDay: '[དི་རིང] LT',
	            nextDay: '[སང་ཉིན] LT',
	            nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
	            lastDay: '[ཁ་སང] LT',
	            lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s ལ་',
	            past: '%s སྔན་ལ',
	            s: 'ལམ་སང',
	            m: 'སྐར་མ་གཅིག',
	            mm: '%d སྐར་མ',
	            h: 'ཆུ་ཚོད་གཅིག',
	            hh: '%d ཆུ་ཚོད',
	            d: 'ཉིན་གཅིག',
	            dd: '%d ཉིན་',
	            M: 'ཟླ་བ་གཅིག',
	            MM: '%d ཟླ་བ',
	            y: 'ལོ་གཅིག',
	            yy: '%d ལོ'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
	        isPM: function isPM(input) {
	            return (/^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'མཚན་མོ';
	            } else if (hour < 10) {
	                return 'ཞོགས་ཀས';
	            } else if (hour < 17) {
	                return 'ཉིན་གུང';
	            } else if (hour < 20) {
	                return 'དགོང་དག';
	            } else {
	                return 'མཚན་མོ';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return bo;
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : breton (br)
	//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function relativeTimeWithMutation(number, withoutSuffix, key) {
	        var format = {
	            'mm': 'munutenn',
	            'MM': 'miz',
	            'dd': 'devezh'
	        };
	        return number + ' ' + mutation(format[key], number);
	    }
	    function specialMutationForYears(number) {
	        switch (lastNumber(number)) {
	            case 1:
	            case 3:
	            case 4:
	            case 5:
	            case 9:
	                return number + ' bloaz';
	            default:
	                return number + ' vloaz';
	        }
	    }
	    function lastNumber(_x) {
	        var _again = true;

	        _function: while (_again) {
	            var number = _x;
	            _again = false;

	            if (number > 9) {
	                _x = number % 10;
	                _again = true;
	                continue _function;
	            }
	            return number;
	        }
	    }
	    function mutation(text, number) {
	        if (number === 2) {
	            return softMutation(text);
	        }
	        return text;
	    }
	    function softMutation(text) {
	        var mutationTable = {
	            'm': 'v',
	            'b': 'v',
	            'd': 'z'
	        };
	        if (mutationTable[text.charAt(0)] === undefined) {
	            return text;
	        }
	        return mutationTable[text.charAt(0)] + text.substring(1);
	    }

	    var br = moment.defineLocale('br', {
	        months: 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
	        monthsShort: 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
	        weekdays: 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
	        weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
	        weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'h[e]mm A',
	            LTS: 'h[e]mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D [a viz] MMMM YYYY',
	            LLL: 'D [a viz] MMMM YYYY h[e]mm A',
	            LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A'
	        },
	        calendar: {
	            sameDay: '[Hiziv da] LT',
	            nextDay: '[Warc\'hoazh da] LT',
	            nextWeek: 'dddd [da] LT',
	            lastDay: '[Dec\'h da] LT',
	            lastWeek: 'dddd [paset da] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'a-benn %s',
	            past: '%s \'zo',
	            s: 'un nebeud segondennoù',
	            m: 'ur vunutenn',
	            mm: relativeTimeWithMutation,
	            h: 'un eur',
	            hh: '%d eur',
	            d: 'un devezh',
	            dd: relativeTimeWithMutation,
	            M: 'ur miz',
	            MM: relativeTimeWithMutation,
	            y: 'ur bloaz',
	            yy: specialMutationForYears
	        },
	        ordinalParse: /\d{1,2}(añ|vet)/,
	        ordinal: function ordinal(number) {
	            var output = number === 1 ? 'añ' : 'vet';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return br;
	});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : bosnian (bs)
	//! author : Nedim Cholich : https://github.com/frontyard
	//! based on (hr) translation by Bojan Marković

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'm':
	                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	            case 'mm':
	                if (number === 1) {
	                    result += 'minuta';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'minute';
	                } else {
	                    result += 'minuta';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'jedan sat' : 'jednog sata';
	            case 'hh':
	                if (number === 1) {
	                    result += 'sat';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'sata';
	                } else {
	                    result += 'sati';
	                }
	                return result;
	            case 'dd':
	                if (number === 1) {
	                    result += 'dan';
	                } else {
	                    result += 'dana';
	                }
	                return result;
	            case 'MM':
	                if (number === 1) {
	                    result += 'mjesec';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'mjeseca';
	                } else {
	                    result += 'mjeseci';
	                }
	                return result;
	            case 'yy':
	                if (number === 1) {
	                    result += 'godina';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'godine';
	                } else {
	                    result += 'godina';
	                }
	                return result;
	        }
	    }

	    var bs = moment.defineLocale('bs', {
	        months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
	        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',
	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay: '[jučer u] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                        return '[prošlu] dddd [u] LT';
	                    case 6:
	                        return '[prošle] [subote] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'prije %s',
	            s: 'par sekundi',
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: 'dan',
	            dd: translate,
	            M: 'mjesec',
	            MM: translate,
	            y: 'godinu',
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return bs;
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : catalan (ca)
	//! author : Juan G. Hurtado : https://github.com/juanghurtado

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ca = moment.defineLocale('ca', {
	        months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
	        monthsShort: 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
	        weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
	        weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
	        weekdaysMin: 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY H:mm',
	            LLLL: 'dddd D MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: function sameDay() {
	                return '[avui a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            nextDay: function nextDay() {
	                return '[demà a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            nextWeek: function nextWeek() {
	                return 'dddd [a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            lastDay: function lastDay() {
	                return '[ahir a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            lastWeek: function lastWeek() {
	                return '[el] dddd [passat a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'en %s',
	            past: 'fa %s',
	            s: 'uns segons',
	            m: 'un minut',
	            mm: '%d minuts',
	            h: 'una hora',
	            hh: '%d hores',
	            d: 'un dia',
	            dd: '%d dies',
	            M: 'un mes',
	            MM: '%d mesos',
	            y: 'un any',
	            yy: '%d anys'
	        },
	        ordinalParse: /\d{1,2}(r|n|t|è|a)/,
	        ordinal: function ordinal(number, period) {
	            var output = number === 1 ? 'r' : number === 2 ? 'n' : number === 3 ? 'r' : number === 4 ? 't' : 'è';
	            if (period === 'w' || period === 'W') {
	                output = 'a';
	            }
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return ca;
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : czech (cs)
	//! author : petrbela : https://github.com/petrbela

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
	        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
	    function plural(n) {
	        return n > 1 && n < 5 && ~ ~(n / 10) !== 1;
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                // a few seconds / in a few seconds / a few seconds ago
	                return withoutSuffix || isFuture ? 'pár sekund' : 'pár sekundami';
	            case 'm':
	                // a minute / in a minute / a minute ago
	                return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';
	            case 'mm':
	                // 9 minutes / in 9 minutes / 9 minutes ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'minuty' : 'minut');
	                } else {
	                    return result + 'minutami';
	                }
	                break;
	            case 'h':
	                // an hour / in an hour / an hour ago
	                return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
	            case 'hh':
	                // 9 hours / in 9 hours / 9 hours ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'hodiny' : 'hodin');
	                } else {
	                    return result + 'hodinami';
	                }
	                break;
	            case 'd':
	                // a day / in a day / a day ago
	                return withoutSuffix || isFuture ? 'den' : 'dnem';
	            case 'dd':
	                // 9 days / in 9 days / 9 days ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'dny' : 'dní');
	                } else {
	                    return result + 'dny';
	                }
	                break;
	            case 'M':
	                // a month / in a month / a month ago
	                return withoutSuffix || isFuture ? 'měsíc' : 'měsícem';
	            case 'MM':
	                // 9 months / in 9 months / 9 months ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'měsíce' : 'měsíců');
	                } else {
	                    return result + 'měsíci';
	                }
	                break;
	            case 'y':
	                // a year / in a year / a year ago
	                return withoutSuffix || isFuture ? 'rok' : 'rokem';
	            case 'yy':
	                // 9 years / in 9 years / 9 years ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'roky' : 'let');
	                } else {
	                    return result + 'lety';
	                }
	                break;
	        }
	    }

	    var cs = moment.defineLocale('cs', {
	        months: months,
	        monthsShort: monthsShort,
	        monthsParse: (function (months, monthsShort) {
	            var i,
	                _monthsParse = [];
	            for (i = 0; i < 12; i++) {
	                // use custom parser to solve problem with July (červenec)
	                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
	            }
	            return _monthsParse;
	        })(months, monthsShort),
	        shortMonthsParse: (function (monthsShort) {
	            var i,
	                _shortMonthsParse = [];
	            for (i = 0; i < 12; i++) {
	                _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
	            }
	            return _shortMonthsParse;
	        })(monthsShort),
	        longMonthsParse: (function (months) {
	            var i,
	                _longMonthsParse = [];
	            for (i = 0; i < 12; i++) {
	                _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
	            }
	            return _longMonthsParse;
	        })(months),
	        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
	        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
	        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[dnes v] LT',
	            nextDay: '[zítra v] LT',
	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[v neděli v] LT';
	                    case 1:
	                    case 2:
	                        return '[v] dddd [v] LT';
	                    case 3:
	                        return '[ve středu v] LT';
	                    case 4:
	                        return '[ve čtvrtek v] LT';
	                    case 5:
	                        return '[v pátek v] LT';
	                    case 6:
	                        return '[v sobotu v] LT';
	                }
	            },
	            lastDay: '[včera v] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[minulou neděli v] LT';
	                    case 1:
	                    case 2:
	                        return '[minulé] dddd [v] LT';
	                    case 3:
	                        return '[minulou středu v] LT';
	                    case 4:
	                    case 5:
	                        return '[minulý] dddd [v] LT';
	                    case 6:
	                        return '[minulou sobotu v] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'před %s',
	            s: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return cs;
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : chuvash (cv)
	//! author : Anatoly Mironov : https://github.com/mirontoli

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var cv = moment.defineLocale('cv', {
	        months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
	        monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
	        weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
	        weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
	        weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD-MM-YYYY',
	            LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
	            LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
	            LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
	        },
	        calendar: {
	            sameDay: '[Паян] LT [сехетре]',
	            nextDay: '[Ыран] LT [сехетре]',
	            lastDay: '[Ӗнер] LT [сехетре]',
	            nextWeek: '[Ҫитес] dddd LT [сехетре]',
	            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: function future(output) {
	                var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
	                return output + affix;
	            },
	            past: '%s каялла',
	            s: 'пӗр-ик ҫеккунт',
	            m: 'пӗр минут',
	            mm: '%d минут',
	            h: 'пӗр сехет',
	            hh: '%d сехет',
	            d: 'пӗр кун',
	            dd: '%d кун',
	            M: 'пӗр уйӑх',
	            MM: '%d уйӑх',
	            y: 'пӗр ҫул',
	            yy: '%d ҫул'
	        },
	        ordinalParse: /\d{1,2}-мӗш/,
	        ordinal: '%d-мӗш',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return cv;
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Welsh (cy)
	//! author : Robert Allen

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var cy = moment.defineLocale('cy', {
	        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
	        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
	        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
	        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
	        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
	        // time formats are the same as en-gb
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Heddiw am] LT',
	            nextDay: '[Yfory am] LT',
	            nextWeek: 'dddd [am] LT',
	            lastDay: '[Ddoe am] LT',
	            lastWeek: 'dddd [diwethaf am] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'mewn %s',
	            past: '%s yn ôl',
	            s: 'ychydig eiliadau',
	            m: 'munud',
	            mm: '%d munud',
	            h: 'awr',
	            hh: '%d awr',
	            d: 'diwrnod',
	            dd: '%d diwrnod',
	            M: 'mis',
	            MM: '%d mis',
	            y: 'blwyddyn',
	            yy: '%d flynedd'
	        },
	        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
	        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
	        ordinal: function ordinal(number) {
	            var b = number,
	                output = '',
	                lookup = ['', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
	            'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
	            ];
	            if (b > 20) {
	                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
	                    output = 'fed'; // not 30ain, 70ain or 90ain
	                } else {
	                        output = 'ain';
	                    }
	            } else if (b > 0) {
	                output = lookup[b];
	            }
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return cy;
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : danish (da)
	//! author : Ulrik Nielsen : https://github.com/mrbase

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var da = moment.defineLocale('da', {
	        months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
	        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY HH:mm',
	            LLLL: 'dddd [d.] D. MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[I dag kl.] LT',
	            nextDay: '[I morgen kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[I går kl.] LT',
	            lastWeek: '[sidste] dddd [kl] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'om %s',
	            past: '%s siden',
	            s: 'få sekunder',
	            m: 'et minut',
	            mm: '%d minutter',
	            h: 'en time',
	            hh: '%d timer',
	            d: 'en dag',
	            dd: '%d dage',
	            M: 'en måned',
	            MM: '%d måneder',
	            y: 'et år',
	            yy: '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return da;
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : german (de)
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Mikolaj Dadela : https://github.com/mik01aj

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }

	    var de = moment.defineLocale('de', {
	        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort: 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY HH:mm',
	            LLLL: 'dddd, D. MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: 'vor %s',
	            s: 'ein paar Sekunden',
	            m: processRelativeTime,
	            mm: '%d Minuten',
	            h: processRelativeTime,
	            hh: '%d Stunden',
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return de;
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : austrian german (de-at)
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Martin Groller : https://github.com/MadMG
	//! author : Mikolaj Dadela : https://github.com/mik01aj

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }

	    var de_at = moment.defineLocale('de-at', {
	        months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort: 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY HH:mm',
	            LLLL: 'dddd, D. MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: 'vor %s',
	            s: 'ein paar Sekunden',
	            m: processRelativeTime,
	            mm: '%d Minuten',
	            h: processRelativeTime,
	            hh: '%d Stunden',
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return de_at;
	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : dhivehi (dv)
	//! author : Jawish Hameed : https://github.com/jawish

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var months = ['ޖެނުއަރީ', 'ފެބްރުއަރީ', 'މާރިޗު', 'އޭޕްރީލު', 'މޭ', 'ޖޫން', 'ޖުލައި', 'އޯގަސްޓު', 'ސެޕްޓެމްބަރު', 'އޮކްޓޯބަރު', 'ނޮވެމްބަރު', 'ޑިސެމްބަރު'],
	        weekdays = ['އާދިއްތަ', 'ހޯމަ', 'އަންގާރަ', 'ބުދަ', 'ބުރާސްފަތި', 'ހުކުރު', 'ހޮނިހިރު'];

	    var dv = moment.defineLocale('dv', {
	        months: months,
	        monthsShort: months,
	        weekdays: weekdays,
	        weekdaysShort: weekdays,
	        weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
	        longDateFormat: {

	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'D/M/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /މކ|މފ/,
	        isPM: function isPM(input) {
	            return '' === input;
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 12) {
	                return 'މކ';
	            } else {
	                return 'މފ';
	            }
	        },
	        calendar: {
	            sameDay: '[މިއަދު] LT',
	            nextDay: '[މާދަމާ] LT',
	            nextWeek: 'dddd LT',
	            lastDay: '[އިއްޔެ] LT',
	            lastWeek: '[ފާއިތުވި] dddd LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'ތެރޭގައި %s',
	            past: 'ކުރިން %s',
	            s: 'ސިކުންތުކޮޅެއް',
	            m: 'މިނިޓެއް',
	            mm: 'މިނިޓު %d',
	            h: 'ގަޑިއިރެއް',
	            hh: 'ގަޑިއިރު %d',
	            d: 'ދުވަހެއް',
	            dd: 'ދުވަސް %d',
	            M: 'މަހެއް',
	            MM: 'މަސް %d',
	            y: 'އަހަރެއް',
	            yy: 'އަހަރު %d'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/،/g, ',');
	        },
	        postformat: function postformat(string) {
	            return string.replace(/,/g, '،');
	        },
	        week: {
	            dow: 7, // Sunday is the first day of the week.
	            doy: 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return dv;
	});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : modern greek (el)
	//! author : Aggelos Karalias : https://github.com/mehiel

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function isFunction(input) {
	        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }

	    var el = moment.defineLocale('el', {
	        monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
	        monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
	        months: function months(momentToFormat, format) {
	            if (/D/.test(format.substring(0, format.indexOf('MMMM')))) {
	                // if there is a day number before 'MMMM'
	                return this._monthsGenitiveEl[momentToFormat.month()];
	            } else {
	                return this._monthsNominativeEl[momentToFormat.month()];
	            }
	        },
	        monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
	        weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
	        weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
	        weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'μμ' : 'ΜΜ';
	            } else {
	                return isLower ? 'πμ' : 'ΠΜ';
	            }
	        },
	        isPM: function isPM(input) {
	            return (input + '').toLowerCase()[0] === 'μ';
	        },
	        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY h:mm A',
	            LLLL: 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendarEl: {
	            sameDay: '[Σήμερα {}] LT',
	            nextDay: '[Αύριο {}] LT',
	            nextWeek: 'dddd [{}] LT',
	            lastDay: '[Χθες {}] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 6:
	                        return '[το προηγούμενο] dddd [{}] LT';
	                    default:
	                        return '[την προηγούμενη] dddd [{}] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        calendar: function calendar(key, mom) {
	            var output = this._calendarEl[key],
	                hours = mom && mom.hours();
	            if (isFunction(output)) {
	                output = output.apply(mom);
	            }
	            return output.replace('{}', hours % 12 === 1 ? 'στη' : 'στις');
	        },
	        relativeTime: {
	            future: 'σε %s',
	            past: '%s πριν',
	            s: 'λίγα δευτερόλεπτα',
	            m: 'ένα λεπτό',
	            mm: '%d λεπτά',
	            h: 'μία ώρα',
	            hh: '%d ώρες',
	            d: 'μία μέρα',
	            dd: '%d μέρες',
	            M: 'ένας μήνας',
	            MM: '%d μήνες',
	            y: 'ένας χρόνος',
	            yy: '%d χρόνια'
	        },
	        ordinalParse: /\d{1,2}η/,
	        ordinal: '%dη',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4st is the first week of the year.
	        }
	    });

	    return el;
	});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : australian english (en-au)

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var en_au = moment.defineLocale('en-au', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY h:mm A',
	            LLLL: 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function ordinal(number) {
	            var b = number % 10,
	                output = ~ ~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return en_au;
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : canadian english (en-ca)
	//! author : Jonathan Abourbih : https://github.com/jonbca

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var en_ca = moment.defineLocale('en-ca', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'YYYY-MM-DD',
	            LL: 'D MMMM, YYYY',
	            LLL: 'D MMMM, YYYY h:mm A',
	            LLLL: 'dddd, D MMMM, YYYY h:mm A'
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function ordinal(number) {
	            var b = number % 10,
	                output = ~ ~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
	            return number + output;
	        }
	    });

	    return en_ca;
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : great britain english (en-gb)
	//! author : Chris Gedrim : https://github.com/chrisgedrim

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var en_gb = moment.defineLocale('en-gb', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function ordinal(number) {
	            var b = number % 10,
	                output = ~ ~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return en_gb;
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Irish english (en-ie)
	//! author : Chris Cartlidge : https://github.com/chriscartlidge

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var en_ie = moment.defineLocale('en-ie', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD-MM-YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function ordinal(number) {
	            var b = number % 10,
	                output = ~ ~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return en_ie;
	});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : New Zealand english (en-nz)

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var en_nz = moment.defineLocale('en-nz', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY h:mm A',
	            LLLL: 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function ordinal(number) {
	            var b = number % 10,
	                output = ~ ~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return en_nz;
	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : esperanto (eo)
	//! author : Colin Dean : https://github.com/colindean
	//! komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
	//!          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var eo = moment.defineLocale('eo', {
	        months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
	        weekdays: 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
	        weekdaysShort: 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
	        weekdaysMin: 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'D[-an de] MMMM, YYYY',
	            LLL: 'D[-an de] MMMM, YYYY HH:mm',
	            LLLL: 'dddd, [la] D[-an de] MMMM, YYYY HH:mm'
	        },
	        meridiemParse: /[ap]\.t\.m/i,
	        isPM: function isPM(input) {
	            return input.charAt(0).toLowerCase() === 'p';
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'p.t.m.' : 'P.T.M.';
	            } else {
	                return isLower ? 'a.t.m.' : 'A.T.M.';
	            }
	        },
	        calendar: {
	            sameDay: '[Hodiaŭ je] LT',
	            nextDay: '[Morgaŭ je] LT',
	            nextWeek: 'dddd [je] LT',
	            lastDay: '[Hieraŭ je] LT',
	            lastWeek: '[pasinta] dddd [je] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'je %s',
	            past: 'antaŭ %s',
	            s: 'sekundoj',
	            m: 'minuto',
	            mm: '%d minutoj',
	            h: 'horo',
	            hh: '%d horoj',
	            d: 'tago', //ne 'diurno', ĉar estas uzita por proksimumo
	            dd: '%d tagoj',
	            M: 'monato',
	            MM: '%d monatoj',
	            y: 'jaro',
	            yy: '%d jaroj'
	        },
	        ordinalParse: /\d{1,2}a/,
	        ordinal: '%da',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return eo;
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : spanish (es)
	//! author : Julio Napurí : https://github.com/julionc

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
	        _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

	    var es = moment.defineLocale('es', {
	        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
	        monthsShort: function monthsShort(m, format) {
	            if (/-MMM-/.test(format)) {
	                return _monthsShort[m.month()];
	            } else {
	                return monthsShortDot[m.month()];
	            }
	        },
	        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [de] MMMM [de] YYYY',
	            LLL: 'D [de] MMMM [de] YYYY H:mm',
	            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
	        },
	        calendar: {
	            sameDay: function sameDay() {
	                return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            nextDay: function nextDay() {
	                return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            nextWeek: function nextWeek() {
	                return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            lastDay: function lastDay() {
	                return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            lastWeek: function lastWeek() {
	                return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'en %s',
	            past: 'hace %s',
	            s: 'unos segundos',
	            m: 'un minuto',
	            mm: '%d minutos',
	            h: 'una hora',
	            hh: '%d horas',
	            d: 'un día',
	            dd: '%d días',
	            M: 'un mes',
	            MM: '%d meses',
	            y: 'un año',
	            yy: '%d años'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return es;
	});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : estonian (et)
	//! author : Henry Kehlmann : https://github.com/madhenry
	//! improvements : Illimar Tambek : https://github.com/ragulka

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            's': ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
	            'm': ['ühe minuti', 'üks minut'],
	            'mm': [number + ' minuti', number + ' minutit'],
	            'h': ['ühe tunni', 'tund aega', 'üks tund'],
	            'hh': [number + ' tunni', number + ' tundi'],
	            'd': ['ühe päeva', 'üks päev'],
	            'M': ['kuu aja', 'kuu aega', 'üks kuu'],
	            'MM': [number + ' kuu', number + ' kuud'],
	            'y': ['ühe aasta', 'aasta', 'üks aasta'],
	            'yy': [number + ' aasta', number + ' aastat']
	        };
	        if (withoutSuffix) {
	            return format[key][2] ? format[key][2] : format[key][1];
	        }
	        return isFuture ? format[key][0] : format[key][1];
	    }

	    var et = moment.defineLocale('et', {
	        months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
	        monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
	        weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
	        weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
	        weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[Täna,] LT',
	            nextDay: '[Homme,] LT',
	            nextWeek: '[Järgmine] dddd LT',
	            lastDay: '[Eile,] LT',
	            lastWeek: '[Eelmine] dddd LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s pärast',
	            past: '%s tagasi',
	            s: processRelativeTime,
	            m: processRelativeTime,
	            mm: processRelativeTime,
	            h: processRelativeTime,
	            hh: processRelativeTime,
	            d: processRelativeTime,
	            dd: '%d päeva',
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return et;
	});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : euskara (eu)
	//! author : Eneko Illarramendi : https://github.com/eillarra

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var eu = moment.defineLocale('eu', {
	        months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
	        monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
	        weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
	        weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
	        weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'YYYY[ko] MMMM[ren] D[a]',
	            LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
	            LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
	            l: 'YYYY-M-D',
	            ll: 'YYYY[ko] MMM D[a]',
	            lll: 'YYYY[ko] MMM D[a] HH:mm',
	            llll: 'ddd, YYYY[ko] MMM D[a] HH:mm'
	        },
	        calendar: {
	            sameDay: '[gaur] LT[etan]',
	            nextDay: '[bihar] LT[etan]',
	            nextWeek: 'dddd LT[etan]',
	            lastDay: '[atzo] LT[etan]',
	            lastWeek: '[aurreko] dddd LT[etan]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s barru',
	            past: 'duela %s',
	            s: 'segundo batzuk',
	            m: 'minutu bat',
	            mm: '%d minutu',
	            h: 'ordu bat',
	            hh: '%d ordu',
	            d: 'egun bat',
	            dd: '%d egun',
	            M: 'hilabete bat',
	            MM: '%d hilabete',
	            y: 'urte bat',
	            yy: '%d urte'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return eu;
	});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Persian (fa)
	//! author : Ebrahim Byagowi : https://github.com/ebraminio

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '۱',
	        '2': '۲',
	        '3': '۳',
	        '4': '۴',
	        '5': '۵',
	        '6': '۶',
	        '7': '۷',
	        '8': '۸',
	        '9': '۹',
	        '0': '۰'
	    },
	        numberMap = {
	        '۱': '1',
	        '۲': '2',
	        '۳': '3',
	        '۴': '4',
	        '۵': '5',
	        '۶': '6',
	        '۷': '7',
	        '۸': '8',
	        '۹': '9',
	        '۰': '0'
	    };

	    var fa = moment.defineLocale('fa', {
	        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
	        weekdaysShort: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
	        weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /قبل از ظهر|بعد از ظهر/,
	        isPM: function isPM(input) {
	            return (/بعد از ظهر/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 12) {
	                return 'قبل از ظهر';
	            } else {
	                return 'بعد از ظهر';
	            }
	        },
	        calendar: {
	            sameDay: '[امروز ساعت] LT',
	            nextDay: '[فردا ساعت] LT',
	            nextWeek: 'dddd [ساعت] LT',
	            lastDay: '[دیروز ساعت] LT',
	            lastWeek: 'dddd [پیش] [ساعت] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'در %s',
	            past: '%s پیش',
	            s: 'چندین ثانیه',
	            m: 'یک دقیقه',
	            mm: '%d دقیقه',
	            h: 'یک ساعت',
	            hh: '%d ساعت',
	            d: 'یک روز',
	            dd: '%d روز',
	            M: 'یک ماه',
	            MM: '%d ماه',
	            y: 'یک سال',
	            yy: '%d سال'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[۰-۹]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        ordinalParse: /\d{1,2}م/,
	        ordinal: '%dم',
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return fa;
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : finnish (fi)
	//! author : Tarmo Aidantausta : https://github.com/bleadof

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
	        numbersFuture = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', numbersPast[7], numbersPast[8], numbersPast[9]];
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = '';
	        switch (key) {
	            case 's':
	                return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
	            case 'm':
	                return isFuture ? 'minuutin' : 'minuutti';
	            case 'mm':
	                result = isFuture ? 'minuutin' : 'minuuttia';
	                break;
	            case 'h':
	                return isFuture ? 'tunnin' : 'tunti';
	            case 'hh':
	                result = isFuture ? 'tunnin' : 'tuntia';
	                break;
	            case 'd':
	                return isFuture ? 'päivän' : 'päivä';
	            case 'dd':
	                result = isFuture ? 'päivän' : 'päivää';
	                break;
	            case 'M':
	                return isFuture ? 'kuukauden' : 'kuukausi';
	            case 'MM':
	                result = isFuture ? 'kuukauden' : 'kuukautta';
	                break;
	            case 'y':
	                return isFuture ? 'vuoden' : 'vuosi';
	            case 'yy':
	                result = isFuture ? 'vuoden' : 'vuotta';
	                break;
	        }
	        result = verbalNumber(number, isFuture) + ' ' + result;
	        return result;
	    }
	    function verbalNumber(number, isFuture) {
	        return number < 10 ? isFuture ? numbersFuture[number] : numbersPast[number] : number;
	    }

	    var fi = moment.defineLocale('fi', {
	        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
	        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
	        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
	        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
	        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD.MM.YYYY',
	            LL: 'Do MMMM[ta] YYYY',
	            LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
	            LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
	            l: 'D.M.YYYY',
	            ll: 'Do MMM YYYY',
	            lll: 'Do MMM YYYY, [klo] HH.mm',
	            llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
	        },
	        calendar: {
	            sameDay: '[tänään] [klo] LT',
	            nextDay: '[huomenna] [klo] LT',
	            nextWeek: 'dddd [klo] LT',
	            lastDay: '[eilen] [klo] LT',
	            lastWeek: '[viime] dddd[na] [klo] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s päästä',
	            past: '%s sitten',
	            s: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fi;
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : faroese (fo)
	//! author : Ragnar Johannesen : https://github.com/ragnar123

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var fo = moment.defineLocale('fo', {
	        months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
	        weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
	        weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D. MMMM, YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Í dag kl.] LT',
	            nextDay: '[Í morgin kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[Í gjár kl.] LT',
	            lastWeek: '[síðstu] dddd [kl] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'um %s',
	            past: '%s síðani',
	            s: 'fá sekund',
	            m: 'ein minutt',
	            mm: '%d minuttir',
	            h: 'ein tími',
	            hh: '%d tímar',
	            d: 'ein dagur',
	            dd: '%d dagar',
	            M: 'ein mánaði',
	            MM: '%d mánaðir',
	            y: 'eitt ár',
	            yy: '%d ár'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fo;
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : french (fr)
	//! author : John Fischer : https://github.com/jfroffice

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var fr = moment.defineLocale('fr', {
	        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'dans %s',
	            past: 'il y a %s',
	            s: 'quelques secondes',
	            m: 'une minute',
	            mm: '%d minutes',
	            h: 'une heure',
	            hh: '%d heures',
	            d: 'un jour',
	            dd: '%d jours',
	            M: 'un mois',
	            MM: '%d mois',
	            y: 'un an',
	            yy: '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|)/,
	        ordinal: function ordinal(number) {
	            return number + (number === 1 ? 'er' : '');
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fr;
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : canadian french (fr-ca)
	//! author : Jonathan Abourbih : https://github.com/jonbca

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var fr_ca = moment.defineLocale('fr-ca', {
	        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'dans %s',
	            past: 'il y a %s',
	            s: 'quelques secondes',
	            m: 'une minute',
	            mm: '%d minutes',
	            h: 'une heure',
	            hh: '%d heures',
	            d: 'un jour',
	            dd: '%d jours',
	            M: 'un mois',
	            MM: '%d mois',
	            y: 'un an',
	            yy: '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|e)/,
	        ordinal: function ordinal(number) {
	            return number + (number === 1 ? 'er' : 'e');
	        }
	    });

	    return fr_ca;
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : swiss french (fr)
	//! author : Gaspard Bucher : https://github.com/gaspard

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var fr_ch = moment.defineLocale('fr-ch', {
	        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'dans %s',
	            past: 'il y a %s',
	            s: 'quelques secondes',
	            m: 'une minute',
	            mm: '%d minutes',
	            h: 'une heure',
	            hh: '%d heures',
	            d: 'un jour',
	            dd: '%d jours',
	            M: 'un mois',
	            MM: '%d mois',
	            y: 'un an',
	            yy: '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|e)/,
	        ordinal: function ordinal(number) {
	            return number + (number === 1 ? 'er' : 'e');
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fr_ch;
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : frisian (fy)
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

	    var fy = moment.defineLocale('fy', {
	        months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
	        monthsShort: function monthsShort(m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
	        weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
	        weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD-MM-YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[hjoed om] LT',
	            nextDay: '[moarn om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[juster om] LT',
	            lastWeek: '[ôfrûne] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'oer %s',
	            past: '%s lyn',
	            s: 'in pear sekonden',
	            m: 'ien minút',
	            mm: '%d minuten',
	            h: 'ien oere',
	            hh: '%d oeren',
	            d: 'ien dei',
	            dd: '%d dagen',
	            M: 'ien moanne',
	            MM: '%d moannen',
	            y: 'ien jier',
	            yy: '%d jierren'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal: function ordinal(number) {
	            return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fy;
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : great britain scottish gealic (gd)
	//! author : Jon Ashdown : https://github.com/jonashdown

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var months = ['Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'];

	    var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];

	    var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

	    var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

	    var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

	    var gd = moment.defineLocale('gd', {
	        months: months,
	        monthsShort: monthsShort,
	        monthsParseExact: true,
	        weekdays: weekdays,
	        weekdaysShort: weekdaysShort,
	        weekdaysMin: weekdaysMin,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[An-diugh aig] LT',
	            nextDay: '[A-màireach aig] LT',
	            nextWeek: 'dddd [aig] LT',
	            lastDay: '[An-dè aig] LT',
	            lastWeek: 'dddd [seo chaidh] [aig] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'ann an %s',
	            past: 'bho chionn %s',
	            s: 'beagan diogan',
	            m: 'mionaid',
	            mm: '%d mionaidean',
	            h: 'uair',
	            hh: '%d uairean',
	            d: 'latha',
	            dd: '%d latha',
	            M: 'mìos',
	            MM: '%d mìosan',
	            y: 'bliadhna',
	            yy: '%d bliadhna'
	        },
	        ordinalParse: /\d{1,2}(d|na|mh)/,
	        ordinal: function ordinal(number) {
	            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return gd;
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : galician (gl)
	//! author : Juan G. Hurtado : https://github.com/juanghurtado

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var gl = moment.defineLocale('gl', {
	        months: 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
	        monthsShort: 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
	        weekdays: 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),
	        weekdaysShort: 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),
	        weekdaysMin: 'Do_Lu_Ma_Mé_Xo_Ve_Sá'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY H:mm',
	            LLLL: 'dddd D MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: function sameDay() {
	                return '[hoxe ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
	            },
	            nextDay: function nextDay() {
	                return '[mañá ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
	            },
	            nextWeek: function nextWeek() {
	                return 'dddd [' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
	            },
	            lastDay: function lastDay() {
	                return '[onte ' + (this.hours() !== 1 ? 'á' : 'a') + '] LT';
	            },
	            lastWeek: function lastWeek() {
	                return '[o] dddd [pasado ' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: function future(str) {
	                if (str === 'uns segundos') {
	                    return 'nuns segundos';
	                }
	                return 'en ' + str;
	            },
	            past: 'hai %s',
	            s: 'uns segundos',
	            m: 'un minuto',
	            mm: '%d minutos',
	            h: 'unha hora',
	            hh: '%d horas',
	            d: 'un día',
	            dd: '%d días',
	            M: 'un mes',
	            MM: '%d meses',
	            y: 'un ano',
	            yy: '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return gl;
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hebrew (he)
	//! author : Tomer Cohen : https://github.com/tomer
	//! author : Moshe Simantov : https://github.com/DevelopmentIL
	//! author : Tal Ater : https://github.com/TalAter

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var he = moment.defineLocale('he', {
	        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
	        monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
	        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
	        weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
	        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [ב]MMMM YYYY',
	            LLL: 'D [ב]MMMM YYYY HH:mm',
	            LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
	            l: 'D/M/YYYY',
	            ll: 'D MMM YYYY',
	            lll: 'D MMM YYYY HH:mm',
	            llll: 'ddd, D MMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[היום ב־]LT',
	            nextDay: '[מחר ב־]LT',
	            nextWeek: 'dddd [בשעה] LT',
	            lastDay: '[אתמול ב־]LT',
	            lastWeek: '[ביום] dddd [האחרון בשעה] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'בעוד %s',
	            past: 'לפני %s',
	            s: 'מספר שניות',
	            m: 'דקה',
	            mm: '%d דקות',
	            h: 'שעה',
	            hh: function hh(number) {
	                if (number === 2) {
	                    return 'שעתיים';
	                }
	                return number + ' שעות';
	            },
	            d: 'יום',
	            dd: function dd(number) {
	                if (number === 2) {
	                    return 'יומיים';
	                }
	                return number + ' ימים';
	            },
	            M: 'חודש',
	            MM: function MM(number) {
	                if (number === 2) {
	                    return 'חודשיים';
	                }
	                return number + ' חודשים';
	            },
	            y: 'שנה',
	            yy: function yy(number) {
	                if (number === 2) {
	                    return 'שנתיים';
	                } else if (number % 10 === 0 && number !== 10) {
	                    return number + ' שנה';
	                }
	                return number + ' שנים';
	            }
	        }
	    });

	    return he;
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : hindi (hi)
	//! author : Mayank Singhal : https://github.com/mayanksinghal

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	        numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    var hi = moment.defineLocale('hi', {
	        months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
	        monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
	        weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm बजे',
	            LTS: 'A h:mm:ss बजे',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm बजे',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
	        },
	        calendar: {
	            sameDay: '[आज] LT',
	            nextDay: '[कल] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[कल] LT',
	            lastWeek: '[पिछले] dddd, LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s में',
	            past: '%s पहले',
	            s: 'कुछ ही क्षण',
	            m: 'एक मिनट',
	            mm: '%d मिनट',
	            h: 'एक घंटा',
	            hh: '%d घंटे',
	            d: 'एक दिन',
	            dd: '%d दिन',
	            M: 'एक महीने',
	            MM: '%d महीने',
	            y: 'एक वर्ष',
	            yy: '%d वर्ष'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
	        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
	        meridiemParse: /रात|सुबह|दोपहर|शाम/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सुबह') {
	                return hour;
	            } else if (meridiem === 'दोपहर') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'शाम') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'रात';
	            } else if (hour < 10) {
	                return 'सुबह';
	            } else if (hour < 17) {
	                return 'दोपहर';
	            } else if (hour < 20) {
	                return 'शाम';
	            } else {
	                return 'रात';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return hi;
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : hrvatski (hr)
	//! author : Bojan Marković : https://github.com/bmarkovic

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'm':
	                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	            case 'mm':
	                if (number === 1) {
	                    result += 'minuta';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'minute';
	                } else {
	                    result += 'minuta';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'jedan sat' : 'jednog sata';
	            case 'hh':
	                if (number === 1) {
	                    result += 'sat';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'sata';
	                } else {
	                    result += 'sati';
	                }
	                return result;
	            case 'dd':
	                if (number === 1) {
	                    result += 'dan';
	                } else {
	                    result += 'dana';
	                }
	                return result;
	            case 'MM':
	                if (number === 1) {
	                    result += 'mjesec';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'mjeseca';
	                } else {
	                    result += 'mjeseci';
	                }
	                return result;
	            case 'yy':
	                if (number === 1) {
	                    result += 'godina';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'godine';
	                } else {
	                    result += 'godina';
	                }
	                return result;
	        }
	    }

	    var hr = moment.defineLocale('hr', {
	        months: {
	            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
	            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
	        },
	        monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
	        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',
	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay: '[jučer u] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                        return '[prošlu] dddd [u] LT';
	                    case 6:
	                        return '[prošle] [subote] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'prije %s',
	            s: 'par sekundi',
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: 'dan',
	            dd: translate,
	            M: 'mjesec',
	            MM: translate,
	            y: 'godinu',
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return hr;
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : hungarian (hu)
	//! author : Adam Brunner : https://github.com/adambrunner

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
	    function translate(number, withoutSuffix, key, isFuture) {
	        var num = number,
	            suffix;
	        switch (key) {
	            case 's':
	                return isFuture || withoutSuffix ? 'néhány másodperc' : 'néhány másodperce';
	            case 'm':
	                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
	            case 'mm':
	                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
	            case 'h':
	                return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
	            case 'hh':
	                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
	            case 'd':
	                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
	            case 'dd':
	                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
	            case 'M':
	                return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	            case 'MM':
	                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	            case 'y':
	                return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
	            case 'yy':
	                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
	        }
	        return '';
	    }
	    function week(isFuture) {
	        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
	    }

	    var hu = moment.defineLocale('hu', {
	        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
	        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
	        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
	        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
	        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'YYYY.MM.DD.',
	            LL: 'YYYY. MMMM D.',
	            LLL: 'YYYY. MMMM D. H:mm',
	            LLLL: 'YYYY. MMMM D., dddd H:mm'
	        },
	        meridiemParse: /de|du/i,
	        isPM: function isPM(input) {
	            return input.charAt(1).toLowerCase() === 'u';
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower === true ? 'de' : 'DE';
	            } else {
	                return isLower === true ? 'du' : 'DU';
	            }
	        },
	        calendar: {
	            sameDay: '[ma] LT[-kor]',
	            nextDay: '[holnap] LT[-kor]',
	            nextWeek: function nextWeek() {
	                return week.call(this, true);
	            },
	            lastDay: '[tegnap] LT[-kor]',
	            lastWeek: function lastWeek() {
	                return week.call(this, false);
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s múlva',
	            past: '%s',
	            s: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return hu;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Armenian (hy-am)
	//! author : Armendarabyan : https://github.com/armendarabyan

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var hy_am = moment.defineLocale('hy-am', {
	        months: {
	            format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
	            standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
	        },
	        monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
	        weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
	        weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY թ.',
	            LLL: 'D MMMM YYYY թ., HH:mm',
	            LLLL: 'dddd, D MMMM YYYY թ., HH:mm'
	        },
	        calendar: {
	            sameDay: '[այսօր] LT',
	            nextDay: '[վաղը] LT',
	            lastDay: '[երեկ] LT',
	            nextWeek: function nextWeek() {
	                return 'dddd [օրը ժամը] LT';
	            },
	            lastWeek: function lastWeek() {
	                return '[անցած] dddd [օրը ժամը] LT';
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s հետո',
	            past: '%s առաջ',
	            s: 'մի քանի վայրկյան',
	            m: 'րոպե',
	            mm: '%d րոպե',
	            h: 'ժամ',
	            hh: '%d ժամ',
	            d: 'օր',
	            dd: '%d օր',
	            M: 'ամիս',
	            MM: '%d ամիս',
	            y: 'տարի',
	            yy: '%d տարի'
	        },
	        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
	        isPM: function isPM(input) {
	            return (/^(ցերեկվա|երեկոյան)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour) {
	            if (hour < 4) {
	                return 'գիշերվա';
	            } else if (hour < 12) {
	                return 'առավոտվա';
	            } else if (hour < 17) {
	                return 'ցերեկվա';
	            } else {
	                return 'երեկոյան';
	            }
	        },
	        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
	        ordinal: function ordinal(number, period) {
	            switch (period) {
	                case 'DDD':
	                case 'w':
	                case 'W':
	                case 'DDDo':
	                    if (number === 1) {
	                        return number + '-ին';
	                    }
	                    return number + '-րդ';
	                default:
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return hy_am;
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bahasa Indonesia (id)
	//! author : Mohammad Satrio Utomo : https://github.com/tyok
	//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var id = moment.defineLocale('id', {
	        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
	        weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
	        weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
	        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [pukul] HH.mm',
	            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|siang|sore|malam/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'siang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sore' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'siang';
	            } else if (hours < 19) {
	                return 'sore';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar: {
	            sameDay: '[Hari ini pukul] LT',
	            nextDay: '[Besok pukul] LT',
	            nextWeek: 'dddd [pukul] LT',
	            lastDay: '[Kemarin pukul] LT',
	            lastWeek: 'dddd [lalu pukul] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'dalam %s',
	            past: '%s yang lalu',
	            s: 'beberapa detik',
	            m: 'semenit',
	            mm: '%d menit',
	            h: 'sejam',
	            hh: '%d jam',
	            d: 'sehari',
	            dd: '%d hari',
	            M: 'sebulan',
	            MM: '%d bulan',
	            y: 'setahun',
	            yy: '%d tahun'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return id;
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : icelandic (is)
	//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function plural(n) {
	        if (n % 100 === 11) {
	            return true;
	        } else if (n % 10 === 1) {
	            return false;
	        }
	        return true;
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
	            case 'm':
	                return withoutSuffix ? 'mínúta' : 'mínútu';
	            case 'mm':
	                if (plural(number)) {
	                    return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
	                } else if (withoutSuffix) {
	                    return result + 'mínúta';
	                }
	                return result + 'mínútu';
	            case 'hh':
	                if (plural(number)) {
	                    return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
	                }
	                return result + 'klukkustund';
	            case 'd':
	                if (withoutSuffix) {
	                    return 'dagur';
	                }
	                return isFuture ? 'dag' : 'degi';
	            case 'dd':
	                if (plural(number)) {
	                    if (withoutSuffix) {
	                        return result + 'dagar';
	                    }
	                    return result + (isFuture ? 'daga' : 'dögum');
	                } else if (withoutSuffix) {
	                    return result + 'dagur';
	                }
	                return result + (isFuture ? 'dag' : 'degi');
	            case 'M':
	                if (withoutSuffix) {
	                    return 'mánuður';
	                }
	                return isFuture ? 'mánuð' : 'mánuði';
	            case 'MM':
	                if (plural(number)) {
	                    if (withoutSuffix) {
	                        return result + 'mánuðir';
	                    }
	                    return result + (isFuture ? 'mánuði' : 'mánuðum');
	                } else if (withoutSuffix) {
	                    return result + 'mánuður';
	                }
	                return result + (isFuture ? 'mánuð' : 'mánuði');
	            case 'y':
	                return withoutSuffix || isFuture ? 'ár' : 'ári';
	            case 'yy':
	                if (plural(number)) {
	                    return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
	                }
	                return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
	        }
	    }

	    var is = moment.defineLocale('is', {
	        months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
	        weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
	        weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
	        weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY [kl.] H:mm',
	            LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
	        },
	        calendar: {
	            sameDay: '[í dag kl.] LT',
	            nextDay: '[á morgun kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[í gær kl.] LT',
	            lastWeek: '[síðasta] dddd [kl.] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'eftir %s',
	            past: 'fyrir %s síðan',
	            s: translate,
	            m: translate,
	            mm: translate,
	            h: 'klukkustund',
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return is;
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : italian (it)
	//! author : Lorenzo : https://github.com/aliem
	//! author: Mattia Larentis: https://github.com/nostalgiaz

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var it = moment.defineLocale('it', {
	        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
	        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
	        weekdays: 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
	        weekdaysShort: 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
	        weekdaysMin: 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Oggi alle] LT',
	            nextDay: '[Domani alle] LT',
	            nextWeek: 'dddd [alle] LT',
	            lastDay: '[Ieri alle] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[la scorsa] dddd [alle] LT';
	                    default:
	                        return '[lo scorso] dddd [alle] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: function future(s) {
	                return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
	            },
	            past: '%s fa',
	            s: 'alcuni secondi',
	            m: 'un minuto',
	            mm: '%d minuti',
	            h: 'un\'ora',
	            hh: '%d ore',
	            d: 'un giorno',
	            dd: '%d giorni',
	            M: 'un mese',
	            MM: '%d mesi',
	            y: 'un anno',
	            yy: '%d anni'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return it;
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : japanese (ja)
	//! author : LI Long : https://github.com/baryon

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ja = moment.defineLocale('ja', {
	        months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
	        weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
	        weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
	        longDateFormat: {
	            LT: 'Ah時m分',
	            LTS: 'Ah時m分s秒',
	            L: 'YYYY/MM/DD',
	            LL: 'YYYY年M月D日',
	            LLL: 'YYYY年M月D日Ah時m分',
	            LLLL: 'YYYY年M月D日Ah時m分 dddd'
	        },
	        meridiemParse: /午前|午後/i,
	        isPM: function isPM(input) {
	            return input === '午後';
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 12) {
	                return '午前';
	            } else {
	                return '午後';
	            }
	        },
	        calendar: {
	            sameDay: '[今日] LT',
	            nextDay: '[明日] LT',
	            nextWeek: '[来週]dddd LT',
	            lastDay: '[昨日] LT',
	            lastWeek: '[前週]dddd LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s後',
	            past: '%s前',
	            s: '数秒',
	            m: '1分',
	            mm: '%d分',
	            h: '1時間',
	            hh: '%d時間',
	            d: '1日',
	            dd: '%d日',
	            M: '1ヶ月',
	            MM: '%dヶ月',
	            y: '1年',
	            yy: '%d年'
	        }
	    });

	    return ja;
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Boso Jowo (jv)
	//! author : Rony Lantip : https://github.com/lantip
	//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var jv = moment.defineLocale('jv', {
	        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
	        weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
	        weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
	        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [pukul] HH.mm',
	            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /enjing|siyang|sonten|ndalu/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'enjing') {
	                return hour;
	            } else if (meridiem === 'siyang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'enjing';
	            } else if (hours < 15) {
	                return 'siyang';
	            } else if (hours < 19) {
	                return 'sonten';
	            } else {
	                return 'ndalu';
	            }
	        },
	        calendar: {
	            sameDay: '[Dinten puniko pukul] LT',
	            nextDay: '[Mbenjang pukul] LT',
	            nextWeek: 'dddd [pukul] LT',
	            lastDay: '[Kala wingi pukul] LT',
	            lastWeek: 'dddd [kepengker pukul] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'wonten ing %s',
	            past: '%s ingkang kepengker',
	            s: 'sawetawis detik',
	            m: 'setunggal menit',
	            mm: '%d menit',
	            h: 'setunggal jam',
	            hh: '%d jam',
	            d: 'sedinten',
	            dd: '%d dinten',
	            M: 'sewulan',
	            MM: '%d wulan',
	            y: 'setaun',
	            yy: '%d taun'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return jv;
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Georgian (ka)
	//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ka = moment.defineLocale('ka', {
	        months: {
	            standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
	            format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
	        },
	        monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
	        weekdays: {
	            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
	            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
	            isFormat: /(წინა|შემდეგ)/
	        },
	        weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
	        weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY h:mm A',
	            LLLL: 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar: {
	            sameDay: '[დღეს] LT[-ზე]',
	            nextDay: '[ხვალ] LT[-ზე]',
	            lastDay: '[გუშინ] LT[-ზე]',
	            nextWeek: '[შემდეგ] dddd LT[-ზე]',
	            lastWeek: '[წინა] dddd LT-ზე',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: function future(s) {
	                return (/(წამი|წუთი|საათი|წელი)/.test(s) ? s.replace(/ი$/, 'ში') : s + 'ში'
	                );
	            },
	            past: function past(s) {
	                if (/(წამი|წუთი|საათი|დღე|თვე)/.test(s)) {
	                    return s.replace(/(ი|ე)$/, 'ის წინ');
	                }
	                if (/წელი/.test(s)) {
	                    return s.replace(/წელი$/, 'წლის წინ');
	                }
	            },
	            s: 'რამდენიმე წამი',
	            m: 'წუთი',
	            mm: '%d წუთი',
	            h: 'საათი',
	            hh: '%d საათი',
	            d: 'დღე',
	            dd: '%d დღე',
	            M: 'თვე',
	            MM: '%d თვე',
	            y: 'წელი',
	            yy: '%d წელი'
	        },
	        ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
	        ordinal: function ordinal(number) {
	            if (number === 0) {
	                return number;
	            }
	            if (number === 1) {
	                return number + '-ლი';
	            }
	            if (number < 20 || number <= 100 && number % 20 === 0 || number % 100 === 0) {
	                return 'მე-' + number;
	            }
	            return number + '-ე';
	        },
	        week: {
	            dow: 1,
	            doy: 7
	        }
	    });

	    return ka;
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : kazakh (kk)
	//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var suffixes = {
	        0: '-ші',
	        1: '-ші',
	        2: '-ші',
	        3: '-ші',
	        4: '-ші',
	        5: '-ші',
	        6: '-шы',
	        7: '-ші',
	        8: '-ші',
	        9: '-шы',
	        10: '-шы',
	        20: '-шы',
	        30: '-шы',
	        40: '-шы',
	        50: '-ші',
	        60: '-шы',
	        70: '-ші',
	        80: '-ші',
	        90: '-шы',
	        100: '-ші'
	    };

	    var kk = moment.defineLocale('kk', {
	        months: 'Қаңтар_Ақпан_Наурыз_Сәуір_Мамыр_Маусым_Шілде_Тамыз_Қыркүйек_Қазан_Қараша_Желтоқсан'.split('_'),
	        monthsShort: 'Қаң_Ақп_Нау_Сәу_Мам_Мау_Шіл_Там_Қыр_Қаз_Қар_Жел'.split('_'),
	        weekdays: 'Жексенбі_Дүйсенбі_Сейсенбі_Сәрсенбі_Бейсенбі_Жұма_Сенбі'.split('_'),
	        weekdaysShort: 'Жек_Дүй_Сей_Сәр_Бей_Жұм_Сен'.split('_'),
	        weekdaysMin: 'Жк_Дй_Сй_Ср_Бй_Жм_Сн'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Бүгін сағат] LT',
	            nextDay: '[Ертең сағат] LT',
	            nextWeek: 'dddd [сағат] LT',
	            lastDay: '[Кеше сағат] LT',
	            lastWeek: '[Өткен аптаның] dddd [сағат] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s ішінде',
	            past: '%s бұрын',
	            s: 'бірнеше секунд',
	            m: 'бір минут',
	            mm: '%d минут',
	            h: 'бір сағат',
	            hh: '%d сағат',
	            d: 'бір күн',
	            dd: '%d күн',
	            M: 'бір ай',
	            MM: '%d ай',
	            y: 'бір жыл',
	            yy: '%d жыл'
	        },
	        ordinalParse: /\d{1,2}-(ші|шы)/,
	        ordinal: function ordinal(number) {
	            var a = number % 10,
	                b = number >= 100 ? 100 : null;
	            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return kk;
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : khmer (km)
	//! author : Kruy Vanna : https://github.com/kruyvanna

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var km = moment.defineLocale('km', {
	        months: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        monthsShort: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
	            nextDay: '[ស្អែក ម៉ោង] LT',
	            nextWeek: 'dddd [ម៉ោង] LT',
	            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
	            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%sទៀត',
	            past: '%sមុន',
	            s: 'ប៉ុន្មានវិនាទី',
	            m: 'មួយនាទី',
	            mm: '%d នាទី',
	            h: 'មួយម៉ោង',
	            hh: '%d ម៉ោង',
	            d: 'មួយថ្ងៃ',
	            dd: '%d ថ្ងៃ',
	            M: 'មួយខែ',
	            MM: '%d ខែ',
	            y: 'មួយឆ្នាំ',
	            yy: '%d ឆ្នាំ'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return km;
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : korean (ko)
	//!
	//! authors
	//!
	//! - Kyungwook, Park : https://github.com/kyungw00k
	//! - Jeeeyul Lee <jeeeyul@gmail.com>

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ko = moment.defineLocale('ko', {
	        months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
	        weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
	        weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
	        longDateFormat: {
	            LT: 'A h시 m분',
	            LTS: 'A h시 m분 s초',
	            L: 'YYYY.MM.DD',
	            LL: 'YYYY년 MMMM D일',
	            LLL: 'YYYY년 MMMM D일 A h시 m분',
	            LLLL: 'YYYY년 MMMM D일 dddd A h시 m분'
	        },
	        calendar: {
	            sameDay: '오늘 LT',
	            nextDay: '내일 LT',
	            nextWeek: 'dddd LT',
	            lastDay: '어제 LT',
	            lastWeek: '지난주 dddd LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s 후',
	            past: '%s 전',
	            s: '몇초',
	            ss: '%d초',
	            m: '일분',
	            mm: '%d분',
	            h: '한시간',
	            hh: '%d시간',
	            d: '하루',
	            dd: '%d일',
	            M: '한달',
	            MM: '%d달',
	            y: '일년',
	            yy: '%d년'
	        },
	        ordinalParse: /\d{1,2}일/,
	        ordinal: '%d일',
	        meridiemParse: /오전|오후/,
	        isPM: function isPM(token) {
	            return token === '오후';
	        },
	        meridiem: function meridiem(hour, minute, isUpper) {
	            return hour < 12 ? '오전' : '오후';
	        }
	    });

	    return ko;
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Luxembourgish (lb)
	//! author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eng Minutt', 'enger Minutt'],
	            'h': ['eng Stonn', 'enger Stonn'],
	            'd': ['een Dag', 'engem Dag'],
	            'M': ['ee Mount', 'engem Mount'],
	            'y': ['ee Joer', 'engem Joer']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }
	    function processFutureTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'a ' + string;
	        }
	        return 'an ' + string;
	    }
	    function processPastTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'viru ' + string;
	        }
	        return 'virun ' + string;
	    }
	    /**
	     * Returns true if the word before the given number loses the '-n' ending.
	     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
	     *
	     * @param number {integer}
	     * @returns {boolean}
	     */
	    function eifelerRegelAppliesToNumber(_x) {
	        var _again = true;

	        _function: while (_again) {
	            var number = _x;
	            _again = false;

	            number = parseInt(number, 10);
	            if (isNaN(number)) {
	                return false;
	            }
	            if (number < 0) {
	                // Negative Number --> always true
	                return true;
	            } else if (number < 10) {
	                // Only 1 digit
	                if (4 <= number && number <= 7) {
	                    return true;
	                }
	                return false;
	            } else if (number < 100) {
	                // 2 digits
	                var lastDigit = number % 10,
	                    firstDigit = number / 10;
	                if (lastDigit === 0) {
	                    _x = firstDigit;
	                    _again = true;
	                    lastDigit = firstDigit = undefined;
	                    continue _function;
	                }
	                _x = lastDigit;
	                _again = true;
	                lastDigit = firstDigit = undefined;
	                continue _function;
	            } else if (number < 10000) {
	                // 3 or 4 digits --> recursively check first digit
	                while (number >= 10) {
	                    number = number / 10;
	                }
	                _x = number;
	                _again = true;
	                lastDigit = firstDigit = undefined;
	                continue _function;
	            } else {
	                // Anything larger than 4 digits: recursively check first n-3 digits
	                number = number / 1000;
	                _x = number;
	                _again = true;
	                lastDigit = firstDigit = undefined;
	                continue _function;
	            }
	        }
	    }

	    var lb = moment.defineLocale('lb', {
	        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
	        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm [Auer]',
	            LTS: 'H:mm:ss [Auer]',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm [Auer]',
	            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
	        },
	        calendar: {
	            sameDay: '[Haut um] LT',
	            sameElse: 'L',
	            nextDay: '[Muer um] LT',
	            nextWeek: 'dddd [um] LT',
	            lastDay: '[Gëschter um] LT',
	            lastWeek: function lastWeek() {
	                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
	                switch (this.day()) {
	                    case 2:
	                    case 4:
	                        return '[Leschten] dddd [um] LT';
	                    default:
	                        return '[Leschte] dddd [um] LT';
	                }
	            }
	        },
	        relativeTime: {
	            future: processFutureTime,
	            past: processPastTime,
	            s: 'e puer Sekonnen',
	            m: processRelativeTime,
	            mm: '%d Minutten',
	            h: processRelativeTime,
	            hh: '%d Stonnen',
	            d: processRelativeTime,
	            dd: '%d Deeg',
	            M: processRelativeTime,
	            MM: '%d Méint',
	            y: processRelativeTime,
	            yy: '%d Joer'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return lb;
	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : lao (lo)
	//! author : Ryan Hart : https://github.com/ryanhart2

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var lo = moment.defineLocale('lo', {
	        months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
	        monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
	        weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	        weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	        weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'ວັນdddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
	        isPM: function isPM(input) {
	            return input === 'ຕອນແລງ';
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ຕອນເຊົ້າ';
	            } else {
	                return 'ຕອນແລງ';
	            }
	        },
	        calendar: {
	            sameDay: '[ມື້ນີ້ເວລາ] LT',
	            nextDay: '[ມື້ອື່ນເວລາ] LT',
	            nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
	            lastDay: '[ມື້ວານນີ້ເວລາ] LT',
	            lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'ອີກ %s',
	            past: '%sຜ່ານມາ',
	            s: 'ບໍ່ເທົ່າໃດວິນາທີ',
	            m: '1 ນາທີ',
	            mm: '%d ນາທີ',
	            h: '1 ຊົ່ວໂມງ',
	            hh: '%d ຊົ່ວໂມງ',
	            d: '1 ມື້',
	            dd: '%d ມື້',
	            M: '1 ເດືອນ',
	            MM: '%d ເດືອນ',
	            y: '1 ປີ',
	            yy: '%d ປີ'
	        },
	        ordinalParse: /(ທີ່)\d{1,2}/,
	        ordinal: function ordinal(number) {
	            return 'ທີ່' + number;
	        }
	    });

	    return lo;
	});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Lithuanian (lt)
	//! author : Mindaugas Mozūras : https://github.com/mmozuras

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var units = {
	        'm': 'minutė_minutės_minutę',
	        'mm': 'minutės_minučių_minutes',
	        'h': 'valanda_valandos_valandą',
	        'hh': 'valandos_valandų_valandas',
	        'd': 'diena_dienos_dieną',
	        'dd': 'dienos_dienų_dienas',
	        'M': 'mėnuo_mėnesio_mėnesį',
	        'MM': 'mėnesiai_mėnesių_mėnesius',
	        'y': 'metai_metų_metus',
	        'yy': 'metai_metų_metus'
	    };
	    function translateSeconds(number, withoutSuffix, key, isFuture) {
	        if (withoutSuffix) {
	            return 'kelios sekundės';
	        } else {
	            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
	        }
	    }
	    function translateSingular(number, withoutSuffix, key, isFuture) {
	        return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
	    }
	    function special(number) {
	        return number % 10 === 0 || number > 10 && number < 20;
	    }
	    function forms(key) {
	        return units[key].split('_');
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        if (number === 1) {
	            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
	        } else if (withoutSuffix) {
	            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
	        } else {
	            if (isFuture) {
	                return result + forms(key)[1];
	            } else {
	                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
	            }
	        }
	    }
	    var lt = moment.defineLocale('lt', {
	        months: {
	            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
	            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_')
	        },
	        monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
	        weekdays: {
	            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
	            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
	            isFormat: /dddd HH:mm/
	        },
	        weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
	        weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'YYYY [m.] MMMM D [d.]',
	            LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	            LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
	            l: 'YYYY-MM-DD',
	            ll: 'YYYY [m.] MMMM D [d.]',
	            lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	            llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
	        },
	        calendar: {
	            sameDay: '[Šiandien] LT',
	            nextDay: '[Rytoj] LT',
	            nextWeek: 'dddd LT',
	            lastDay: '[Vakar] LT',
	            lastWeek: '[Praėjusį] dddd LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'po %s',
	            past: 'prieš %s',
	            s: translateSeconds,
	            m: translateSingular,
	            mm: translate,
	            h: translateSingular,
	            hh: translate,
	            d: translateSingular,
	            dd: translate,
	            M: translateSingular,
	            MM: translate,
	            y: translateSingular,
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}-oji/,
	        ordinal: function ordinal(number) {
	            return number + '-oji';
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return lt;
	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : latvian (lv)
	//! author : Kristaps Karlsons : https://github.com/skakri
	//! author : Jānis Elmeris : https://github.com/JanisE

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var units = {
	        'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	        'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	        'h': 'stundas_stundām_stunda_stundas'.split('_'),
	        'hh': 'stundas_stundām_stunda_stundas'.split('_'),
	        'd': 'dienas_dienām_diena_dienas'.split('_'),
	        'dd': 'dienas_dienām_diena_dienas'.split('_'),
	        'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	        'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	        'y': 'gada_gadiem_gads_gadi'.split('_'),
	        'yy': 'gada_gadiem_gads_gadi'.split('_')
	    };
	    /**
	     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
	     */
	    function format(forms, number, withoutSuffix) {
	        if (withoutSuffix) {
	            // E.g. "21 minūte", "3 minūtes".
	            return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
	        } else {
	            // E.g. "21 minūtes" as in "pēc 21 minūtes".
	            // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
	            return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
	        }
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        return number + ' ' + format(units[key], number, withoutSuffix);
	    }
	    function relativeTimeWithSingular(number, withoutSuffix, key) {
	        return format(units[key], number, withoutSuffix);
	    }
	    function relativeSeconds(number, withoutSuffix) {
	        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
	    }

	    var lv = moment.defineLocale('lv', {
	        months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
	        weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
	        weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
	        weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY.',
	            LL: 'YYYY. [gada] D. MMMM',
	            LLL: 'YYYY. [gada] D. MMMM, HH:mm',
	            LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm'
	        },
	        calendar: {
	            sameDay: '[Šodien pulksten] LT',
	            nextDay: '[Rīt pulksten] LT',
	            nextWeek: 'dddd [pulksten] LT',
	            lastDay: '[Vakar pulksten] LT',
	            lastWeek: '[Pagājušā] dddd [pulksten] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'pēc %s',
	            past: 'pirms %s',
	            s: relativeSeconds,
	            m: relativeTimeWithSingular,
	            mm: relativeTimeWithPlural,
	            h: relativeTimeWithSingular,
	            hh: relativeTimeWithPlural,
	            d: relativeTimeWithSingular,
	            dd: relativeTimeWithPlural,
	            M: relativeTimeWithSingular,
	            MM: relativeTimeWithPlural,
	            y: relativeTimeWithSingular,
	            yy: relativeTimeWithPlural
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return lv;
	});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Montenegrin (me)
	//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var translator = {
	        words: { //Different grammatical cases
	            m: ['jedan minut', 'jednog minuta'],
	            mm: ['minut', 'minuta', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mjesec', 'mjeseca', 'mjeseci'],
	            yy: ['godina', 'godine', 'godina']
	        },
	        correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
	            return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
	        },
	        translate: function translate(number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };

	    var me = moment.defineLocale('me', {
	        months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
	        monthsShort: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
	        weekdays: ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'],
	        weekdaysShort: ['ned.', 'pon.', 'uto.', 'sri.', 'čet.', 'pet.', 'sub.'],
	        weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sjutra u] LT',

	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay: '[juče u] LT',
	            lastWeek: function lastWeek() {
	                var lastWeekDays = ['[prošle] [nedjelje] [u] LT', '[prošlog] [ponedjeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srijede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
	                return lastWeekDays[this.day()];
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'prije %s',
	            s: 'nekoliko sekundi',
	            m: translator.translate,
	            mm: translator.translate,
	            h: translator.translate,
	            hh: translator.translate,
	            d: 'dan',
	            dd: translator.translate,
	            M: 'mjesec',
	            MM: translator.translate,
	            y: 'godinu',
	            yy: translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return me;
	});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : macedonian (mk)
	//! author : Borislav Mickov : https://github.com/B0k0

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var mk = moment.defineLocale('mk', {
	        months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
	        weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
	        weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'D.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY H:mm',
	            LLLL: 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[Денес во] LT',
	            nextDay: '[Утре во] LT',
	            nextWeek: '[Во] dddd [во] LT',
	            lastDay: '[Вчера во] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 6:
	                        return '[Изминатата] dddd [во] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[Изминатиот] dddd [во] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'после %s',
	            past: 'пред %s',
	            s: 'неколку секунди',
	            m: 'минута',
	            mm: '%d минути',
	            h: 'час',
	            hh: '%d часа',
	            d: 'ден',
	            dd: '%d дена',
	            M: 'месец',
	            MM: '%d месеци',
	            y: 'година',
	            yy: '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal: function ordinal(number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return mk;
	});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : malayalam (ml)
	//! author : Floyd Pink : https://github.com/floydpink

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ml = moment.defineLocale('ml', {
	        months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
	        monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
	        weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
	        weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
	        weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm -നു',
	            LTS: 'A h:mm:ss -നു',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm -നു',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'
	        },
	        calendar: {
	            sameDay: '[ഇന്ന്] LT',
	            nextDay: '[നാളെ] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[ഇന്നലെ] LT',
	            lastWeek: '[കഴിഞ്ഞ] dddd, LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s കഴിഞ്ഞ്',
	            past: '%s മുൻപ്',
	            s: 'അൽപ നിമിഷങ്ങൾ',
	            m: 'ഒരു മിനിറ്റ്',
	            mm: '%d മിനിറ്റ്',
	            h: 'ഒരു മണിക്കൂർ',
	            hh: '%d മണിക്കൂർ',
	            d: 'ഒരു ദിവസം',
	            dd: '%d ദിവസം',
	            M: 'ഒരു മാസം',
	            MM: '%d മാസം',
	            y: 'ഒരു വർഷം',
	            yy: '%d വർഷം'
	        },
	        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
	        isPM: function isPM(input) {
	            return (/^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'രാത്രി';
	            } else if (hour < 12) {
	                return 'രാവിലെ';
	            } else if (hour < 17) {
	                return 'ഉച്ച കഴിഞ്ഞ്';
	            } else if (hour < 20) {
	                return 'വൈകുന്നേരം';
	            } else {
	                return 'രാത്രി';
	            }
	        }
	    });

	    return ml;
	});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Marathi (mr)
	//! author : Harshad Kale : https://github.com/kalehv
	//! author : Vivek Athalye : https://github.com/vnathalye

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	        numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    function relativeTimeMr(number, withoutSuffix, string, isFuture) {
	        var output = '';
	        if (withoutSuffix) {
	            switch (string) {
	                case 's':
	                    output = 'काही सेकंद';break;
	                case 'm':
	                    output = 'एक मिनिट';break;
	                case 'mm':
	                    output = '%d मिनिटे';break;
	                case 'h':
	                    output = 'एक तास';break;
	                case 'hh':
	                    output = '%d तास';break;
	                case 'd':
	                    output = 'एक दिवस';break;
	                case 'dd':
	                    output = '%d दिवस';break;
	                case 'M':
	                    output = 'एक महिना';break;
	                case 'MM':
	                    output = '%d महिने';break;
	                case 'y':
	                    output = 'एक वर्ष';break;
	                case 'yy':
	                    output = '%d वर्षे';break;
	            }
	        } else {
	            switch (string) {
	                case 's':
	                    output = 'काही सेकंदां';break;
	                case 'm':
	                    output = 'एका मिनिटा';break;
	                case 'mm':
	                    output = '%d मिनिटां';break;
	                case 'h':
	                    output = 'एका तासा';break;
	                case 'hh':
	                    output = '%d तासां';break;
	                case 'd':
	                    output = 'एका दिवसा';break;
	                case 'dd':
	                    output = '%d दिवसां';break;
	                case 'M':
	                    output = 'एका महिन्या';break;
	                case 'MM':
	                    output = '%d महिन्यां';break;
	                case 'y':
	                    output = 'एका वर्षा';break;
	                case 'yy':
	                    output = '%d वर्षां';break;
	            }
	        }
	        return output.replace(/%d/i, number);
	    }

	    var mr = moment.defineLocale('mr', {
	        months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
	        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
	        weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm वाजता',
	            LTS: 'A h:mm:ss वाजता',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm वाजता',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
	        },
	        calendar: {
	            sameDay: '[आज] LT',
	            nextDay: '[उद्या] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[काल] LT',
	            lastWeek: '[मागील] dddd, LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%sमध्ये',
	            past: '%sपूर्वी',
	            s: relativeTimeMr,
	            m: relativeTimeMr,
	            mm: relativeTimeMr,
	            h: relativeTimeMr,
	            hh: relativeTimeMr,
	            d: relativeTimeMr,
	            dd: relativeTimeMr,
	            M: relativeTimeMr,
	            MM: relativeTimeMr,
	            y: relativeTimeMr,
	            yy: relativeTimeMr
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात्री') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सकाळी') {
	                return hour;
	            } else if (meridiem === 'दुपारी') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'सायंकाळी') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'रात्री';
	            } else if (hour < 10) {
	                return 'सकाळी';
	            } else if (hour < 17) {
	                return 'दुपारी';
	            } else if (hour < 20) {
	                return 'सायंकाळी';
	            } else {
	                return 'रात्री';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return mr;
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bahasa Malaysia (ms-MY)
	//! author : Weldan Jamili : https://github.com/weldan

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ms = moment.defineLocale('ms', {
	        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [pukul] HH.mm',
	            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar: {
	            sameDay: '[Hari ini pukul] LT',
	            nextDay: '[Esok pukul] LT',
	            nextWeek: 'dddd [pukul] LT',
	            lastDay: '[Kelmarin pukul] LT',
	            lastWeek: 'dddd [lepas pukul] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'dalam %s',
	            past: '%s yang lepas',
	            s: 'beberapa saat',
	            m: 'seminit',
	            mm: '%d minit',
	            h: 'sejam',
	            hh: '%d jam',
	            d: 'sehari',
	            dd: '%d hari',
	            M: 'sebulan',
	            MM: '%d bulan',
	            y: 'setahun',
	            yy: '%d tahun'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ms;
	});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bahasa Malaysia (ms-MY)
	//! author : Weldan Jamili : https://github.com/weldan

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ms_my = moment.defineLocale('ms-my', {
	        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [pukul] HH.mm',
	            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar: {
	            sameDay: '[Hari ini pukul] LT',
	            nextDay: '[Esok pukul] LT',
	            nextWeek: 'dddd [pukul] LT',
	            lastDay: '[Kelmarin pukul] LT',
	            lastWeek: 'dddd [lepas pukul] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'dalam %s',
	            past: '%s yang lepas',
	            s: 'beberapa saat',
	            m: 'seminit',
	            mm: '%d minit',
	            h: 'sejam',
	            hh: '%d jam',
	            d: 'sehari',
	            dd: '%d hari',
	            M: 'sebulan',
	            MM: '%d bulan',
	            y: 'setahun',
	            yy: '%d tahun'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ms_my;
	});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Burmese (my)
	//! author : Squar team, mysquar.com

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '၁',
	        '2': '၂',
	        '3': '၃',
	        '4': '၄',
	        '5': '၅',
	        '6': '၆',
	        '7': '၇',
	        '8': '၈',
	        '9': '၉',
	        '0': '၀'
	    },
	        numberMap = {
	        '၁': '1',
	        '၂': '2',
	        '၃': '3',
	        '၄': '4',
	        '၅': '5',
	        '၆': '6',
	        '၇': '7',
	        '၈': '8',
	        '၉': '9',
	        '၀': '0'
	    };

	    var my = moment.defineLocale('my', {
	        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
	        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
	        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
	        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[ယနေ.] LT [မှာ]',
	            nextDay: '[မနက်ဖြန်] LT [မှာ]',
	            nextWeek: 'dddd LT [မှာ]',
	            lastDay: '[မနေ.က] LT [မှာ]',
	            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'လာမည့် %s မှာ',
	            past: 'လွန်ခဲ့သော %s က',
	            s: 'စက္ကန်.အနည်းငယ်',
	            m: 'တစ်မိနစ်',
	            mm: '%d မိနစ်',
	            h: 'တစ်နာရီ',
	            hh: '%d နာရီ',
	            d: 'တစ်ရက်',
	            dd: '%d ရက်',
	            M: 'တစ်လ',
	            MM: '%d လ',
	            y: 'တစ်နှစ်',
	            yy: '%d နှစ်'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return my;
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : norwegian bokmål (nb)
	//! authors : Espen Hovlandsdal : https://github.com/rexxars
	//!           Sigurd Gartmann : https://github.com/sigurdga

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var nb = moment.defineLocale('nb', {
	        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
	        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
	        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY [kl.] HH:mm',
	            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
	        },
	        calendar: {
	            sameDay: '[i dag kl.] LT',
	            nextDay: '[i morgen kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[i går kl.] LT',
	            lastWeek: '[forrige] dddd [kl.] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'om %s',
	            past: 'for %s siden',
	            s: 'noen sekunder',
	            m: 'ett minutt',
	            mm: '%d minutter',
	            h: 'en time',
	            hh: '%d timer',
	            d: 'en dag',
	            dd: '%d dager',
	            M: 'en måned',
	            MM: '%d måneder',
	            y: 'ett år',
	            yy: '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return nb;
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : nepali/nepalese
	//! author : suvash : https://github.com/suvash

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	        numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    var ne = moment.defineLocale('ne', {
	        months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
	        monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
	        weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
	        weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
	        weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
	        longDateFormat: {
	            LT: 'Aको h:mm बजे',
	            LTS: 'Aको h:mm:ss बजे',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, Aको h:mm बजे',
	            LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'राति') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'बिहान') {
	                return hour;
	            } else if (meridiem === 'दिउँसो') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'साँझ') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 3) {
	                return 'राति';
	            } else if (hour < 12) {
	                return 'बिहान';
	            } else if (hour < 16) {
	                return 'दिउँसो';
	            } else if (hour < 20) {
	                return 'साँझ';
	            } else {
	                return 'राति';
	            }
	        },
	        calendar: {
	            sameDay: '[आज] LT',
	            nextDay: '[भोलि] LT',
	            nextWeek: '[आउँदो] dddd[,] LT',
	            lastDay: '[हिजो] LT',
	            lastWeek: '[गएको] dddd[,] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%sमा',
	            past: '%s अगाडि',
	            s: 'केही क्षण',
	            m: 'एक मिनेट',
	            mm: '%d मिनेट',
	            h: 'एक घण्टा',
	            hh: '%d घण्टा',
	            d: 'एक दिन',
	            dd: '%d दिन',
	            M: 'एक महिना',
	            MM: '%d महिना',
	            y: 'एक बर्ष',
	            yy: '%d बर्ष'
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ne;
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : dutch (nl)
	//! author : Joris Röling : https://github.com/jjupiter

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

	    var nl = moment.defineLocale('nl', {
	        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
	        monthsShort: function monthsShort(m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
	        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
	        weekdaysMin: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD-MM-YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[vandaag om] LT',
	            nextDay: '[morgen om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[gisteren om] LT',
	            lastWeek: '[afgelopen] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'over %s',
	            past: '%s geleden',
	            s: 'een paar seconden',
	            m: 'één minuut',
	            mm: '%d minuten',
	            h: 'één uur',
	            hh: '%d uur',
	            d: 'één dag',
	            dd: '%d dagen',
	            M: 'één maand',
	            MM: '%d maanden',
	            y: 'één jaar',
	            yy: '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal: function ordinal(number) {
	            return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return nl;
	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : norwegian nynorsk (nn)
	//! author : https://github.com/mechuwind

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var nn = moment.defineLocale('nn', {
	        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
	        weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
	        weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY [kl.] H:mm',
	            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
	        },
	        calendar: {
	            sameDay: '[I dag klokka] LT',
	            nextDay: '[I morgon klokka] LT',
	            nextWeek: 'dddd [klokka] LT',
	            lastDay: '[I går klokka] LT',
	            lastWeek: '[Føregåande] dddd [klokka] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'om %s',
	            past: 'for %s sidan',
	            s: 'nokre sekund',
	            m: 'eit minutt',
	            mm: '%d minutt',
	            h: 'ein time',
	            hh: '%d timar',
	            d: 'ein dag',
	            dd: '%d dagar',
	            M: 'ein månad',
	            MM: '%d månader',
	            y: 'eit år',
	            yy: '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return nn;
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : polish (pl)
	//! author : Rafal Hirsz : https://github.com/evoL

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
	        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
	    function plural(n) {
	        return n % 10 < 5 && n % 10 > 1 && ~ ~(n / 10) % 10 !== 1;
	    }
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'm':
	                return withoutSuffix ? 'minuta' : 'minutę';
	            case 'mm':
	                return result + (plural(number) ? 'minuty' : 'minut');
	            case 'h':
	                return withoutSuffix ? 'godzina' : 'godzinę';
	            case 'hh':
	                return result + (plural(number) ? 'godziny' : 'godzin');
	            case 'MM':
	                return result + (plural(number) ? 'miesiące' : 'miesięcy');
	            case 'yy':
	                return result + (plural(number) ? 'lata' : 'lat');
	        }
	    }

	    var pl = moment.defineLocale('pl', {
	        months: function months(momentToFormat, format) {
	            if (format === '') {
	                // Hack: if format empty we know this is used to generate
	                // RegExp by moment. Give then back both valid forms of months
	                // in RegExp ready format.
	                return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
	            } else if (/D MMMM/.test(format)) {
	                return monthsSubjective[momentToFormat.month()];
	            } else {
	                return monthsNominative[momentToFormat.month()];
	            }
	        },
	        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
	        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
	        weekdaysShort: 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
	        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Dziś o] LT',
	            nextDay: '[Jutro o] LT',
	            nextWeek: '[W] dddd [o] LT',
	            lastDay: '[Wczoraj o] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[W zeszłą niedzielę o] LT';
	                    case 3:
	                        return '[W zeszłą środę o] LT';
	                    case 6:
	                        return '[W zeszłą sobotę o] LT';
	                    default:
	                        return '[W zeszły] dddd [o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: '%s temu',
	            s: 'kilka sekund',
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: '1 dzień',
	            dd: '%d dni',
	            M: 'miesiąc',
	            MM: translate,
	            y: 'rok',
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return pl;
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : portuguese (pt)
	//! author : Jefferson : https://github.com/jalex79

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var pt = moment.defineLocale('pt', {
	        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	        weekdays: 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
	        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	        weekdaysMin: 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [de] MMMM [de] YYYY',
	            LLL: 'D [de] MMMM [de] YYYY HH:mm',
	            LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function lastWeek() {
	                return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' : // Saturday + Sunday
	                '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'em %s',
	            past: 'há %s',
	            s: 'segundos',
	            m: 'um minuto',
	            mm: '%d minutos',
	            h: 'uma hora',
	            hh: '%d horas',
	            d: 'um dia',
	            dd: '%d dias',
	            M: 'um mês',
	            MM: '%d meses',
	            y: 'um ano',
	            yy: '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return pt;
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : brazilian portuguese (pt-br)
	//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var pt_br = moment.defineLocale('pt-br', {
	        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	        weekdays: 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
	        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	        weekdaysMin: 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [de] MMMM [de] YYYY',
	            LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
	            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
	        },
	        calendar: {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function lastWeek() {
	                return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' : // Saturday + Sunday
	                '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'em %s',
	            past: '%s atrás',
	            s: 'poucos segundos',
	            m: 'um minuto',
	            mm: '%d minutos',
	            h: 'uma hora',
	            hh: '%d horas',
	            d: 'um dia',
	            dd: '%d dias',
	            M: 'um mês',
	            MM: '%d meses',
	            y: 'um ano',
	            yy: '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal: '%dº'
	    });

	    return pt_br;
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : romanian (ro)
	//! author : Vlad Gurdiga : https://github.com/gurdiga
	//! author : Valentin Agachi : https://github.com/avaly

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': 'minute',
	            'hh': 'ore',
	            'dd': 'zile',
	            'MM': 'luni',
	            'yy': 'ani'
	        },
	            separator = ' ';
	        if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {
	            separator = ' de ';
	        }
	        return number + separator + format[key];
	    }

	    var ro = moment.defineLocale('ro', {
	        months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
	        monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
	        weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
	        weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
	        weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY H:mm',
	            LLLL: 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[azi la] LT',
	            nextDay: '[mâine la] LT',
	            nextWeek: 'dddd [la] LT',
	            lastDay: '[ieri la] LT',
	            lastWeek: '[fosta] dddd [la] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'peste %s',
	            past: '%s în urmă',
	            s: 'câteva secunde',
	            m: 'un minut',
	            mm: relativeTimeWithPlural,
	            h: 'o oră',
	            hh: relativeTimeWithPlural,
	            d: 'o zi',
	            dd: relativeTimeWithPlural,
	            M: 'o lună',
	            MM: relativeTimeWithPlural,
	            y: 'un an',
	            yy: relativeTimeWithPlural
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ro;
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : russian (ru)
	//! author : Viktorminator : https://github.com/Viktorminator
	//! Author : Menelion Elensúle : https://github.com/Oire

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
	            'hh': 'час_часа_часов',
	            'dd': 'день_дня_дней',
	            'MM': 'месяц_месяца_месяцев',
	            'yy': 'год_года_лет'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'минута' : 'минуту';
	        } else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	    var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

	    var ru = moment.defineLocale('ru', {
	        months: {
	            format: 'Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Августа_Сентября_Октября_Ноября_Декабря'.split('_'),
	            standalone: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_')
	        },
	        monthsShort: {
	            format: 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_'),
	            standalone: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_')
	        },
	        weekdays: {
	            standalone: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
	            format: 'Воскресенье_Понедельник_Вторник_Среду_Четверг_Пятницу_Субботу'.split('_'),
	            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
	        },
	        weekdaysShort: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
	        weekdaysMin: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
	        monthsParse: monthsParse,
	        longMonthsParse: monthsParse,
	        shortMonthsParse: monthsParse,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY г.',
	            LLL: 'D MMMM YYYY г., HH:mm',
	            LLLL: 'dddd, D MMMM YYYY г., HH:mm'
	        },
	        calendar: {
	            sameDay: '[Сегодня в] LT',
	            nextDay: '[Завтра в] LT',
	            lastDay: '[Вчера в] LT',
	            nextWeek: function nextWeek(now) {
	                if (now.week() !== this.week()) {
	                    switch (this.day()) {
	                        case 0:
	                            return '[В следующее] dddd [в] LT';
	                        case 1:
	                        case 2:
	                        case 4:
	                            return '[В следующий] dddd [в] LT';
	                        case 3:
	                        case 5:
	                        case 6:
	                            return '[В следующую] dddd [в] LT';
	                    }
	                } else {
	                    if (this.day() === 2) {
	                        return '[Во] dddd [в] LT';
	                    } else {
	                        return '[В] dddd [в] LT';
	                    }
	                }
	            },
	            lastWeek: function lastWeek(now) {
	                if (now.week() !== this.week()) {
	                    switch (this.day()) {
	                        case 0:
	                            return '[В прошлое] dddd [в] LT';
	                        case 1:
	                        case 2:
	                        case 4:
	                            return '[В прошлый] dddd [в] LT';
	                        case 3:
	                        case 5:
	                        case 6:
	                            return '[В прошлую] dddd [в] LT';
	                    }
	                } else {
	                    if (this.day() === 2) {
	                        return '[Во] dddd [в] LT';
	                    } else {
	                        return '[В] dddd [в] LT';
	                    }
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'через %s',
	            past: '%s назад',
	            s: 'несколько секунд',
	            m: relativeTimeWithPlural,
	            mm: relativeTimeWithPlural,
	            h: 'час',
	            hh: relativeTimeWithPlural,
	            d: 'день',
	            dd: relativeTimeWithPlural,
	            M: 'месяц',
	            MM: relativeTimeWithPlural,
	            y: 'год',
	            yy: relativeTimeWithPlural
	        },
	        meridiemParse: /ночи|утра|дня|вечера/i,
	        isPM: function isPM(input) {
	            return (/^(дня|вечера)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночи';
	            } else if (hour < 12) {
	                return 'утра';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечера';
	            }
	        },
	        ordinalParse: /\d{1,2}-(й|го|я)/,
	        ordinal: function ordinal(number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                    return number + '-й';
	                case 'D':
	                    return number + '-го';
	                case 'w':
	                case 'W':
	                    return number + '-я';
	                default:
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ru;
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Northern Sami (se)
	//! authors : Bård Rolstad Henriksen : https://github.com/karamell

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var se = moment.defineLocale('se', {
	        months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
	        monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
	        weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
	        weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
	        weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'MMMM D. [b.] YYYY',
	            LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
	            LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
	        },
	        calendar: {
	            sameDay: '[otne ti] LT',
	            nextDay: '[ihttin ti] LT',
	            nextWeek: 'dddd [ti] LT',
	            lastDay: '[ikte ti] LT',
	            lastWeek: '[ovddit] dddd [ti] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s geažes',
	            past: 'maŋit %s',
	            s: 'moadde sekunddat',
	            m: 'okta minuhta',
	            mm: '%d minuhtat',
	            h: 'okta diimmu',
	            hh: '%d diimmut',
	            d: 'okta beaivi',
	            dd: '%d beaivvit',
	            M: 'okta mánnu',
	            MM: '%d mánut',
	            y: 'okta jahki',
	            yy: '%d jagit'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return se;
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Sinhalese (si)
	//! author : Sampath Sitinamaluwa : https://github.com/sampathsris

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    /*jshint -W100*/
	    var si = moment.defineLocale('si', {
	        months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
	        monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
	        weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
	        weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
	        weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
	        longDateFormat: {
	            LT: 'a h:mm',
	            LTS: 'a h:mm:ss',
	            L: 'YYYY/MM/DD',
	            LL: 'YYYY MMMM D',
	            LLL: 'YYYY MMMM D, a h:mm',
	            LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
	        },
	        calendar: {
	            sameDay: '[අද] LT[ට]',
	            nextDay: '[හෙට] LT[ට]',
	            nextWeek: 'dddd LT[ට]',
	            lastDay: '[ඊයේ] LT[ට]',
	            lastWeek: '[පසුගිය] dddd LT[ට]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%sකින්',
	            past: '%sකට පෙර',
	            s: 'තත්පර කිහිපය',
	            m: 'මිනිත්තුව',
	            mm: 'මිනිත්තු %d',
	            h: 'පැය',
	            hh: 'පැය %d',
	            d: 'දිනය',
	            dd: 'දින %d',
	            M: 'මාසය',
	            MM: 'මාස %d',
	            y: 'වසර',
	            yy: 'වසර %d'
	        },
	        ordinalParse: /\d{1,2} වැනි/,
	        ordinal: function ordinal(number) {
	            return number + ' වැනි';
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'ප.ව.' : 'පස් වරු';
	            } else {
	                return isLower ? 'පෙ.ව.' : 'පෙර වරු';
	            }
	        }
	    });

	    return si;
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : slovak (sk)
	//! author : Martin Minka : https://github.com/k2s
	//! based on work of petrbela : https://github.com/petrbela

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
	        monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
	    function plural(n) {
	        return n > 1 && n < 5;
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                // a few seconds / in a few seconds / a few seconds ago
	                return withoutSuffix || isFuture ? 'pár sekúnd' : 'pár sekundami';
	            case 'm':
	                // a minute / in a minute / a minute ago
	                return withoutSuffix ? 'minúta' : isFuture ? 'minútu' : 'minútou';
	            case 'mm':
	                // 9 minutes / in 9 minutes / 9 minutes ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'minúty' : 'minút');
	                } else {
	                    return result + 'minútami';
	                }
	                break;
	            case 'h':
	                // an hour / in an hour / an hour ago
	                return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
	            case 'hh':
	                // 9 hours / in 9 hours / 9 hours ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'hodiny' : 'hodín');
	                } else {
	                    return result + 'hodinami';
	                }
	                break;
	            case 'd':
	                // a day / in a day / a day ago
	                return withoutSuffix || isFuture ? 'deň' : 'dňom';
	            case 'dd':
	                // 9 days / in 9 days / 9 days ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'dni' : 'dní');
	                } else {
	                    return result + 'dňami';
	                }
	                break;
	            case 'M':
	                // a month / in a month / a month ago
	                return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';
	            case 'MM':
	                // 9 months / in 9 months / 9 months ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'mesiace' : 'mesiacov');
	                } else {
	                    return result + 'mesiacmi';
	                }
	                break;
	            case 'y':
	                // a year / in a year / a year ago
	                return withoutSuffix || isFuture ? 'rok' : 'rokom';
	            case 'yy':
	                // 9 years / in 9 years / 9 years ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'roky' : 'rokov');
	                } else {
	                    return result + 'rokmi';
	                }
	                break;
	        }
	    }

	    var sk = moment.defineLocale('sk', {
	        months: months,
	        monthsShort: monthsShort,
	        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
	        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
	        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[dnes o] LT',
	            nextDay: '[zajtra o] LT',
	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[v nedeľu o] LT';
	                    case 1:
	                    case 2:
	                        return '[v] dddd [o] LT';
	                    case 3:
	                        return '[v stredu o] LT';
	                    case 4:
	                        return '[vo štvrtok o] LT';
	                    case 5:
	                        return '[v piatok o] LT';
	                    case 6:
	                        return '[v sobotu o] LT';
	                }
	            },
	            lastDay: '[včera o] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[minulú nedeľu o] LT';
	                    case 1:
	                    case 2:
	                        return '[minulý] dddd [o] LT';
	                    case 3:
	                        return '[minulú stredu o] LT';
	                    case 4:
	                    case 5:
	                        return '[minulý] dddd [o] LT';
	                    case 6:
	                        return '[minulú sobotu o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'pred %s',
	            s: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return sk;
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : slovenian (sl)
	//! author : Robert Sedovšek : https://github.com/sedovsek

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
	            case 'm':
	                return withoutSuffix ? 'ena minuta' : 'eno minuto';
	            case 'mm':
	                if (number === 1) {
	                    result += withoutSuffix ? 'minuta' : 'minuto';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'minute' : 'minutami';
	                } else {
	                    result += withoutSuffix || isFuture ? 'minut' : 'minutami';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'ena ura' : 'eno uro';
	            case 'hh':
	                if (number === 1) {
	                    result += withoutSuffix ? 'ura' : 'uro';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'uri' : 'urama';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'ure' : 'urami';
	                } else {
	                    result += withoutSuffix || isFuture ? 'ur' : 'urami';
	                }
	                return result;
	            case 'd':
	                return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
	            case 'dd':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'dan' : 'dnem';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
	                } else {
	                    result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
	                }
	                return result;
	            case 'M':
	                return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
	            case 'MM':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
	                } else {
	                    result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
	                }
	                return result;
	            case 'y':
	                return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
	            case 'yy':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'leto' : 'letom';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'leti' : 'letoma';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'leta' : 'leti';
	                } else {
	                    result += withoutSuffix || isFuture ? 'let' : 'leti';
	                }
	                return result;
	        }
	    }

	    var sl = moment.defineLocale('sl', {
	        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
	        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
	        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
	        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
	        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danes ob] LT',
	            nextDay: '[jutri ob] LT',

	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[v] [nedeljo] [ob] LT';
	                    case 3:
	                        return '[v] [sredo] [ob] LT';
	                    case 6:
	                        return '[v] [soboto] [ob] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[v] dddd [ob] LT';
	                }
	            },
	            lastDay: '[včeraj ob] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[prejšnjo] [nedeljo] [ob] LT';
	                    case 3:
	                        return '[prejšnjo] [sredo] [ob] LT';
	                    case 6:
	                        return '[prejšnjo] [soboto] [ob] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prejšnji] dddd [ob] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'čez %s',
	            past: 'pred %s',
	            s: processRelativeTime,
	            m: processRelativeTime,
	            mm: processRelativeTime,
	            h: processRelativeTime,
	            hh: processRelativeTime,
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return sl;
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Albanian (sq)
	//! author : Flakërim Ismani : https://github.com/flakerimi
	//! author: Menelion Elensúle: https://github.com/Oire (tests)
	//! author : Oerd Cukalla : https://github.com/oerd (fixes)

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var sq = moment.defineLocale('sq', {
	        months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
	        monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
	        weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
	        weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
	        weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
	        meridiemParse: /PD|MD/,
	        isPM: function isPM(input) {
	            return input.charAt(0) === 'M';
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            return hours < 12 ? 'PD' : 'MD';
	        },
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Sot në] LT',
	            nextDay: '[Nesër në] LT',
	            nextWeek: 'dddd [në] LT',
	            lastDay: '[Dje në] LT',
	            lastWeek: 'dddd [e kaluar në] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'në %s',
	            past: '%s më parë',
	            s: 'disa sekonda',
	            m: 'një minutë',
	            mm: '%d minuta',
	            h: 'një orë',
	            hh: '%d orë',
	            d: 'një ditë',
	            dd: '%d ditë',
	            M: 'një muaj',
	            MM: '%d muaj',
	            y: 'një vit',
	            yy: '%d vite'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return sq;
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian-latin (sr)
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var translator = {
	        words: { //Different grammatical cases
	            m: ['jedan minut', 'jedne minute'],
	            mm: ['minut', 'minute', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mesec', 'meseca', 'meseci'],
	            yy: ['godina', 'godine', 'godina']
	        },
	        correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
	            return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
	        },
	        translate: function translate(number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };

	    var sr = moment.defineLocale('sr', {
	        months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
	        monthsShort: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
	        weekdays: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
	        weekdaysShort: ['ned.', 'pon.', 'uto.', 'sre.', 'čet.', 'pet.', 'sub.'],
	        weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',
	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedelju] [u] LT';
	                    case 3:
	                        return '[u] [sredu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay: '[juče u] LT',
	            lastWeek: function lastWeek() {
	                var lastWeekDays = ['[prošle] [nedelje] [u] LT', '[prošlog] [ponedeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
	                return lastWeekDays[this.day()];
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'pre %s',
	            s: 'nekoliko sekundi',
	            m: translator.translate,
	            mm: translator.translate,
	            h: translator.translate,
	            hh: translator.translate,
	            d: 'dan',
	            dd: translator.translate,
	            M: 'mesec',
	            MM: translator.translate,
	            y: 'godinu',
	            yy: translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return sr;
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian-cyrillic (sr-cyrl)
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var translator = {
	        words: { //Different grammatical cases
	            m: ['један минут', 'једне минуте'],
	            mm: ['минут', 'минуте', 'минута'],
	            h: ['један сат', 'једног сата'],
	            hh: ['сат', 'сата', 'сати'],
	            dd: ['дан', 'дана', 'дана'],
	            MM: ['месец', 'месеца', 'месеци'],
	            yy: ['година', 'године', 'година']
	        },
	        correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
	            return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
	        },
	        translate: function translate(number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };

	    var sr_cyrl = moment.defineLocale('sr-cyrl', {
	        months: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'],
	        monthsShort: ['јан.', 'феб.', 'мар.', 'апр.', 'мај', 'јун', 'јул', 'авг.', 'сеп.', 'окт.', 'нов.', 'дец.'],
	        weekdays: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота'],
	        weekdaysShort: ['нед.', 'пон.', 'уто.', 'сре.', 'чет.', 'пет.', 'суб.'],
	        weekdaysMin: ['не', 'по', 'ут', 'ср', 'че', 'пе', 'су'],
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[данас у] LT',
	            nextDay: '[сутра у] LT',
	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[у] [недељу] [у] LT';
	                    case 3:
	                        return '[у] [среду] [у] LT';
	                    case 6:
	                        return '[у] [суботу] [у] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[у] dddd [у] LT';
	                }
	            },
	            lastDay: '[јуче у] LT',
	            lastWeek: function lastWeek() {
	                var lastWeekDays = ['[прошле] [недеље] [у] LT', '[прошлог] [понедељка] [у] LT', '[прошлог] [уторка] [у] LT', '[прошле] [среде] [у] LT', '[прошлог] [четвртка] [у] LT', '[прошлог] [петка] [у] LT', '[прошле] [суботе] [у] LT'];
	                return lastWeekDays[this.day()];
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'за %s',
	            past: 'пре %s',
	            s: 'неколико секунди',
	            m: translator.translate,
	            mm: translator.translate,
	            h: translator.translate,
	            hh: translator.translate,
	            d: 'дан',
	            dd: translator.translate,
	            M: 'месец',
	            MM: translator.translate,
	            y: 'годину',
	            yy: translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return sr_cyrl;
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : swedish (sv)
	//! author : Jens Alm : https://github.com/ulmus

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var sv = moment.defineLocale('sv', {
	        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
	        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
	        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Idag] LT',
	            nextDay: '[Imorgon] LT',
	            lastDay: '[Igår] LT',
	            nextWeek: '[På] dddd LT',
	            lastWeek: '[I] dddd[s] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'om %s',
	            past: 'för %s sedan',
	            s: 'några sekunder',
	            m: 'en minut',
	            mm: '%d minuter',
	            h: 'en timme',
	            hh: '%d timmar',
	            d: 'en dag',
	            dd: '%d dagar',
	            M: 'en månad',
	            MM: '%d månader',
	            y: 'ett år',
	            yy: '%d år'
	        },
	        ordinalParse: /\d{1,2}(e|a)/,
	        ordinal: function ordinal(number) {
	            var b = number % 10,
	                output = ~ ~(number % 100 / 10) === 1 ? 'e' : b === 1 ? 'a' : b === 2 ? 'a' : b === 3 ? 'e' : 'e';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return sv;
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : swahili (sw)
	//! author : Fahad Kassim : https://github.com/fadsel

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var sw = moment.defineLocale('sw', {
	        months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
	        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
	        weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
	        weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
	        weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[leo saa] LT',
	            nextDay: '[kesho saa] LT',
	            nextWeek: '[wiki ijayo] dddd [saat] LT',
	            lastDay: '[jana] LT',
	            lastWeek: '[wiki iliyopita] dddd [saat] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s baadaye',
	            past: 'tokea %s',
	            s: 'hivi punde',
	            m: 'dakika moja',
	            mm: 'dakika %d',
	            h: 'saa limoja',
	            hh: 'masaa %d',
	            d: 'siku moja',
	            dd: 'masiku %d',
	            M: 'mwezi mmoja',
	            MM: 'miezi %d',
	            y: 'mwaka mmoja',
	            yy: 'miaka %d'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return sw;
	});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : tamil (ta)
	//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '௧',
	        '2': '௨',
	        '3': '௩',
	        '4': '௪',
	        '5': '௫',
	        '6': '௬',
	        '7': '௭',
	        '8': '௮',
	        '9': '௯',
	        '0': '௦'
	    },
	        numberMap = {
	        '௧': '1',
	        '௨': '2',
	        '௩': '3',
	        '௪': '4',
	        '௫': '5',
	        '௬': '6',
	        '௭': '7',
	        '௮': '8',
	        '௯': '9',
	        '௦': '0'
	    };

	    var ta = moment.defineLocale('ta', {
	        months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
	        weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
	        weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, HH:mm',
	            LLLL: 'dddd, D MMMM YYYY, HH:mm'
	        },
	        calendar: {
	            sameDay: '[இன்று] LT',
	            nextDay: '[நாளை] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[நேற்று] LT',
	            lastWeek: '[கடந்த வாரம்] dddd, LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s இல்',
	            past: '%s முன்',
	            s: 'ஒரு சில விநாடிகள்',
	            m: 'ஒரு நிமிடம்',
	            mm: '%d நிமிடங்கள்',
	            h: 'ஒரு மணி நேரம்',
	            hh: '%d மணி நேரம்',
	            d: 'ஒரு நாள்',
	            dd: '%d நாட்கள்',
	            M: 'ஒரு மாதம்',
	            MM: '%d மாதங்கள்',
	            y: 'ஒரு வருடம்',
	            yy: '%d ஆண்டுகள்'
	        },
	        ordinalParse: /\d{1,2}வது/,
	        ordinal: function ordinal(number) {
	            return number + 'வது';
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // refer http://ta.wikipedia.org/s/1er1
	        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 2) {
	                return ' யாமம்';
	            } else if (hour < 6) {
	                return ' வைகறை'; // வைகறை
	            } else if (hour < 10) {
	                    return ' காலை'; // காலை
	                } else if (hour < 14) {
	                        return ' நண்பகல்'; // நண்பகல்
	                    } else if (hour < 18) {
	                            return ' எற்பாடு'; // எற்பாடு
	                        } else if (hour < 22) {
	                                return ' மாலை'; // மாலை
	                            } else {
	                                    return ' யாமம்';
	                                }
	        },
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'யாமம்') {
	                return hour < 2 ? hour : hour + 12;
	            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
	                return hour;
	            } else if (meridiem === 'நண்பகல்') {
	                return hour >= 10 ? hour : hour + 12;
	            } else {
	                return hour + 12;
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ta;
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : telugu (te)
	//! author : Krishna Chaitanya Thota : https://github.com/kcthota

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var te = moment.defineLocale('te', {
	        months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
	        monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
	        weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
	        weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
	        weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm',
	            LTS: 'A h:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm'
	        },
	        calendar: {
	            sameDay: '[నేడు] LT',
	            nextDay: '[రేపు] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[నిన్న] LT',
	            lastWeek: '[గత] dddd, LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s లో',
	            past: '%s క్రితం',
	            s: 'కొన్ని క్షణాలు',
	            m: 'ఒక నిమిషం',
	            mm: '%d నిమిషాలు',
	            h: 'ఒక గంట',
	            hh: '%d గంటలు',
	            d: 'ఒక రోజు',
	            dd: '%d రోజులు',
	            M: 'ఒక నెల',
	            MM: '%d నెలలు',
	            y: 'ఒక సంవత్సరం',
	            yy: '%d సంవత్సరాలు'
	        },
	        ordinalParse: /\d{1,2}వ/,
	        ordinal: '%dవ',
	        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'రాత్రి') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'ఉదయం') {
	                return hour;
	            } else if (meridiem === 'మధ్యాహ్నం') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'సాయంత్రం') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'రాత్రి';
	            } else if (hour < 10) {
	                return 'ఉదయం';
	            } else if (hour < 17) {
	                return 'మధ్యాహ్నం';
	            } else if (hour < 20) {
	                return 'సాయంత్రం';
	            } else {
	                return 'రాత్రి';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return te;
	});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : thai (th)
	//! author : Kridsada Thanabulpong : https://github.com/sirn

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var th = moment.defineLocale('th', {
	        months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
	        monthsShort: 'มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา'.split('_'),
	        weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
	        weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
	        weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
	        longDateFormat: {
	            LT: 'H นาฬิกา m นาที',
	            LTS: 'H นาฬิกา m นาที s วินาที',
	            L: 'YYYY/MM/DD',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY เวลา H นาฬิกา m นาที',
	            LLLL: 'วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที'
	        },
	        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
	        isPM: function isPM(input) {
	            return input === 'หลังเที่ยง';
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ก่อนเที่ยง';
	            } else {
	                return 'หลังเที่ยง';
	            }
	        },
	        calendar: {
	            sameDay: '[วันนี้ เวลา] LT',
	            nextDay: '[พรุ่งนี้ เวลา] LT',
	            nextWeek: 'dddd[หน้า เวลา] LT',
	            lastDay: '[เมื่อวานนี้ เวลา] LT',
	            lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'อีก %s',
	            past: '%sที่แล้ว',
	            s: 'ไม่กี่วินาที',
	            m: '1 นาที',
	            mm: '%d นาที',
	            h: '1 ชั่วโมง',
	            hh: '%d ชั่วโมง',
	            d: '1 วัน',
	            dd: '%d วัน',
	            M: '1 เดือน',
	            MM: '%d เดือน',
	            y: '1 ปี',
	            yy: '%d ปี'
	        }
	    });

	    return th;
	});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tagalog/Filipino (tl-ph)
	//! author : Dan Hagman

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var tl_ph = moment.defineLocale('tl-ph', {
	        months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
	        monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
	        weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
	        weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
	        weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'MM/D/YYYY',
	            LL: 'MMMM D, YYYY',
	            LLL: 'MMMM D, YYYY HH:mm',
	            LLLL: 'dddd, MMMM DD, YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Ngayon sa] LT',
	            nextDay: '[Bukas sa] LT',
	            nextWeek: 'dddd [sa] LT',
	            lastDay: '[Kahapon sa] LT',
	            lastWeek: 'dddd [huling linggo] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'sa loob ng %s',
	            past: '%s ang nakalipas',
	            s: 'ilang segundo',
	            m: 'isang minuto',
	            mm: '%d minuto',
	            h: 'isang oras',
	            hh: '%d oras',
	            d: 'isang araw',
	            dd: '%d araw',
	            M: 'isang buwan',
	            MM: '%d buwan',
	            y: 'isang taon',
	            yy: '%d taon'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal: function ordinal(number) {
	            return number;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return tl_ph;
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Klingon (tlh)
	//! author : Dominika Kruk : https://github.com/amaranthrose

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

	    function translateFuture(output) {
	        var time = output;
	        time = output.indexOf('jaj') !== -1 ? time.slice(0, -3) + 'leS' : output.indexOf('jar') !== -1 ? time.slice(0, -3) + 'waQ' : output.indexOf('DIS') !== -1 ? time.slice(0, -3) + 'nem' : time + ' pIq';
	        return time;
	    }

	    function translatePast(output) {
	        var time = output;
	        time = output.indexOf('jaj') !== -1 ? time.slice(0, -3) + 'Hu’' : output.indexOf('jar') !== -1 ? time.slice(0, -3) + 'wen' : output.indexOf('DIS') !== -1 ? time.slice(0, -3) + 'ben' : time + ' ret';
	        return time;
	    }

	    function translate(number, withoutSuffix, string, isFuture) {
	        var numberNoun = numberAsNoun(number);
	        switch (string) {
	            case 'mm':
	                return numberNoun + ' tup';
	            case 'hh':
	                return numberNoun + ' rep';
	            case 'dd':
	                return numberNoun + ' jaj';
	            case 'MM':
	                return numberNoun + ' jar';
	            case 'yy':
	                return numberNoun + ' DIS';
	        }
	    }

	    function numberAsNoun(number) {
	        var hundred = Math.floor(number % 1000 / 100),
	            ten = Math.floor(number % 100 / 10),
	            one = number % 10,
	            word = '';
	        if (hundred > 0) {
	            word += numbersNouns[hundred] + 'vatlh';
	        }
	        if (ten > 0) {
	            word += (word !== '' ? ' ' : '') + numbersNouns[ten] + 'maH';
	        }
	        if (one > 0) {
	            word += (word !== '' ? ' ' : '') + numbersNouns[one];
	        }
	        return word === '' ? 'pagh' : word;
	    }

	    var tlh = moment.defineLocale('tlh', {
	        months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
	        monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
	        weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	        weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	        weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[DaHjaj] LT',
	            nextDay: '[wa’leS] LT',
	            nextWeek: 'LLL',
	            lastDay: '[wa’Hu’] LT',
	            lastWeek: 'LLL',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: translateFuture,
	            past: translatePast,
	            s: 'puS lup',
	            m: 'wa’ tup',
	            mm: translate,
	            h: 'wa’ rep',
	            hh: translate,
	            d: 'wa’ jaj',
	            dd: translate,
	            M: 'wa’ jar',
	            MM: translate,
	            y: 'wa’ DIS',
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return tlh;
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : turkish (tr)
	//! authors : Erhan Gundogan : https://github.com/erhangundogan,
	//!           Burak Yiğit Kaya: https://github.com/BYK

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var suffixes = {
	        1: '\'inci',
	        5: '\'inci',
	        8: '\'inci',
	        70: '\'inci',
	        80: '\'inci',
	        2: '\'nci',
	        7: '\'nci',
	        20: '\'nci',
	        50: '\'nci',
	        3: '\'üncü',
	        4: '\'üncü',
	        100: '\'üncü',
	        6: '\'ncı',
	        9: '\'uncu',
	        10: '\'uncu',
	        30: '\'uncu',
	        60: '\'ıncı',
	        90: '\'ıncı'
	    };

	    var tr = moment.defineLocale('tr', {
	        months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
	        monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
	        weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
	        weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
	        weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[bugün saat] LT',
	            nextDay: '[yarın saat] LT',
	            nextWeek: '[haftaya] dddd [saat] LT',
	            lastDay: '[dün] LT',
	            lastWeek: '[geçen hafta] dddd [saat] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s sonra',
	            past: '%s önce',
	            s: 'birkaç saniye',
	            m: 'bir dakika',
	            mm: '%d dakika',
	            h: 'bir saat',
	            hh: '%d saat',
	            d: 'bir gün',
	            dd: '%d gün',
	            M: 'bir ay',
	            MM: '%d ay',
	            y: 'bir yıl',
	            yy: '%d yıl'
	        },
	        ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
	        ordinal: function ordinal(number) {
	            if (number === 0) {
	                // special case for zero
	                return number + '\'ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;
	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return tr;
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : talossan (tzl)
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v with the help of Iustì Canun

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
	    // This is currently too difficult (maybe even impossible) to add.
	    var tzl = moment.defineLocale('tzl', {
	        months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
	        monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
	        weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
	        weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
	        weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM [dallas] YYYY',
	            LLL: 'D. MMMM [dallas] YYYY HH.mm',
	            LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'd\'o' : 'D\'O';
	            } else {
	                return isLower ? 'd\'a' : 'D\'A';
	            }
	        },
	        calendar: {
	            sameDay: '[oxhi à] LT',
	            nextDay: '[demà à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[ieiri à] LT',
	            lastWeek: '[sür el] dddd [lasteu à] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'osprei %s',
	            past: 'ja%s',
	            s: processRelativeTime,
	            m: processRelativeTime,
	            mm: processRelativeTime,
	            h: processRelativeTime,
	            hh: processRelativeTime,
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            's': ['viensas secunds', '\'iensas secunds'],
	            'm': ['\'n míut', '\'iens míut'],
	            'mm': [number + ' míuts', '' + number + ' míuts'],
	            'h': ['\'n þora', '\'iensa þora'],
	            'hh': [number + ' þoras', '' + number + ' þoras'],
	            'd': ['\'n ziua', '\'iensa ziua'],
	            'dd': [number + ' ziuas', '' + number + ' ziuas'],
	            'M': ['\'n mes', '\'iens mes'],
	            'MM': [number + ' mesen', '' + number + ' mesen'],
	            'y': ['\'n ar', '\'iens ar'],
	            'yy': [number + ' ars', '' + number + ' ars']
	        };
	        return isFuture ? format[key][0] : withoutSuffix ? format[key][0] : format[key][1];
	    }

	    return tzl;
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Morocco Central Atlas Tamaziɣt (tzm)
	//! author : Abdel Said : https://github.com/abdelsaid

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var tzm = moment.defineLocale('tzm', {
	        months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
	            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
	            nextWeek: 'dddd [ⴴ] LT',
	            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
	            lastWeek: 'dddd [ⴴ] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
	            past: 'ⵢⴰⵏ %s',
	            s: 'ⵉⵎⵉⴽ',
	            m: 'ⵎⵉⵏⵓⴺ',
	            mm: '%d ⵎⵉⵏⵓⴺ',
	            h: 'ⵙⴰⵄⴰ',
	            hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
	            d: 'ⴰⵙⵙ',
	            dd: '%d oⵙⵙⴰⵏ',
	            M: 'ⴰⵢoⵓⵔ',
	            MM: '%d ⵉⵢⵢⵉⵔⵏ',
	            y: 'ⴰⵙⴳⴰⵙ',
	            yy: '%d ⵉⵙⴳⴰⵙⵏ'
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return tzm;
	});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Morocco Central Atlas Tamaziɣt in Latin (tzm-latn)
	//! author : Abdel Said : https://github.com/abdelsaid

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var tzm_latn = moment.defineLocale('tzm-latn', {
	        months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[asdkh g] LT',
	            nextDay: '[aska g] LT',
	            nextWeek: 'dddd [g] LT',
	            lastDay: '[assant g] LT',
	            lastWeek: 'dddd [g] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'dadkh s yan %s',
	            past: 'yan %s',
	            s: 'imik',
	            m: 'minuḍ',
	            mm: '%d minuḍ',
	            h: 'saɛa',
	            hh: '%d tassaɛin',
	            d: 'ass',
	            dd: '%d ossan',
	            M: 'ayowr',
	            MM: '%d iyyirn',
	            y: 'asgas',
	            yy: '%d isgasn'
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return tzm_latn;
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : ukrainian (uk)
	//! author : zemlanin : https://github.com/zemlanin
	//! Author : Menelion Elensúle : https://github.com/Oire

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
	            'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
	            'dd': 'день_дні_днів',
	            'MM': 'місяць_місяці_місяців',
	            'yy': 'рік_роки_років'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвилина' : 'хвилину';
	        } else if (key === 'h') {
	            return withoutSuffix ? 'година' : 'годину';
	        } else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
	            'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
	            'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
	        },
	            nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ? 'accusative' : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ? 'genitive' : 'nominative';
	        return weekdays[nounCase][m.day()];
	    }
	    function processHoursFunction(str) {
	        return function () {
	            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
	        };
	    }

	    var uk = moment.defineLocale('uk', {
	        months: {
	            'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
	            'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
	        },
	        monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
	        weekdays: weekdaysCaseReplace,
	        weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY р.',
	            LLL: 'D MMMM YYYY р., HH:mm',
	            LLLL: 'dddd, D MMMM YYYY р., HH:mm'
	        },
	        calendar: {
	            sameDay: processHoursFunction('[Сьогодні '),
	            nextDay: processHoursFunction('[Завтра '),
	            lastDay: processHoursFunction('[Вчора '),
	            nextWeek: processHoursFunction('[У] dddd ['),
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 5:
	                    case 6:
	                        return processHoursFunction('[Минулої] dddd [').call(this);
	                    case 1:
	                    case 2:
	                    case 4:
	                        return processHoursFunction('[Минулого] dddd [').call(this);
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'за %s',
	            past: '%s тому',
	            s: 'декілька секунд',
	            m: relativeTimeWithPlural,
	            mm: relativeTimeWithPlural,
	            h: 'годину',
	            hh: relativeTimeWithPlural,
	            d: 'день',
	            dd: relativeTimeWithPlural,
	            M: 'місяць',
	            MM: relativeTimeWithPlural,
	            y: 'рік',
	            yy: relativeTimeWithPlural
	        },
	        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
	        meridiemParse: /ночі|ранку|дня|вечора/,
	        isPM: function isPM(input) {
	            return (/^(дня|вечора)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночі';
	            } else if (hour < 12) {
	                return 'ранку';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечора';
	            }
	        },
	        ordinalParse: /\d{1,2}-(й|го)/,
	        ordinal: function ordinal(number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                case 'w':
	                case 'W':
	                    return number + '-й';
	                case 'D':
	                    return number + '-го';
	                default:
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return uk;
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : uzbek (uz)
	//! author : Sardor Muminov : https://github.com/muminoff

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var uz = moment.defineLocale('uz', {
	        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
	        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
	        weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
	        weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
	        weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'D MMMM YYYY, dddd HH:mm'
	        },
	        calendar: {
	            sameDay: '[Бугун соат] LT [да]',
	            nextDay: '[Эртага] LT [да]',
	            nextWeek: 'dddd [куни соат] LT [да]',
	            lastDay: '[Кеча соат] LT [да]',
	            lastWeek: '[Утган] dddd [куни соат] LT [да]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'Якин %s ичида',
	            past: 'Бир неча %s олдин',
	            s: 'фурсат',
	            m: 'бир дакика',
	            mm: '%d дакика',
	            h: 'бир соат',
	            hh: '%d соат',
	            d: 'бир кун',
	            dd: '%d кун',
	            M: 'бир ой',
	            MM: '%d ой',
	            y: 'бир йил',
	            yy: '%d йил'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return uz;
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : vietnamese (vi)
	//! author : Bang Nguyen : https://github.com/bangnk

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var vi = moment.defineLocale('vi', {
	        months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
	        monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
	        weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
	        weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM [năm] YYYY',
	            LLL: 'D MMMM [năm] YYYY HH:mm',
	            LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
	            l: 'DD/M/YYYY',
	            ll: 'D MMM YYYY',
	            lll: 'D MMM YYYY HH:mm',
	            llll: 'ddd, D MMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Hôm nay lúc] LT',
	            nextDay: '[Ngày mai lúc] LT',
	            nextWeek: 'dddd [tuần tới lúc] LT',
	            lastDay: '[Hôm qua lúc] LT',
	            lastWeek: 'dddd [tuần rồi lúc] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s tới',
	            past: '%s trước',
	            s: 'vài giây',
	            m: 'một phút',
	            mm: '%d phút',
	            h: 'một giờ',
	            hh: '%d giờ',
	            d: 'một ngày',
	            dd: '%d ngày',
	            M: 'một tháng',
	            MM: '%d tháng',
	            y: 'một năm',
	            yy: '%d năm'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal: function ordinal(number) {
	            return number;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return vi;
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : chinese (zh-cn)
	//! author : suupic : https://github.com/suupic
	//! author : Zeno Zeng : https://github.com/zenozeng

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var zh_cn = moment.defineLocale('zh-cn', {
	        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat: {
	            LT: 'Ah点mm分',
	            LTS: 'Ah点m分s秒',
	            L: 'YYYY-MM-DD',
	            LL: 'YYYY年MMMD日',
	            LLL: 'YYYY年MMMD日Ah点mm分',
	            LLLL: 'YYYY年MMMD日ddddAh点mm分',
	            l: 'YYYY-MM-DD',
	            ll: 'YYYY年MMMD日',
	            lll: 'YYYY年MMMD日Ah点mm分',
	            llll: 'YYYY年MMMD日ddddAh点mm分'
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            } else {
	                // '中午'
	                return hour >= 11 ? hour : hour + 12;
	            }
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar: {
	            sameDay: function sameDay() {
	                return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
	            },
	            nextDay: function nextDay() {
	                return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
	            },
	            lastDay: function lastDay() {
	                return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
	            },
	            nextWeek: function nextWeek() {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            lastWeek: function lastWeek() {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.unix() < startOfWeek.unix() ? '[上]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            sameElse: 'LL'
	        },
	        ordinalParse: /\d{1,2}(日|月|周)/,
	        ordinal: function ordinal(number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '日';
	                case 'M':
	                    return number + '月';
	                case 'w':
	                case 'W':
	                    return number + '周';
	                default:
	                    return number;
	            }
	        },
	        relativeTime: {
	            future: '%s内',
	            past: '%s前',
	            s: '几秒',
	            m: '1 分钟',
	            mm: '%d 分钟',
	            h: '1 小时',
	            hh: '%d 小时',
	            d: '1 天',
	            dd: '%d 天',
	            M: '1 个月',
	            MM: '%d 个月',
	            y: '1 年',
	            yy: '%d 年'
	        },
	        week: {
	            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return zh_cn;
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : traditional chinese (zh-tw)
	//! author : Ben : https://github.com/ben-lin

	'use strict';

	;(function (global, factory) {
	     true ? factory(__webpack_require__(16)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var zh_tw = moment.defineLocale('zh-tw', {
	        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat: {
	            LT: 'Ah點mm分',
	            LTS: 'Ah點m分s秒',
	            L: 'YYYY年MMMD日',
	            LL: 'YYYY年MMMD日',
	            LLL: 'YYYY年MMMD日Ah點mm分',
	            LLLL: 'YYYY年MMMD日ddddAh點mm分',
	            l: 'YYYY年MMMD日',
	            ll: 'YYYY年MMMD日',
	            lll: 'YYYY年MMMD日Ah點mm分',
	            llll: 'YYYY年MMMD日ddddAh點mm分'
	        },
	        meridiemParse: /早上|上午|中午|下午|晚上/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '中午') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar: {
	            sameDay: '[今天]LT',
	            nextDay: '[明天]LT',
	            nextWeek: '[下]ddddLT',
	            lastDay: '[昨天]LT',
	            lastWeek: '[上]ddddLT',
	            sameElse: 'L'
	        },
	        ordinalParse: /\d{1,2}(日|月|週)/,
	        ordinal: function ordinal(number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '日';
	                case 'M':
	                    return number + '月';
	                case 'w':
	                case 'W':
	                    return number + '週';
	                default:
	                    return number;
	            }
	        },
	        relativeTime: {
	            future: '%s內',
	            past: '%s前',
	            s: '幾秒',
	            m: '一分鐘',
	            mm: '%d分鐘',
	            h: '一小時',
	            hh: '%d小時',
	            d: '一天',
	            dd: '%d天',
	            M: '一個月',
	            MM: '%d個月',
	            y: '一年',
	            yy: '%d年'
	        }
	    });

	    return zh_tw;
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(15);

	var _Navbar = __webpack_require__(116);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Footer = __webpack_require__(117);

	var _Footer2 = _interopRequireDefault(_Footer);

	var App = _react2['default'].createClass({
		displayName: 'App',

		render: function render() {
			return _react2['default'].createElement(
				'div',
				{ id: 'blog' },
				_react2['default'].createElement(_Navbar2['default'], null),
				_react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(_reactRouter.RouteHandler, null)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	});

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(15);

	var Navbar = _react2['default'].createClass({
		displayName: 'Navbar',

		getInitialState: function getInitialState() {
			return {
				hash: 'home'
			};
		},
		activeTab: function activeTab(evt) {
			this.setState({ hash: location.hash.match(/\w+/)[0] });
			// let target = evt.target;
			// if(target.nodeName === 'A') {
			// 	let liEle = target.parentNode;
			// 	Array.prototype.slice.call(liEle.parentNode.childNodes).map(l => l.className = '');
			// 	liEle.className = 'active';
			// }
		},
		componentDidMount: function componentDidMount() {
			var hash = location.hash.match(/\w+/) ? location.hash.match(/\w+/) : 'home';
			this.setState({ hash: hash });
		},
		render: function render() {
			var hash = this.state.hash;
			return _react2['default'].createElement(
				'nav',
				{ className: 'navbar navbar-inverse navbar-fixed-top' },
				_react2['default'].createElement(
					'div',
					{ className: 'container-fluid' },
					_react2['default'].createElement(
						'div',
						{ className: 'navbar-header' },
						_react2['default'].createElement(
							_reactRouter.Link,
							{ className: 'navbar-brand', to: '/' },
							'Ryn·Smile'
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
						_react2['default'].createElement(
							'ul',
							{ className: 'nav navbar-nav', onClick: this.activeTab },
							_react2['default'].createElement(
								'li',
								{ className: hash === 'home' ? "active" : "" },
								_react2['default'].createElement(
									_reactRouter.Link,
									{ to: '/home' },
									'Home'
								)
							),
							_react2['default'].createElement(
								'li',
								{ className: hash === 'article' ? "active" : "" },
								_react2['default'].createElement(
									_reactRouter.Link,
									{ to: '/article' },
									'Article'
								)
							),
							_react2['default'].createElement(
								'li',
								{ className: hash === 'gallery' ? "active" : "" },
								_react2['default'].createElement(
									_reactRouter.Link,
									{ to: '/gallery' },
									'Gallery'
								)
							)
						),
						_react2['default'].createElement(
							'ul',
							{ className: 'nav navbar-nav navbar-right' },
							_react2['default'].createElement(
								'li',
								{ className: hash === 'about' ? "active" : "", onClick: this.activeTab },
								_react2['default'].createElement(
									_reactRouter.Link,
									{ to: '/about' },
									'About Me'
								)
							)
						)
					)
				)
			);
		}
	});

	exports['default'] = Navbar;
	module.exports = exports['default'];
	/*<li className={hash === 'codeBlock' ? "active" : ""}><Link to="/codeBlock">Code Block</Link></li>*/ /*<li className="dropdown">
	                                                                                                      		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
	                                                                                                      		<ul className="dropdown-menu">
	                                                                                                       			<li><a href="#">Action</a></li>
	                                                                                                       			<li><a href="#">Another action</a></li>
	                                                                                                       			<li><a href="#">Something else here</a></li>
	                                                                                                       			<li role="separator" className="divider"></li>
	                                                                                                       			<li><a href="#">Separated link</a></li>
	                                                                                                      		</ul>
	                                                                                                      </li>*/

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var Footer = _react2["default"].createClass({
		displayName: "Footer",

		render: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "footer" },
				_react2["default"].createElement(
					"p",
					{ className: "text-center" },
					"Ryn Blog  copyright 2015/12/23"
				)
			);
		}
	});

	exports["default"] = Footer;
	module.exports = exports["default"];
	/*<p className="text-center">Email: yuzhongzi91@sina.com</p>*/

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(16);

	var _moment2 = _interopRequireDefault(_moment);

	var SetIntervalMixin = {
		componentWillMount: function componentWillMount() {
			this.intervals = [];
		},
		setInterval: (function (_setInterval) {
			function setInterval() {
				return _setInterval.apply(this, arguments);
			}

			setInterval.toString = function () {
				return _setInterval.toString();
			};

			return setInterval;
		})(function () {
			this.intervals.push(setInterval.apply(null, arguments));
		}),
		componentWillUnmount: function componentWillUnmount() {
			this.intervals.map(clearInterval);
		}
	};

	var Home = _react2['default'].createClass({
		displayName: 'Home',

		mixins: [SetIntervalMixin],
		getInitialState: function getInitialState() {
			return {
				time: (0, _moment2['default'])(),
				picLoad: false
			};
		},
		componentDidMount: function componentDidMount() {
			var _this = this;

			this.setInterval(function () {
				_this.setState({ time: (0, _moment2['default'])() });
			}, 1000);

			// load high quality bg
			// replace indistinct pic
			var hideImg = this.refs.hideImg.getDOMNode();
			hideImg.onload = function () {
				_this.setState({ picLoad: true });
			};
		},
		render: function render() {
			var time = this.state.time.format('HH:mm:ss') || '',
			    detail = (0, _moment2['default'])().format("YYYY/MMMM/Do/dddd"),
			    picLoad = this.state.picLoad;

			var bgStyle = picLoad ? { backgroundImage: 'url(./src/images/bg-03.jpg)' } : {};
			return _react2['default'].createElement(
				'div',
				{ className: 'home' },
				_react2['default'].createElement(
					'div',
					{ className: 'home-page1 text-center', style: bgStyle },
					_react2['default'].createElement(
						'p',
						{ className: 'time text-center' },
						time
					),
					_react2['default'].createElement(
						'p',
						{ className: 'time-detail text-center' },
						detail
					),
					_react2['default'].createElement(
						'div',
						{ className: 'jumbotron' },
						_react2['default'].createElement(
							'h1',
							null,
							'Ryn·Smile'
						),
						_react2['default'].createElement(
							'p',
							null,
							'做一个自在的人'
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'more text-center' },
						_react2['default'].createElement(
							'a',
							{ href: '#/' },
							'More'
						)
					),
					_react2['default'].createElement('img', { src: './src/images/bg-03.jpg', alt: 'hideImg', style: { display: "none" }, ref: 'hideImg' })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'home-page2' },
					_react2['default'].createElement(
						'div',
						{ className: 'honeycomb clearfix' },
						_react2['default'].createElement(
							'div',
							{ className: 'hex hex-gap', style: { backgroundImage: 'url(./src/images/honeycomb/2.jpg)' } },
							_react2['default'].createElement('div', { className: 'corner1' }),
							_react2['default'].createElement('div', { className: 'corner2' }),
							_react2['default'].createElement('a', { href: '#/gallery' })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'hex', style: { backgroundImage: 'url(./src/images/honeycomb/3.jpg)' } },
							_react2['default'].createElement('a', { href: '#/gallery' }),
							_react2['default'].createElement('div', { className: 'corner1' }),
							_react2['default'].createElement('div', { className: 'corner2' })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'hex', style: { backgroundImage: 'url(./src/images/honeycomb/4.jpg)' } },
							_react2['default'].createElement('a', { href: '#/gallery' }),
							_react2['default'].createElement('div', { className: 'corner1' }),
							_react2['default'].createElement('div', { className: 'corner2' })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'hex', style: { backgroundImage: 'url(./src/images/honeycomb/5.jpg)' } },
							_react2['default'].createElement('a', { href: '#/gallery' }),
							_react2['default'].createElement('div', { className: 'corner1' }),
							_react2['default'].createElement('div', { className: 'corner2' })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'hex', style: { backgroundImage: 'url(./src/images/honeycomb/6.jpg)' } },
							_react2['default'].createElement('a', { href: '#/gallery' }),
							_react2['default'].createElement('div', { className: 'corner1' }),
							_react2['default'].createElement('div', { className: 'corner2' })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'hex', style: { backgroundImage: 'url(./src/images/honeycomb/7.jpg)' } },
							_react2['default'].createElement('a', { href: '#/gallery' }),
							_react2['default'].createElement('div', { className: 'corner1' }),
							_react2['default'].createElement('div', { className: 'corner2' })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'hex', style: { backgroundImage: 'url(./src/images/honeycomb/8.jpg)' } },
							_react2['default'].createElement('a', { href: '#/gallery' }),
							_react2['default'].createElement('div', { className: 'corner1' }),
							_react2['default'].createElement('div', { className: 'corner2' })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'hex', style: { backgroundImage: 'url(./src/images/honeycomb/9.jpg)' } },
							_react2['default'].createElement('a', { href: '#/gallery' }),
							_react2['default'].createElement('div', { className: 'corner1' }),
							_react2['default'].createElement('div', { className: 'corner2' })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'hex', style: { backgroundImage: 'url(./src/images/honeycomb/10.jpg)' } },
							_react2['default'].createElement('a', { href: '#/gallery' }),
							_react2['default'].createElement('div', { className: 'corner1' }),
							_react2['default'].createElement('div', { className: 'corner2' })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'hex hex-gap', style: { backgroundImage: 'url(./src/images/honeycomb/5.jpg)' } },
							_react2['default'].createElement('a', { href: '#/gallery' }),
							_react2['default'].createElement('div', { className: 'corner1' }),
							_react2['default'].createElement('div', { className: 'corner2' })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'hex', style: { backgroundImage: 'url(./src/images/honeycomb/12.jpg)' } },
							_react2['default'].createElement('a', { href: '#/gallery' }),
							_react2['default'].createElement('div', { className: 'corner1' }),
							_react2['default'].createElement('div', { className: 'corner2' })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'hex', style: { backgroundImage: 'url(./src/images/honeycomb/2.jpg)' } },
							_react2['default'].createElement('a', { href: '#/gallery' }),
							_react2['default'].createElement('div', { className: 'corner1' }),
							_react2['default'].createElement('div', { className: 'corner2' })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'hex', style: { backgroundImage: 'url(./src/images/honeycomb/7.jpg)' } },
							_react2['default'].createElement('a', { href: '#/gallery' }),
							_react2['default'].createElement('div', { className: 'corner1' }),
							_react2['default'].createElement('div', { className: 'corner2' })
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'home-page3' },
					_react2['default'].createElement(
						'div',
						{ className: 'timeline clearfix' },
						_react2['default'].createElement('div', { className: 'divideLine' }),
						_react2['default'].createElement(
							'div',
							{ className: 'left pull-left' },
							_react2['default'].createElement(
								'div',
								{ className: 'sub-time' },
								_react2['default'].createElement('span', { className: 'dot-outer' }),
								_react2['default'].createElement('span', { className: 'dot-inner' }),
								_react2['default'].createElement(
									'div',
									{ className: 'time-date' },
									_react2['default'].createElement('span', { className: 'arrow' }),
									_react2['default'].createElement(
										'span',
										{ className: 'date' },
										'2015-12-15'
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'time-content' },
									_react2['default'].createElement(
										'p',
										{ className: 'title' },
										'我的第一篇文章'
									),
									_react2['default'].createElement(
										'p',
										{ className: 'author' },
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-user', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'Ryn'
											)
										),
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-magnet', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'Article'
											)
										),
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-comment', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'6 Comments'
											)
										)
									),
									_react2['default'].createElement(
										'p',
										{ className: 'content' },
										'在那山的那边，海的那边有一群蓝精灵'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'sub-time' },
								_react2['default'].createElement('span', { className: 'dot-outer' }),
								_react2['default'].createElement('span', { className: 'dot-inner' }),
								_react2['default'].createElement(
									'div',
									{ className: 'time-date' },
									_react2['default'].createElement('span', { className: 'arrow' }),
									_react2['default'].createElement(
										'span',
										{ className: 'date' },
										'2015-12-15'
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'time-content' },
									_react2['default'].createElement(
										'p',
										{ className: 'title' },
										'我的第一篇文章'
									),
									_react2['default'].createElement(
										'p',
										{ className: 'author' },
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-user', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'Ryn'
											)
										),
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-magnet', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'Article'
											)
										),
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-comment', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'6 Comments'
											)
										)
									),
									_react2['default'].createElement(
										'p',
										{ className: 'content' },
										'在那山的那边，海的那边有一群蓝精灵'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'sub-time' },
								_react2['default'].createElement('span', { className: 'dot-outer' }),
								_react2['default'].createElement('span', { className: 'dot-inner' }),
								_react2['default'].createElement(
									'div',
									{ className: 'time-date' },
									_react2['default'].createElement('span', { className: 'arrow' }),
									_react2['default'].createElement(
										'span',
										{ className: 'date' },
										'2015-12-15'
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'time-content' },
									_react2['default'].createElement(
										'p',
										{ className: 'title' },
										'我的第一篇文章'
									),
									_react2['default'].createElement(
										'p',
										{ className: 'author' },
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-user', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'Ryn'
											)
										),
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-magnet', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'Article'
											)
										),
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-comment', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'6 Comments'
											)
										)
									),
									_react2['default'].createElement(
										'p',
										{ className: 'content' },
										'在那山的那边，海的那边有一群蓝精灵'
									)
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'right pull-right' },
							_react2['default'].createElement(
								'div',
								{ className: 'sub-time' },
								_react2['default'].createElement('span', { className: 'dot-outer' }),
								_react2['default'].createElement('span', { className: 'dot-inner' }),
								_react2['default'].createElement(
									'div',
									{ className: 'time-date' },
									_react2['default'].createElement('span', { className: 'arrow' }),
									_react2['default'].createElement(
										'span',
										{ className: 'date' },
										'2015-12-15'
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'time-content' },
									_react2['default'].createElement(
										'p',
										{ className: 'title' },
										'我的第一篇文章'
									),
									_react2['default'].createElement(
										'p',
										{ className: 'author' },
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-user', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'Ryn'
											)
										),
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-magnet', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'Article'
											)
										),
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-comment', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'6 Comments'
											)
										)
									),
									_react2['default'].createElement(
										'p',
										{ className: 'content' },
										'在那山的那边，海的那边有一群蓝精灵'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'sub-time timeline-left' },
								_react2['default'].createElement('span', { className: 'dot-outer' }),
								_react2['default'].createElement('span', { className: 'dot-inner' }),
								_react2['default'].createElement(
									'div',
									{ className: 'time-date' },
									_react2['default'].createElement('span', { className: 'arrow' }),
									_react2['default'].createElement(
										'span',
										{ className: 'date' },
										'2015-12-15'
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'time-content' },
									_react2['default'].createElement(
										'p',
										{ className: 'title' },
										'我的第一篇文章'
									),
									_react2['default'].createElement(
										'p',
										{ className: 'author' },
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-user', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'Ryn'
											)
										),
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-magnet', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'Article'
											)
										),
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-comment', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'6 Comments'
											)
										)
									),
									_react2['default'].createElement(
										'p',
										{ className: 'content' },
										'在那山的那边，海的那边有一群蓝精灵'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'sub-time timeline-left' },
								_react2['default'].createElement('span', { className: 'dot-outer' }),
								_react2['default'].createElement('span', { className: 'dot-inner' }),
								_react2['default'].createElement(
									'div',
									{ className: 'time-date' },
									_react2['default'].createElement('span', { className: 'arrow' }),
									_react2['default'].createElement(
										'span',
										{ className: 'date' },
										'2015-12-15'
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'time-content' },
									_react2['default'].createElement(
										'p',
										{ className: 'title' },
										'我的第一篇文章'
									),
									_react2['default'].createElement(
										'p',
										{ className: 'author' },
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-user', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'Ryn'
											)
										),
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-magnet', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'Article'
											)
										),
										_react2['default'].createElement(
											'span',
											null,
											_react2['default'].createElement('span', { className: 'glyphicon glyphicon-comment', 'aria-hidden': 'true' }),
											_react2['default'].createElement(
												'a',
												{ href: '#' },
												'6 Comments'
											)
										)
									),
									_react2['default'].createElement(
										'p',
										{ className: 'content' },
										'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nemo ipsum laboriosam harum eaque molestiae id ex, vitae esse earum. Dicta amet distinctio ea, aspernatur eos nobis, illum id natus!'
									)
								)
							)
						)
					)
				)
			);
		}
	});

	exports['default'] = Home;
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var Article = _react2['default'].createClass({
		displayName: 'Article',

		getInitialState: function getInitialState() {
			return {
				picLoad: false
			};
		},
		componentDidMount: function componentDidMount() {
			var _this = this;

			// load high quality bg
			// replace indistinct pic
			var hideImg = this.refs.hideImg.getDOMNode();
			hideImg.onload = function () {
				_this.setState({ picLoad: true });
			};
		},
		render: function render() {
			var bgStyle = this.state.picLoad ? { backgroundImage: 'url(./src/images/bg-11.jpg)' } : {};
			return _react2['default'].createElement(
				'div',
				{ className: 'article', style: bgStyle },
				_react2['default'].createElement('img', { src: './src/images/bg-11.jpg', alt: 'hideImg', style: { display: "none" }, ref: 'hideImg' }),
				_react2['default'].createElement(
					'div',
					{ className: 'article-wrapper center-block clearfix' },
					_react2['default'].createElement(
						'div',
						{ className: 'article-detail pull-left' },
						_react2['default'].createElement(
							'h2',
							null,
							'Article List'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'a-list' },
							_react2['default'].createElement(
								'h3',
								null,
								'title1'
							),
							_react2['default'].createElement(
								'p',
								null,
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error vel dolorum distinctio! Veritatis molestias itaque iste reprehenderit quod, eum omnis rerum sequi! Eveniet maiores aperiam cupiditate qui nulla iusto molestias.'
							),
							_react2['default'].createElement(
								'p',
								null,
								'随笔'
							),
							_react2['default'].createElement(
								'p',
								{ className: 'a-time text-right' },
								'2015-12-16'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'a-list' },
							_react2['default'].createElement(
								'h3',
								null,
								'title2'
							),
							_react2['default'].createElement(
								'p',
								null,
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae necessitatibus accusamus possimus inventore accusantium, excepturi deleniti consequatur voluptatibus optio, animi non mollitia amet explicabo porro quos, enim quam eius sunt.'
							),
							_react2['default'].createElement(
								'p',
								null,
								'散文'
							),
							_react2['default'].createElement(
								'p',
								{ className: 'a-time text-right' },
								'2015-12-16'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'a-list' },
							_react2['default'].createElement(
								'h3',
								null,
								'title3'
							),
							_react2['default'].createElement(
								'p',
								null,
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sunt veritatis, illum explicabo. Dolorem fugiat minima alias dolor fuga qui, iusto aspernatur totam possimus assumenda, sit est porro quam perspiciatis!'
							),
							_react2['default'].createElement(
								'p',
								null,
								'心情'
							),
							_react2['default'].createElement(
								'p',
								{ className: 'a-time text-right' },
								'2015-12-16'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'a-list' },
							_react2['default'].createElement(
								'h3',
								null,
								'title4'
							),
							_react2['default'].createElement(
								'p',
								null,
								'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'a-list' },
							_react2['default'].createElement(
								'h3',
								null,
								'title5'
							),
							_react2['default'].createElement(
								'p',
								null,
								'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'a-list' },
							_react2['default'].createElement(
								'h3',
								null,
								'title5'
							),
							_react2['default'].createElement(
								'p',
								null,
								'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'a-list' },
							_react2['default'].createElement(
								'h3',
								null,
								'title5'
							),
							_react2['default'].createElement(
								'p',
								null,
								'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'a-list' },
							_react2['default'].createElement(
								'h3',
								null,
								'title5'
							),
							_react2['default'].createElement(
								'p',
								null,
								'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.'
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'article-search pull-left' },
						_react2['default'].createElement(
							'div',
							{ className: 'search' },
							_react2['default'].createElement('input', { type: 'text', placeholder: 'search' }),
							_react2['default'].createElement(
								'button',
								{ className: 's-btn' },
								_react2['default'].createElement('span', { className: 'glyphicon glyphicon-search' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'ca-list type' },
							_react2['default'].createElement(
								'h4',
								null,
								'文章分类'
							),
							_react2['default'].createElement(
								'ul',
								{ className: 'type-list' },
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'生活(984)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'随笔(12)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'散文(32)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'心情(2)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'代码撸区(45)'
									)
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'ca-list date' },
							_react2['default'].createElement(
								'h4',
								null,
								'发布时间'
							),
							_react2['default'].createElement(
								'ul',
								{ className: 'type-list' },
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'2015年4月(984)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'2015年5月(12)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'2015年6月(32)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'2015年7月(2)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'2015年8月(45)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'2015年9月(45)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'2015年10月(45)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'2015年11月(45)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'2015年12月(45)'
									)
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'ca-list date' },
							_react2['default'].createElement(
								'h4',
								null,
								'最新发布'
							),
							_react2['default'].createElement(
								'ul',
								{ className: 'type-list' },
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'最新发布1(45)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'最新发布2(12)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'最新发布3(32)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'最新发布4(2)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'最新发布5(45)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'最新发布8(45)'
									)
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'a',
										{ href: '' },
										'最新发布9(45)'
									)
								)
							)
						)
					)
				)
			);
		}
	});

	exports['default'] = Article;
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	// import Flickity from 'flickity';

	var jsonData = [{
		"title": "Portraits",
		"items": [{
			"image": "./src/images/gallery/type1/1.jpg",
			"title": "Hoodie stumptown kitsch",
			"date": "05/05/2015",
			"camera": "Canon PowerShot S95",
			"focal": 22.5,
			"aperture": 5.6,
			"exposureTime": "1/1000",
			"iso": 80
		}, {
			"image": "./src/images/gallery/type1/2.jpg",
			"title": "Hoodie stumptown kitsch",
			"date": "05/05/2015",
			"camera": "Canon PowerShot S95",
			"focal": 22.5,
			"aperture": 5.6,
			"exposureTime": "1/1000",
			"iso": 80
		}, {
			"image": "./src/images/gallery/type1/3.jpg",
			"title": "Hoodie stumptown kitsch",
			"date": "05/05/2015",
			"camera": "Canon PowerShot S95",
			"focal": 22.5,
			"aperture": 5.6,
			"exposureTime": "1/1000",
			"iso": 80
		}]
	}, {
		"title": "Landscape",
		"items": [{
			"image": "./src/images/gallery/type3/1.jpg",
			"title": "Hoodie stumptown kitsch",
			"date": "05/05/2015",
			"camera": "Canon PowerShot S95",
			"focal": 22.5,
			"aperture": 5.6,
			"exposureTime": "1/1000",
			"iso": 80
		}, {
			"image": "./src/images/gallery/type3/2.jpg",
			"title": "Hoodie stumptown kitsch",
			"date": "05/05/2015",
			"camera": "Canon PowerShot S95",
			"focal": 22.5,
			"aperture": 5.6,
			"exposureTime": "1/1000",
			"iso": 80
		}]
	}, {
		"title": "Games",
		"items": [{
			"image": "./src/images/gallery/type2/1.jpg",
			"title": "Hoodie stumptown kitsch",
			"date": "05/05/2015",
			"camera": "Canon PowerShot S95",
			"focal": 22.5,
			"aperture": 5.6,
			"exposureTime": "1/1000",
			"iso": 80
		}, {
			"image": "./src/images/gallery/type2/2.jpg",
			"title": "Hoodie stumptown kitsch",
			"date": "05/05/2015",
			"camera": "Canon PowerShot S95",
			"focal": 22.5,
			"aperture": 5.6,
			"exposureTime": "1/1000",
			"iso": 80
		}]
	}, {
		"title": "Lifes",
		"items": [{
			"image": "./src/images/gallery/type4/1.jpg",
			"title": "Hoodie stumptown kitsch",
			"date": "05/05/2015",
			"camera": "Canon PowerShot S95",
			"focal": 22.5,
			"aperture": 5.6,
			"exposureTime": "1/1000",
			"iso": 80
		}, {
			"image": "./src/images/gallery/type4/2.jpg",
			"title": "Hoodie stumptown kitsch",
			"date": "05/05/2015",
			"camera": "Canon PowerShot S95",
			"focal": 22.5,
			"aperture": 5.6,
			"exposureTime": "1/1000",
			"iso": 80
		}]
	}];

	var ToolsMixins = {
		onEndTransition: function onEndTransition(el, callback) {
			var _this = this;

			var transEndEventNames = { 'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend' },
			    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
			    support = { transitions: Modernizr.csstransitions },
			    onEndCallbackFn = function onEndCallbackFn(ev) {
				if (support.transitions) {
					// if( ev.target != this ) return;
					ev.target.removeEventListener(transEndEventName, onEndCallbackFn);
				}
				if (callback && typeof callback === 'function') {
					callback.call(_this);
				}
			};

			if (support.transitions) {
				el.addEventListener(transEndEventName, onEndCallbackFn);
			} else {
				onEndCallbackFn();
			}
		},
		scrollY: function scrollY() {
			return window.pageYOffset || window.document.documentElement.scrollTop;
		},
		throttle: function throttle(fn, delay) {
			var allowSample = true;

			return function (e) {
				if (allowSample) {
					allowSample = false;
					setTimeout(function () {
						allowSample = true;
					}, delay);
					fn(e);
				}
			};
		}
	};

	var Gallery = _react2["default"].createClass({
		displayName: "Gallery",

		mixins: [ToolsMixins],
		getInitialState: function getInitialState() {
			return {
				gallery: jsonData,
				canOpen: false,
				canMoveHeroImage: true
			};
		},
		componentDidMount: function componentDidMount() {
			var _this2 = this;

			var bodyEl = document.body || document.documentElement,
			    galleryEl = this.refs.gallery.getDOMNode(),
			    imghero = document.querySelector('.hero__back--mover'),
			    slider = document.querySelector('.stack-slider'),
			    stacksWrapper = slider.querySelector('.stacks-wrapper'),
			    flkty = undefined,
			    win = { width: window.innerWidth, height: window.innerHeight };

			flkty = new Flickity(stacksWrapper, {
				wrapAround: true,
				imagesLoaded: true,
				initialIndex: 0,
				setGallerySize: false,
				pageDots: false,
				prevNextButtons: false
			});

			// loading images...
			imagesLoaded(stacksWrapper, function () {
				classie.add(bodyEl, 'view-init');
			});

			this.setState({ flkty: flkty, canOpen: true, canMoveHeroImage: true, win: win }, function () {
				// Flickity events:
				var canOpen = _this2.state.canOpen,
				    canMoveHeroImage = _this2.state.canMoveHeroImage,
				    win = _this2.state.win;

				window.addEventListener('mousemove', _this2.throttle(function (ev) {
					if (!canMoveHeroImage) return false;
					var xVal = -1 / (win.height / 2) * ev.clientY + 1,
					    yVal = 1 / (win.width / 2) * ev.clientX - 1,
					    transX = 20 / win.width * ev.clientX - 10,
					    transY = 20 / win.height * ev.clientY - 10,
					    transZ = 100 / win.height * ev.clientY - 50;

					imghero.style.WebkitTransform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)';
					imghero.style.transform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)';
				}, 100));

				// window resize
				window.addEventListener('resize', _this2.throttle(function (ev) {
					var selectedStackEle = _this2.refs['stack' + flkty.selectedIndex].getDOMNode(),
					    win = _this2.state.win;

					// recalculate window width/height
					win.width = window.innerWidth;
					win.height = window.innerHeight;

					// reset body height if stack is opened
					if (classie.has(bodyEl, 'view-full')) {
						// stack is opened
						galleryEl.style.height = selectedStackEle.offsetHeight + 'px';
					}

					_this2.setState({ win: win });
				}, 50));

				flkty.on('cellSelect', function () {
					canOpen = false;
					classie.remove(bodyEl, 'item-clickable');

					var prevStack = stacksWrapper.querySelector('.stack-prev'),
					    nextStack = stacksWrapper.querySelector('.stack-next'),
					    selidx = flkty.selectedIndex,
					    cellsCount = flkty.cells.length,
					    previdx = selidx > 0 ? selidx - 1 : cellsCount - 1,
					    nextidx = selidx < cellsCount - 1 ? selidx + 1 : 0,
					    prevStackEle = _this2.refs['stack' + previdx].getDOMNode(),
					    nextStackEle = _this2.refs['stack' + nextidx].getDOMNode();

					if (prevStack) {
						classie.remove(prevStack, 'stack-prev');
					}
					if (nextStack) {
						classie.remove(nextStack, 'stack-next');
					}

					classie.add(prevStackEle, 'stack-prev');
					classie.add(nextStackEle, 'stack-next');
				});

				flkty.on('dragStart', function () {
					canOpen = false;
					classie.remove(bodyEl, 'item-clickable');
				});

				flkty.on('settle', function () {
					classie.add(bodyEl, 'item-clickable');
					canOpen = true;
				});

				_this2.setState({ canOpen: canOpen });
				// 设置滚动条高度,51为导航高度
				bodyEl.scrollTop = 51;
			});
		},
		slideUp: function slideUp(idx, ev) {
			var _this3 = this;

			ev.preventDefault();
			var bodyEl = document.body,
			    galleryEl = this.refs.gallery.getDOMNode(),
			    docElem = window.document.documentElement,
			    slider = document.querySelector('.stack-slider'),
			    stacksWrapper = slider.querySelector('.stacks-wrapper'),
			    stacks = [].slice.call(stacksWrapper.children),
			    canMoveHeroImage = this.state.canMoveHeroImage,
			    flkty = this.state.flkty,
			    stack = this.refs["stack" + idx].getDOMNode(),
			    canOpen = this.state.canOpen;

			if (classie.has(stack, 'is-selected')) {
				// current stack
				if (classie.has(bodyEl, 'view-full')) {
					// stack is opened
					var closeStack = function closeStack() {
						classie.remove(bodyEl, 'move-items');

						_this3.onEndTransition(slider, function () {
							classie.remove(bodyEl, 'view-full');
							galleryEl.style.height = '';
							flkty.bindDrag();
							flkty.options.accessibility = true;
							canMoveHeroImage = true;
						});
					};

					// if the user scrolled down,
					// let's first scroll all up before closing the stack.
					var scrolled = this.scrollY();
					if (scrolled > 0) {
						closeStack();
						// smooth_scroll_to(isFirefox ? docElem : bodyEl || docElem, 0, 500).then(function() {
						// 		closeStack();
						// });
					} else {
							closeStack();
						}
				} else if (canOpen) {
					// stack is closed
					classie.add(bodyEl, 'view-full');
					setTimeout(function () {
						classie.add(bodyEl, 'move-items');
					}, 25);
					galleryEl.style.height = stack.offsetHeight + 'px';
					flkty.unbindDrag();
					flkty.options.accessibility = false;
					canMoveHeroImage = false;
				} else if (classie.has(stack, 'stack-prev')) {
					flkty.previous(true);
				} else if (classie.has(stack, 'stack-next')) {
					flkty.next(true);
				}

				this.setState({ canMoveHeroImage: canMoveHeroImage, flkty: flkty });
				bodyEl.scrollTop = 51;
			}
		},
		render: function render() {
			var _this4 = this;

			var gallery = this.state.gallery || [],
			    stackCnt = undefined;

			stackCnt = gallery.map(function (g, i) {
				var h2 = _react2["default"].createElement(
					"h2",
					{ className: "stack-title", onClick: _this4.slideUp.bind(_this4, i) },
					_react2["default"].createElement(
						"a",
						{ href: "javascript:;", "data-text": g.title },
						_react2["default"].createElement(
							"span",
							null,
							g.title
						)
					)
				),
				    items = g.items,
				    item = undefined;
				item = items.map(function (t) {
					return _react2["default"].createElement(
						"div",
						{ className: "item" },
						_react2["default"].createElement(
							"div",
							{ className: "item__content" },
							_react2["default"].createElement("img", { src: t.image, alt: "img01" }),
							_react2["default"].createElement(
								"h3",
								{ className: "item__title" },
								t.title,
								" ",
								_react2["default"].createElement(
									"span",
									{ className: "item__date" },
									t.date
								)
							),
							_react2["default"].createElement(
								"div",
								{ className: "item__details" },
								_react2["default"].createElement(
									"ul",
									null,
									_react2["default"].createElement(
										"li",
										null,
										_react2["default"].createElement("i", { className: "glyphicon glyphicon-camera" }),
										_react2["default"].createElement(
											"span",
											null,
											t.camera
										)
									),
									_react2["default"].createElement(
										"li",
										null,
										_react2["default"].createElement("i", { className: "glyphicon glyphicon-eye-open" }),
										_react2["default"].createElement(
											"span",
											null,
											t.focal,
											"mm"
										)
									),
									_react2["default"].createElement(
										"li",
										null,
										_react2["default"].createElement("i", { className: "glyphicon glyphicon-asterisk" }),
										_react2["default"].createElement(
											"span",
											null,
											"ƒ/",
											t.aperture
										)
									),
									_react2["default"].createElement(
										"li",
										null,
										_react2["default"].createElement("i", { className: "glyphicon glyphicon-flash" }),
										_react2["default"].createElement(
											"span",
											null,
											t.exposureTime
										)
									),
									_react2["default"].createElement(
										"li",
										null,
										_react2["default"].createElement("i", { className: "glyphicon glyphicon-apple" }),
										_react2["default"].createElement(
											"span",
											null,
											t.iso
										)
									)
								)
							)
						)
					);
				});
				return _react2["default"].createElement(
					"div",
					{ ref: "stack" + i, className: "stack" },
					h2,
					item
				);
			});

			return _react2["default"].createElement(
				"div",
				{ ref: "gallery", className: "gallery" },
				_react2["default"].createElement(
					"div",
					{ className: "hero" },
					_react2["default"].createElement("div", { className: "hero__back hero__back--static" }),
					_react2["default"].createElement("div", { className: "hero__back hero__back--mover" }),
					_react2["default"].createElement("div", { className: "hero__front" })
				),
				_react2["default"].createElement(
					"div",
					{ className: "stack-slider" },
					_react2["default"].createElement(
						"div",
						{ className: "stacks-wrapper" },
						stackCnt
					)
				)
			);
		}
	});

	exports["default"] = Gallery;
	module.exports = exports["default"];

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var CodeBlock = _react2["default"].createClass({
		displayName: "CodeBlock",

		render: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "codeBlock" },
				_react2["default"].createElement(
					"h1",
					null,
					"CodeBlock"
				)
			);
		}
	});

	exports["default"] = CodeBlock;
	module.exports = exports["default"];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var SetIntervalMixin = {
		componentWillMount: function componentWillMount() {
			this.intervals = [];
		},
		setInterval: (function (_setInterval) {
			function setInterval() {
				return _setInterval.apply(this, arguments);
			}

			setInterval.toString = function () {
				return _setInterval.toString();
			};

			return setInterval;
		})(function () {
			this.intervals.push(setInterval.apply(null, arguments));
		}),
		componentWillUnmount: function componentWillUnmount() {
			this.intervals.map(clearInterval);
		}
	};

	var About = _react2['default'].createClass({
		displayName: 'About',

		mixins: [SetIntervalMixin],
		getDefaultProps: function getDefaultProps() {
			return {
				breifRowHeight: 319
			};
		},
		getInitialState: function getInitialState() {
			return {
				literatureAnimation: true,
				cartoonAnimation: false,
				calligraphyAnimation: false,
				drawingAnimation: false,
				gameAnimation: false,
				musicAnimation: false
			};
		},
		componentDidMount: function componentDidMount() {
			var bodyEl = document.body || document.documentElement,
			    literatureTop = this.refs.literature.getDOMNode().offsetTop,
			    cartoonTop = this.refs.cartoon.getDOMNode().offsetTop,
			    calligraphyTop = this.refs.calligraphy.getDOMNode().offsetTop,
			    drawingTop = this.refs.drawing.getDOMNode().offsetTop,
			    gameTop = this.refs.game.getDOMNode().offsetTop,
			    musicTop = this.refs.music.getDOMNode().offsetTop,
			    breifRowHeight = this.props.breifRowHeight / 2,
			    literatureAnimation = this.state.literatureAnimation,
			    cartoonAnimation = this.state.cartoonAnimation,
			    calligraphyAnimation = this.state.calligraphyAnimation,
			    drawingAnimation = this.state.drawingAnimation,
			    gameAnimation = this.state.gameAnimation,
			    musicAnimation = this.state.musicAnimation;

			window.addEventListener('scroll', function (ev) {
				var bodyTop = bodyEl.scrollTop;
				// console.log(bodyTop, literatureTop, cartoonTop, calligraphyTop, drawingTop, gameTop, musicTop);
				if (bodyTop > literatureTop - breifRowHeight && bodyTop < literatureTop) {
					literatureAnimation = true;
					cartoonAnimation = calligraphyAnimation = drawingAnimation = gameAnimation = musicAnimation = false;
				} else if (bodyTop > cartoonTop - breifRowHeight && bodyTop < cartoonTop) {
					cartoonAnimation = true;
					literatureAnimation = calligraphyAnimation = drawingAnimation = gameAnimation = musicAnimation = false;
				} else if (bodyTop > calligraphyTop - breifRowHeight && bodyTop < calligraphyTop) {
					calligraphyAnimation = true;
					literatureAnimation = cartoonAnimation = drawingAnimation = gameAnimation = musicAnimation = false;
				} else if (bodyTop > drawingTop - breifRowHeight && bodyTop < drawingTop) {
					drawingAnimation = true;
					literatureAnimation = calligraphyAnimation = cartoonAnimation = gameAnimation = musicAnimation = false;
				} else if (bodyTop > gameTop - breifRowHeight && bodyTop < gameTop) {
					gameAnimation = true;
					literatureAnimation = calligraphyAnimation = drawingAnimation = cartoonAnimation = musicAnimation = false;
				} else if (bodyTop > musicTop - breifRowHeight && bodyTop < musicTop) {
					musicAnimation = true;
					literatureAnimation = calligraphyAnimation = drawingAnimation = gameAnimation = cartoonAnimation = false;
				}
				console.log(literatureAnimation, cartoonAnimation, calligraphyAnimation, drawingAnimation, gameAnimation, musicAnimation);
			});
		},
		backToTop: function backToTop() {
			var bodyEl = document.body || document.documentElement,
			    scrollTop = bodyEl.scrollTop,
			    delta = scrollTop / 60;
			this.setInterval(function () {
				if (scrollTop > 0) {
					scrollTop -= delta;
					bodyEl.scrollTop = scrollTop;
				} else {
					scrollTop = 0;
				}
			}, 1000 / 60);
		},
		render: function render() {
			return _react2['default'].createElement(
				'div',
				{ ref: 'about', className: 'about' },
				_react2['default'].createElement(
					'div',
					{ className: 'container' },
					_react2['default'].createElement(
						'div',
						{ className: 'row' },
						_react2['default'].createElement(
							'div',
							{ className: 'portrait clearfix' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-md-10 col-xs-12' },
								_react2['default'].createElement(
									'h2',
									null,
									'Ryn·smile'
								),
								_react2['default'].createElement(
									'h3',
									null,
									'我所要的自由，仅此而已'
								),
								_react2['default'].createElement(
									'p',
									null,
									'我只是一个善良、单纯，没有歪脑筋的孩子。我不会恶意中伤，我有时拖泥带水。我喜欢睡觉、喜欢音乐、喜欢绘画、喜欢自由。我是游戏发烧友，我是技术钻研狂，我热爱我的亲人，我信任我的朋友，我很执着。我很懒，我其实只想做我自己。。。'
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'col-md-2 col-xs-12' },
								_react2['default'].createElement(
									'a',
									{ href: 'javascript:void(0);', className: 'thumbnail' },
									_react2['default'].createElement('img', { src: './src/images/honeycomb/11.jpg', alt: 'photo' })
								)
							)
						),
						_react2['default'].createElement('hr', null),
						_react2['default'].createElement(
							'div',
							{ className: 'hobby' },
							_react2['default'].createElement(
								'h3',
								null,
								'我的爱好'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'brief' },
							_react2['default'].createElement(
								'div',
								{ ref: 'literature', className: 'literature brief-normal' },
								_react2['default'].createElement(
									'h4',
									null,
									'文字控'
								),
								_react2['default'].createElement(
									'div',
									{ className: 'literature-1 brief-row clearfix' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-3' },
										_react2['default'].createElement('img', { src: './src/images/about/literature/literature1.jpg', alt: '', width: '260', height: '240' })
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-9' },
										_react2['default'].createElement(
											'h3',
											null,
											'Lorem'
										),
										_react2['default'].createElement(
											'h4',
											null,
											'Lorem ipsum dolor.'
										),
										_react2['default'].createElement(
											'p',
											null,
											'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit.'
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'literature-2 brief-row clearfix' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-3' },
										_react2['default'].createElement('img', { src: './src/images/about/literature/literature2.jpg', alt: '', width: '260', height: '240' })
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-9' },
										_react2['default'].createElement(
											'h3',
											null,
											'Labore'
										),
										_react2['default'].createElement(
											'h4',
											null,
											'Labore minima aperiam.'
										),
										_react2['default'].createElement(
											'p',
											null,
											'Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
										)
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ ref: 'cartoon', className: 'cartoon brief-normal' },
								_react2['default'].createElement(
									'h4',
									null,
									'Cartoon'
								),
								_react2['default'].createElement(
									'div',
									{ className: 'cartoon-1 brief-row clearfix' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-3' },
										_react2['default'].createElement('img', { src: './src/images/about/cartoon/cartoon1.jpg', alt: '', width: '260', height: '240' })
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-9' },
										_react2['default'].createElement(
											'h3',
											null,
											'Lorem'
										),
										_react2['default'].createElement(
											'h4',
											null,
											'Lorem ipsum dolor.'
										),
										_react2['default'].createElement(
											'p',
											null,
											'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit.'
										)
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ ref: 'calligraphy', className: 'calligraphy brief-normal' },
								_react2['default'].createElement(
									'h4',
									null,
									'Calligraphy'
								),
								_react2['default'].createElement(
									'div',
									{ className: 'calligraphy-1 brief-row clearfix' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-3' },
										_react2['default'].createElement('img', { src: './src/images/about/calligraphy/calligraphy1.jpg', alt: '', width: '260', height: '240' })
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-9' },
										_react2['default'].createElement(
											'h3',
											null,
											'Lorem'
										),
										_react2['default'].createElement(
											'h4',
											null,
											'Lorem ipsum dolor.'
										),
										_react2['default'].createElement(
											'p',
											null,
											'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit.'
										)
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ ref: 'drawing', className: 'drawing brief-normal' },
								_react2['default'].createElement(
									'h4',
									null,
									'Drawing'
								),
								_react2['default'].createElement(
									'div',
									{ className: 'drawing-1 brief-row clearfix' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-3' },
										_react2['default'].createElement('img', { src: './src/images/about/drawing/drawing1.jpg', alt: '', width: '260', height: '240' })
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-9' },
										_react2['default'].createElement(
											'h3',
											null,
											'Lorem'
										),
										_react2['default'].createElement(
											'h4',
											null,
											'Lorem ipsum dolor.'
										),
										_react2['default'].createElement(
											'p',
											null,
											'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit.'
										)
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ ref: 'game', className: 'game brief-normal' },
								_react2['default'].createElement(
									'h4',
									null,
									'Game'
								),
								_react2['default'].createElement(
									'div',
									{ className: 'game-1 brief-row clearfix' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-3' },
										_react2['default'].createElement('img', { src: './src/images/about/game/game1.jpg', alt: '', width: '260', height: '240' })
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-9' },
										_react2['default'].createElement(
											'h3',
											null,
											'Lorem'
										),
										_react2['default'].createElement(
											'h4',
											null,
											'Lorem ipsum dolor.'
										),
										_react2['default'].createElement(
											'p',
											null,
											'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit.'
										)
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ ref: 'music', className: 'music brief-normal', style: { marginBottom: '40px' } },
								_react2['default'].createElement(
									'h4',
									null,
									'Music'
								),
								_react2['default'].createElement(
									'div',
									{ className: 'music-1 brief-row clearfix' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-3' },
										_react2['default'].createElement('img', { src: './src/images/about/music/music1.jpg', alt: '', width: '260', height: '240' })
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-md-9' },
										_react2['default'].createElement(
											'h3',
											null,
											'Lorem'
										),
										_react2['default'].createElement(
											'h4',
											null,
											'Lorem ipsum dolor.'
										),
										_react2['default'].createElement(
											'p',
											null,
											'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit.'
										)
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'backToTop' },
								_react2['default'].createElement(
									'a',
									{ href: 'javascript:;', onClick: this.backToTop },
									_react2['default'].createElement('span', { className: 'glyphicon glyphicon-menu-up' }),
									_react2['default'].createElement(
										'span',
										{ className: 'toTop' },
										'回到顶部'
									)
								)
							)
						)
					)
				)
			);
		}
	});

	exports['default'] = About;
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(15);

	var NotFound = _react2['default'].createClass({
		displayName: 'NotFound',

		render: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'blog' },
				_react2['default'].createElement(
					'div',
					{ className: 'container' },
					_react2['default'].createElement(
						'div',
						{ className: 'jumbotron' },
						_react2['default'].createElement(
							'h1',
							null,
							'404 Not Found!'
						),
						_react2['default'].createElement(
							'p',
							null,
							'你找的页面可能已经不存在了哦！去主页逛逛吧...'
						),
						_react2['default'].createElement(
							'p',
							null,
							_react2['default'].createElement(
								_reactRouter.Link,
								{ className: 'btn btn-link btn-lg', to: '/', role: 'button' },
								'Go Home>>'
							)
						)
					)
				)
			);
		}
	});

	exports['default'] = NotFound;
	module.exports = exports['default'];

/***/ }
]);