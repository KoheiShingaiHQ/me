import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class ContentTimeline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="content-timeline en">
        <time className="cbp_tmtime" dateTime="2017-09-01 00:00:00">
          <span>2017</span>
          <span>Sep 1</span>
        </time>
        <div className="line"></div>
        <a>
          <div className="content">
            <h2>Something</h2>
            <p>Something about timeline.</p>
          </div>
        </a>
      </section>
    );
  }
}

export default ContentTimeline;