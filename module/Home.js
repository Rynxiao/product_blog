import React from 'react';
import moment from 'moment';

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

const Home = React.createClass({
 	mixins: [SetIntervalMixin], 
	getInitialState() {
		return {
			time : moment(),
			picLoad : false
		};
	},
	componentDidMount() {
		this.setInterval(() => {
			this.setState({time : moment()});
		}, 1000); 

		// load high quality bg 
		// replace indistinct pic
		let hideImg = this.refs.hideImg.getDOMNode();
		hideImg.onload = () => {
			this.setState({picLoad : true});
		}
	},
	render() {
		let time = this.state.time.format('HH:mm:ss') || '',
			detail = moment().format("YYYY/MMMM/Do/dddd"),
			picLoad = this.state.picLoad;

		let bgStyle = picLoad ? {backgroundImage : 'url(./src/images/bg-03.jpg)'} : {};
		return (
			<div className="home">
				<div className="home-page1 text-center" style={bgStyle}>
					<p className="time text-center">{time}</p>
					<p className="time-detail text-center">{detail}</p>
					<div className="jumbotron">
						<h1>Ryn·Smile</h1>
						<p>做一个自在的人</p>
					</div>
					<div className="more text-center">
						<a href="#/">More</a>
					</div>
					<img src="./src/images/bg-03.jpg" alt="hideImg" style={{display : "none"}} ref='hideImg'/>
				</div>
				<div className="home-page2">
					<div className="honeycomb clearfix">
						<div className="hex hex-gap" style={{backgroundImage : 'url(./src/images/honeycomb/2.jpg)'}}>
							<div className="corner1"></div>
							<div className="corner2"></div>
							<a href="#/gallery"></a>
						</div>
						<div className="hex" style={{backgroundImage : 'url(./src/images/honeycomb/3.jpg)'}}>
							<a href="#/gallery"></a>
							<div className="corner1"></div>
							<div className="corner2"></div>
						</div>
						<div className="hex" style={{backgroundImage : 'url(./src/images/honeycomb/4.jpg)'}}>
							<a href="#/gallery"></a>
							<div className="corner1"></div>
							<div className="corner2"></div>
						</div>
						<div className="hex" style={{backgroundImage : 'url(./src/images/honeycomb/5.jpg)'}}>
							<a href="#/gallery"></a>
							<div className="corner1"></div>
							<div className="corner2"></div>
						</div>
						<div className="hex" style={{backgroundImage : 'url(./src/images/honeycomb/6.jpg)'}}>
							<a href="#/gallery"></a>
							<div className="corner1"></div>
							<div className="corner2"></div>
						</div>
						<div className="hex" style={{backgroundImage : 'url(./src/images/honeycomb/7.jpg)'}}>
							<a href="#/gallery"></a>
							<div className="corner1"></div>
							<div className="corner2"></div>
						</div>
						<div className="hex" style={{backgroundImage : 'url(./src/images/honeycomb/8.jpg)'}}>
							<a href="#/gallery"></a>
							<div className="corner1"></div>
							<div className="corner2"></div>
						</div>
						<div className="hex" style={{backgroundImage : 'url(./src/images/honeycomb/9.jpg)'}}>
							<a href="#/gallery"></a>
							<div className="corner1"></div>
							<div className="corner2"></div>
						</div>
						<div className="hex" style={{backgroundImage : 'url(./src/images/honeycomb/10.jpg)'}}>
							<a href="#/gallery"></a>
							<div className="corner1"></div>
							<div className="corner2"></div>
						</div>
						<div className="hex hex-gap" style={{backgroundImage : 'url(./src/images/honeycomb/5.jpg)'}}>
							<a href="#/gallery"></a>
							<div className="corner1"></div>
							<div className="corner2"></div>
						</div>
						<div className="hex" style={{backgroundImage : 'url(./src/images/honeycomb/12.jpg)'}}>
							<a href="#/gallery"></a>
							<div className="corner1"></div>
							<div className="corner2"></div>
						</div>
						<div className="hex" style={{backgroundImage : 'url(./src/images/honeycomb/2.jpg)'}}>
							<a href="#/gallery"></a>
							<div className="corner1"></div>
							<div className="corner2"></div>
						</div>
						<div className="hex" style={{backgroundImage : 'url(./src/images/honeycomb/7.jpg)'}}>
							<a href="#/gallery"></a>
							<div className="corner1"></div>
							<div className="corner2"></div>
						</div>
					</div>
				</div>
				<div className="home-page3">
					<div className="timeline clearfix">
						<div className="divideLine"></div>
						<div className="left pull-left">
							<div className="sub-time">
								<span className="dot-outer"></span>
								<span className="dot-inner"></span>
								<div className="time-date">
									<span className="arrow"></span>
									<span className="date">2015-12-15</span>
								</div>
								<div className="time-content">
									<p className="title">我的第一篇文章</p>
									<p className="author">
										<span>
											<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
											<a href="#">Ryn</a>
										</span>
										<span>
											<span className="glyphicon glyphicon-magnet" aria-hidden="true"></span>
											<a href="#">Article</a>
										</span>
										<span>
											<span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
											<a href="#">6 Comments</a>
										</span>
									</p>
									<p className="content">在那山的那边，海的那边有一群蓝精灵</p>
								</div>
							</div>
							<div className="sub-time">
								<span className="dot-outer"></span>
								<span className="dot-inner"></span>
								<div className="time-date">
									<span className="arrow"></span>
									<span className="date">2015-12-15</span>
								</div>
								<div className="time-content">
									<p className="title">我的第一篇文章</p>
									<p className="author">
										<span>
											<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
											<a href="#">Ryn</a>
										</span>
										<span>
											<span className="glyphicon glyphicon-magnet" aria-hidden="true"></span>
											<a href="#">Article</a>
										</span>
										<span>
											<span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
											<a href="#">6 Comments</a>
										</span>
									</p>
									<p className="content">在那山的那边，海的那边有一群蓝精灵</p>
								</div>
							</div>
							<div className="sub-time">
								<span className="dot-outer"></span>
								<span className="dot-inner"></span>
								<div className="time-date">
									<span className="arrow"></span>
									<span className="date">2015-12-15</span>
								</div>
								<div className="time-content">
									<p className="title">我的第一篇文章</p>
									<p className="author">
										<span>
											<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
											<a href="#">Ryn</a>
										</span>
										<span>
											<span className="glyphicon glyphicon-magnet" aria-hidden="true"></span>
											<a href="#">Article</a>
										</span>
										<span>
											<span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
											<a href="#">6 Comments</a>
										</span>
									</p>
									<p className="content">在那山的那边，海的那边有一群蓝精灵</p>
								</div>
							</div>
						</div>
						<div className="right pull-right">
							<div className="sub-time">
								<span className="dot-outer"></span>
								<span className="dot-inner"></span>
								<div className="time-date">
									<span className="arrow"></span>
									<span className="date">2015-12-15</span>
								</div>
								<div className="time-content">
									<p className="title">我的第一篇文章</p>
									<p className="author">
										<span>
											<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
											<a href="#">Ryn</a>
										</span>
										<span>
											<span className="glyphicon glyphicon-magnet" aria-hidden="true"></span>
											<a href="#">Article</a>
										</span>
										<span>
											<span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
											<a href="#">6 Comments</a>
										</span>
									</p>
									<p className="content">在那山的那边，海的那边有一群蓝精灵</p>
								</div>
							</div>
							<div className="sub-time timeline-left">
								<span className="dot-outer"></span>
								<span className="dot-inner"></span>
								<div className="time-date">
									<span className="arrow"></span>
									<span className="date">2015-12-15</span>
								</div>
								<div className="time-content">
									<p className="title">我的第一篇文章</p>
									<p className="author">
										<span>
											<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
											<a href="#">Ryn</a>
										</span>
										<span>
											<span className="glyphicon glyphicon-magnet" aria-hidden="true"></span>
											<a href="#">Article</a>
										</span>
										<span>
											<span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
											<a href="#">6 Comments</a>
										</span>
									</p>
									<p className="content">在那山的那边，海的那边有一群蓝精灵</p>
								</div>
							</div>
							<div className="sub-time timeline-left">
								<span className="dot-outer"></span>
								<span className="dot-inner"></span>
								<div className="time-date">
									<span className="arrow"></span>
									<span className="date">2015-12-15</span>
								</div>
								<div className="time-content">
									<p className="title">我的第一篇文章</p>
									<p className="author">
										<span>
											<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
											<a href="#">Ryn</a>
										</span>
										<span>
											<span className="glyphicon glyphicon-magnet" aria-hidden="true"></span>
											<a href="#">Article</a>
										</span>
										<span>
											<span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
											<a href="#">6 Comments</a>
										</span>
									</p>
									<p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nemo ipsum laboriosam harum eaque molestiae id ex, vitae esse earum. Dicta amet distinctio ea, aspernatur eos nobis, illum id natus!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default Home;