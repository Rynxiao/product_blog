import React from 'react';

const Article = React.createClass({
	getInitialState() {
		return {
			picLoad : false
		};
	},
	componentDidMount() {
		// load high quality bg 
		// replace indistinct pic
		let hideImg = this.refs.hideImg.getDOMNode();
		hideImg.onload = () => {
			this.setState({picLoad : true});
		}
	},
	render() {
		let bgStyle = this.state.picLoad ? {backgroundImage : 'url(./src/images/bg-11.jpg)'} : {};
		return (
			<div className="article" style={bgStyle}>
				<img src="./src/images/bg-11.jpg" alt="hideImg" style={{display : "none"}} ref='hideImg'/>
				<div className="article-wrapper center-block clearfix">
					<div className="article-detail pull-left">
						<h2>Article List</h2>
						<div className="a-list">
							<h3>title1</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error vel dolorum distinctio! Veritatis molestias itaque iste reprehenderit quod, eum omnis rerum sequi! Eveniet maiores aperiam cupiditate qui nulla iusto molestias.</p>
							<p>随笔</p>
							<p className="a-time text-right">2015-12-16</p>
						</div>
						<div className="a-list">
							<h3>title2</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae necessitatibus accusamus possimus inventore accusantium, excepturi deleniti consequatur voluptatibus optio, animi non mollitia amet explicabo porro quos, enim quam eius sunt.</p>
							<p>散文</p>
							<p className="a-time text-right">2015-12-16</p>
						</div>
						<div className="a-list">
							<h3>title3</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sunt veritatis, illum explicabo. Dolorem fugiat minima alias dolor fuga qui, iusto aspernatur totam possimus assumenda, sit est porro quam perspiciatis!</p>
							<p>心情</p>
							<p className="a-time text-right">2015-12-16</p>
						</div>
						<div className="a-list">
							<h3>title4</h3>
							<p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
						</div>
						<div className="a-list">
							<h3>title5</h3>
							<p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.</p>
						</div>
						<div className="a-list">
							<h3>title5</h3>
							<p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.</p>
						</div>
						<div className="a-list">
							<h3>title5</h3>
							<p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.</p>
						</div>
						<div className="a-list">
							<h3>title5</h3>
							<p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.</p>
						</div>
					</div>
					<div className="article-search pull-left">
						<div className="search">
							<input type="text" placeholder="search"/>
							<button className="s-btn"><span className="glyphicon glyphicon-search"></span></button>
						</div>
						<div className="ca-list type">
							<h4>文章分类</h4>
							<ul className="type-list">
								<li><a href="">生活(984)</a></li>
								<li><a href="">随笔(12)</a></li>
								<li><a href="">散文(32)</a></li>
								<li><a href="">心情(2)</a></li>
								<li><a href="">代码撸区(45)</a></li>
							</ul>
						</div>
						<div className="ca-list date">
							<h4>发布时间</h4>
							<ul className="type-list">
								<li><a href="">2015年4月(984)</a></li>
								<li><a href="">2015年5月(12)</a></li>
								<li><a href="">2015年6月(32)</a></li>
								<li><a href="">2015年7月(2)</a></li>
								<li><a href="">2015年8月(45)</a></li>
								<li><a href="">2015年9月(45)</a></li>
								<li><a href="">2015年10月(45)</a></li>
								<li><a href="">2015年11月(45)</a></li>
								<li><a href="">2015年12月(45)</a></li>
							</ul>
						</div>
						<div className="ca-list date">
							<h4>最新发布</h4>
							<ul className="type-list">
								<li><a href="">最新发布1(45)</a></li>
								<li><a href="">最新发布2(12)</a></li>
								<li><a href="">最新发布3(32)</a></li>
								<li><a href="">最新发布4(2)</a></li>
								<li><a href="">最新发布5(45)</a></li>
								<li><a href="">最新发布8(45)</a></li>
								<li><a href="">最新发布9(45)</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default Article;