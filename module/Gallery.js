import React from 'react';
// import Flickity from 'flickity';

const jsonData = [
	{
		"title" : "Portraits", 
		"items" : [
			{
				"image" : "./src/images/gallery/type1/1.jpg",
				"title" : "Hoodie stumptown kitsch",
				"date" : "05/05/2015",
				"camera" : "Canon PowerShot S95",
				"focal" : 22.5,
				"aperture" : 5.6,
				"exposureTime" : "1/1000",
				"iso" : 80
			},
			{
				"image" : "./src/images/gallery/type1/2.jpg",
				"title" : "Hoodie stumptown kitsch",
				"date" : "05/05/2015",
				"camera" : "Canon PowerShot S95",
				"focal" : 22.5,
				"aperture" : 5.6,
				"exposureTime" : "1/1000",
				"iso" : 80
			},
			{
				"image" : "./src/images/gallery/type1/3.jpg",
				"title" : "Hoodie stumptown kitsch",
				"date" : "05/05/2015",
				"camera" : "Canon PowerShot S95",
				"focal" : 22.5,
				"aperture" : 5.6,
				"exposureTime" : "1/1000",
				"iso" : 80
			}

		]
	},
	{
		"title" : "Landscape", 
		"items" : [
			{
				"image" : "./src/images/gallery/type3/1.jpg", 
				"title" : "Hoodie stumptown kitsch",
				"date" : "05/05/2015",
				"camera" : "Canon PowerShot S95",
				"focal" : 22.5,
				"aperture" : 5.6,
				"exposureTime" : "1/1000",
				"iso" : 80
			},
			{
				"image" : "./src/images/gallery/type3/2.jpg", 
				"title" : "Hoodie stumptown kitsch",
				"date" : "05/05/2015",
				"camera" : "Canon PowerShot S95",
				"focal" : 22.5,
				"aperture" : 5.6,
				"exposureTime" : "1/1000",
				"iso" : 80
			}
		]
	},
	{
		"title" : "Games", 
		"items" : [
			{
				"image" : "./src/images/gallery/type2/1.jpg", 
				"title" : "Hoodie stumptown kitsch",
				"date" : "05/05/2015",
				"camera" : "Canon PowerShot S95",
				"focal" : 22.5,
				"aperture" : 5.6,
				"exposureTime" : "1/1000",
				"iso" : 80
			},
			{
				"image" : "./src/images/gallery/type2/2.jpg", 
				"title" : "Hoodie stumptown kitsch",
				"date" : "05/05/2015",
				"camera" : "Canon PowerShot S95",
				"focal" : 22.5,
				"aperture" : 5.6,
				"exposureTime" : "1/1000",
				"iso" : 80
			}
		]
	},
	{
		"title" : "Lifes", 
		"items" : [
			{
				"image" : "./src/images/gallery/type4/1.jpg", 
				"title" : "Hoodie stumptown kitsch",
				"date" : "05/05/2015",
				"camera" : "Canon PowerShot S95",
				"focal" : 22.5,
				"aperture" : 5.6,
				"exposureTime" : "1/1000",
				"iso" : 80
			},
			{
				"image" : "./src/images/gallery/type4/2.jpg", 
				"title" : "Hoodie stumptown kitsch",
				"date" : "05/05/2015",
				"camera" : "Canon PowerShot S95",
				"focal" : 22.5,
				"aperture" : 5.6,
				"exposureTime" : "1/1000",
				"iso" : 80
			}
		]
	}
];

const ToolsMixins = {
	onEndTransition(el, callback) {
		let transEndEventNames = { 'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend' },
			transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
			support = { transitions: Modernizr.csstransitions },
			onEndCallbackFn = (ev) => {
				if( support.transitions ) {
					// if( ev.target != this ) return;
					ev.target.removeEventListener( transEndEventName, onEndCallbackFn );
				}
				if( callback && typeof callback === 'function' ) { 
					callback.call(this); 
				}
			};

		if( support.transitions ) {
			el.addEventListener( transEndEventName, onEndCallbackFn );
		} else {
			onEndCallbackFn();
		}
	},
	scrollY() {
		return window.pageYOffset || window.document.documentElement.scrollTop; 
	},
	throttle(fn, delay) {
		let allowSample = true;

		return (e) => {
			if (allowSample) {
				allowSample = false;
				setTimeout(function() { allowSample = true; }, delay);
				fn(e);
			}
		};
	}
};

