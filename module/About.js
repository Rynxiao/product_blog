import React from 'react';

const SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  }
};

const About = React.createClass({
	mixins: [SetIntervalMixin], 
	getDefaultProps() {
		return {
			breifRowHeight : 319
		};
	},
	getInitialState() {
		return {
			literatureAnimation : true,
			cartoonAnimation : false,
			calligraphyAnimation : false,
			drawingAnimation : false,
			gameAnimation : false,
			musicAnimation : false
		};
	},
	componentDidMount() {
		let bodyEl = document.body || document.documentElement,
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

		window.addEventListener('scroll', (ev) => {
			let bodyTop = bodyEl.scrollTop;
			// console.log(bodyTop, literatureTop, cartoonTop, calligraphyTop, drawingTop, gameTop, musicTop);
			if(bodyTop > literatureTop - breifRowHeight && bodyTop < literatureTop) {
				literatureAnimation = true;
				cartoonAnimation = calligraphyAnimation = drawingAnimation
				 = gameAnimation = musicAnimation = false;
			} else if(bodyTop > cartoonTop - breifRowHeight  && bodyTop < cartoonTop) {
				cartoonAnimation = true;
				literatureAnimation = calligraphyAnimation = drawingAnimation
				 = gameAnimation = musicAnimation = false;
			} else if(bodyTop > calligraphyTop - breifRowHeight && bodyTop < calligraphyTop) {
				calligraphyAnimation = true;
				literatureAnimation = cartoonAnimation = drawingAnimation
				 = gameAnimation = musicAnimation = false;
			} else if(bodyTop > drawingTop - breifRowHeight && bodyTop < drawingTop) {
				drawingAnimation = true;
				literatureAnimation = calligraphyAnimation = cartoonAnimation
				 = gameAnimation = musicAnimation = false;
			} else if(bodyTop > gameTop - breifRowHeight && bodyTop < gameTop) {
				gameAnimation = true;
				literatureAnimation = calligraphyAnimation = drawingAnimation
				 = cartoonAnimation = musicAnimation = false;
			} else if(bodyTop > musicTop - breifRowHeight && bodyTop < musicTop) {
				musicAnimation = true;
				literatureAnimation = calligraphyAnimation = drawingAnimation
				 = gameAnimation = cartoonAnimation = false;
			}
			console.log(literatureAnimation, cartoonAnimation, calligraphyAnimation, drawingAnimation, gameAnimation, musicAnimation);
		});
	},
	backToTop() {
		let bodyEl = document.body || document.documentElement,
			scrollTop = bodyEl.scrollTop,
			delta = scrollTop / 60;
		this.setInterval(() => {
			if(scrollTop > 0) {
				scrollTop -= delta
				bodyEl.scrollTop = scrollTop;
			} else {
				scrollTop = 0;
			}
		}, 1000 / 60); 
	},
	render() {
		return (
			<div ref="about" className="about">
				<div className="container">
					<div className="row">
						<div className="portrait clearfix">
						  	<div className="col-md-10 col-xs-12">
						  		<h2>Ryn·smile</h2>
						  		<h3>我所要的自由，仅此而已</h3>
						  		<p>我只是一个善良、单纯，没有歪脑筋的孩子。我不会恶意中伤，我有时拖泥带水。我喜欢睡觉、喜欢音乐、喜欢绘画、喜欢自由。我是游戏发烧友，我是技术钻研狂，我热爱我的亲人，我信任我的朋友，我很执着。我很懒，我其实只想做我自己。。。</p>
						  	</div>
					  		<div className="col-md-2 col-xs-12">
					  		    <a href="javascript:void(0);" className="thumbnail">
					  		      	<img src="./src/images/honeycomb/11.jpg" alt="photo" />
					  		    </a>
					  	  	</div>
						</div>
						<hr/>
						<div className="hobby">
							<h3>我的爱好</h3>
						</div>
						<div className="brief">
							<div ref="literature" className="literature brief-normal">
								<h4>文字控</h4>
								<div className="literature-1 brief-row clearfix">
									<div className="col-md-3">
										<img src="./src/images/about/literature/literature1.jpg" alt="" width="260" height="240"/>
									</div>
									<div className="col-md-9">
										<h3>Lorem</h3>
										<h4>Lorem ipsum dolor.</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit.</p>
									</div>
								</div>
								<div className="literature-2 brief-row clearfix">
									<div className="col-md-3">
										<img src="./src/images/about/literature/literature2.jpg" alt="" width="260" height="240"/>
									</div>
									<div className="col-md-9">
										<h3>Labore</h3>
										<h4>Labore minima aperiam.</h4>
										<p>Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
									</div>
								</div>
							</div>
							<div ref="cartoon" className="cartoon brief-normal">
								<h4>Cartoon</h4>
								<div className="cartoon-1 brief-row clearfix">
									<div className="col-md-3">
										<img src="./src/images/about/cartoon/cartoon1.jpg" alt="" width="260" height="240"/>
									</div>
									<div className="col-md-9">
										<h3>Lorem</h3>
										<h4>Lorem ipsum dolor.</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit.</p>
									</div>
								</div>
							</div>
							<div ref="calligraphy" className="calligraphy brief-normal">
								<h4>Calligraphy</h4>
								<div className="calligraphy-1 brief-row clearfix">
									<div className="col-md-3">
										<img src="./src/images/about/calligraphy/calligraphy1.jpg" alt="" width="260" height="240"/>
									</div>
									<div className="col-md-9">
										<h3>Lorem</h3>
										<h4>Lorem ipsum dolor.</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit.</p>
									</div>
								</div>
							</div>
							<div ref="drawing" className="drawing brief-normal">
								<h4>Drawing</h4>
								<div className="drawing-1 brief-row clearfix">
									<div className="col-md-3">
										<img src="./src/images/about/drawing/drawing1.jpg" alt="" width="260" height="240"/>
									</div>
									<div className="col-md-9">
										<h3>Lorem</h3>
										<h4>Lorem ipsum dolor.</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit.</p>
									</div>
								</div>
							</div>
							<div ref="game" className="game brief-normal">
								<h4>Game</h4>
								<div className="game-1 brief-row clearfix">
									<div className="col-md-3">
										<img src="./src/images/about/game/game1.jpg" alt="" width="260" height="240"/>
									</div>
									<div className="col-md-9">
										<h3>Lorem</h3>
										<h4>Lorem ipsum dolor.</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit.</p>
									</div>
								</div>
							</div>
							<div ref="music" className="music brief-normal" style={{marginBottom : '40px'}}>
								<h4>Music</h4>
								<div className="music-1 brief-row clearfix">
									<div className="col-md-3">
										<img src="./src/images/about/music/music1.jpg" alt="" width="260" height="240"/>
									</div>
									<div className="col-md-9">
										<h3>Lorem</h3>
										<h4>Lorem ipsum dolor.</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima, aperiam fugiat ex reprehenderit repellendus nobis, voluptates, fuga dicta eveniet qui laudantium numquam modi sed consequuntur dolorum nam, ut velit.</p>
									</div>
								</div>
							</div>
							<div className="backToTop">
								<a href="javascript:;" onClick={this.backToTop}>
									<span className="glyphicon glyphicon-menu-up"></span>
									<span className="toTop">回到顶部</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
	
export default About;