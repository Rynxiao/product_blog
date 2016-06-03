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

const BackToTop = React.createClass({
    mixins: [SetIntervalMixin],
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
            <div className="backToTop">
                <a href="javascript:;" onClick={this.backToTop}>
                  <span className="glyphicon glyphicon-menu-up"></span>
                  <span className="toTop">回到顶部</span>
                </a>
            </div>
        );
    }
});

export default BackToTop;