const Gallery = React.createClass({
	mixins : [ToolsMixins],
	getInitialState() {
		return {
			gallery : jsonData,
			canOpen : false,
			canMoveHeroImage : true
		};
	},
	componentDidMount() {
		let bodyEl = document.body || document.documentElement,
			galleryEl = this.refs.gallery.getDOMNode(),
			imghero = document.querySelector('.hero__back--mover'), 
			slider = document.querySelector('.stack-slider'),
			stacksWrapper = slider.querySelector('.stacks-wrapper'), flkty,
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
		imagesLoaded(stacksWrapper, () => {
			classie.add(bodyEl, 'view-init');
		});

		this.setState({flkty : flkty, canOpen : true, canMoveHeroImage : true, win : win}, () => {
			// Flickity events:
			let canOpen = this.state.canOpen,
				canMoveHeroImage = this.state.canMoveHeroImage,
				win = this.state.win;

			window.addEventListener('mousemove', this.throttle((ev) => {
				if( !canMoveHeroImage ) return false;
				let xVal = -1/(win.height/2)*ev.clientY + 1,
					yVal = 1/(win.width/2)*ev.clientX - 1,
					transX = 20/(win.width)*ev.clientX - 10,
					transY = 20/(win.height)*ev.clientY - 10,
					transZ = 100/(win.height)*ev.clientY - 50;

				imghero.style.WebkitTransform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)';
				imghero.style.transform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)';
			}, 100));

			// window resize
			window.addEventListener( 'resize', this.throttle((ev) => {
				let selectedStackEle = this.refs['stack' + flkty.selectedIndex].getDOMNode(),
					win = this.state.win;

				// recalculate window width/height
				win.width = window.innerWidth;
				win.height = window.innerHeight;
				
				// reset body height if stack is opened
				if( classie.has(bodyEl, 'view-full') ) { 	// stack is opened
					galleryEl.style.height = selectedStackEle.offsetHeight + 'px';
				}

				this.setState({win : win});
			}, 50));

			flkty.on('cellSelect', () => {
				canOpen = false;
				classie.remove(bodyEl, 'item-clickable');

				let prevStack = stacksWrapper.querySelector('.stack-prev'),
					nextStack = stacksWrapper.querySelector('.stack-next'),
					selidx = flkty.selectedIndex,
					cellsCount = flkty.cells.length,
					previdx = selidx > 0 ? selidx - 1 : cellsCount - 1,
					nextidx = selidx < cellsCount - 1 ? selidx + 1 : 0,
					prevStackEle = this.refs['stack' + previdx].getDOMNode(),
					nextStackEle = this.refs['stack' + nextidx].getDOMNode();

				if( prevStack ) {
					classie.remove(prevStack, 'stack-prev');
				}
				if( nextStack ) {
					classie.remove(nextStack, 'stack-next');	
				}

				classie.add(prevStackEle, 'stack-prev');
				classie.add(nextStackEle, 'stack-next');
			});

			flkty.on('dragStart', () => {
				canOpen = false; 
				classie.remove(bodyEl, 'item-clickable');
			});

			flkty.on('settle', () => { 
				classie.add(bodyEl, 'item-clickable');
				canOpen = true; 
			});

			this.setState({canOpen : canOpen});
			// 设置滚动条高度,51为导航高度
			bodyEl.scrollTop = 51;
		});
	},
	slideUp(idx, ev) {
		ev.preventDefault();
		let bodyEl = document.body,
			galleryEl = this.refs.gallery.getDOMNode(),
			docElem = window.document.documentElement,
			slider = document.querySelector('.stack-slider'),
			stacksWrapper = slider.querySelector('.stacks-wrapper'),
			stacks = [].slice.call(stacksWrapper.children),
			canMoveHeroImage = this.state.canMoveHeroImage,

			flkty = this.state.flkty,
			stack = this.refs["stack" + idx].getDOMNode(),
			canOpen = this.state.canOpen;

		if( classie.has(stack, 'is-selected') ) { 		// current stack
			if( classie.has(bodyEl, 'view-full') ) { 	// stack is opened
				let closeStack = () => {
					classie.remove(bodyEl, 'move-items');

					this.onEndTransition(slider, () => {
						classie.remove(bodyEl, 'view-full');
						galleryEl.style.height = '';
						flkty.bindDrag();
						flkty.options.accessibility = true;
						canMoveHeroImage = true;
					});
				};

				// if the user scrolled down, 
				// let's first scroll all up before closing the stack.
				let scrolled = this.scrollY();
				if( scrolled > 0 ) {
					closeStack();
					// smooth_scroll_to(isFirefox ? docElem : bodyEl || docElem, 0, 500).then(function() {
					// 		closeStack();
					// });
				} else {
					closeStack();
				}
			} else if( canOpen ) { // stack is closed
				classie.add(bodyEl, 'view-full');
				setTimeout(() => { 
					classie.add(bodyEl, 'move-items'); 
				}, 25);
				galleryEl.style.height = stack.offsetHeight + 'px';
				flkty.unbindDrag();
				flkty.options.accessibility = false;
				canMoveHeroImage = false;
			} else if( classie.has(stack, 'stack-prev') ) {
				flkty.previous(true);
			} else if( classie.has(stack, 'stack-next') ) {
				flkty.next(true);
			}

			this.setState({canMoveHeroImage : canMoveHeroImage, flkty : flkty});
			bodyEl.scrollTop = 51;
		}
	},
	render() {
		let gallery = this.state.gallery || [], stackCnt;

		stackCnt = gallery.map((g, i) => {
			let h2 = (<h2 className="stack-title" onClick={this.slideUp.bind(this, i)}>
				<a href="javascript:;" data-text={g.title}><span>{g.title}</span></a>
			</h2>), items = g.items, item;	
			item = items.map(t => {
				return (
					<div className="item">
						<div className="item__content">
							<img src={t.image} alt="img01" />
							<h3 className="item__title">{t.title} <span className="item__date">{t.date}</span></h3>
							<div className="item__details">
								<ul>
									<li><i className="glyphicon glyphicon-camera"></i><span>{t.camera}</span></li>
									<li><i className="glyphicon glyphicon-eye-open"></i><span>{t.focal}mm</span></li>
									<li><i className="glyphicon glyphicon-asterisk"></i><span>&fnof;/{t.aperture}</span></li>
									<li><i className="glyphicon glyphicon-flash"></i><span>{t.exposureTime}</span></li>
									<li><i className="glyphicon glyphicon-apple"></i><span>{t.iso}</span></li>
								</ul>
							</div>
						</div>
					</div>
				);
			});
			return (<div ref={"stack" + i} className="stack">{h2}{item}</div>);
		});

		return (
			<div ref="gallery" className="gallery">
				<div className="hero">
					<div className="hero__back hero__back--static"></div>
					<div className="hero__back hero__back--mover"></div>
					<div className="hero__front"></div>
				</div>
				<div className="stack-slider">
					<div className="stacks-wrapper">
						{stackCnt}
					</div>
				</div>
			</div>
		);
	}
});

export default Gallery;