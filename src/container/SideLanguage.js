import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class SideLanguage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="side-language" className="en">
        <h2 className="en">Language</h2>
        <h2 className="ja">言語</h2>
        <div className="selector">
          <span className="text">
            <div id="current-language"></div>
          </span>
          <span className="icon" aria-hidden="true">
            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
          </span>
          <div id="menu">
            <div id="language"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default SideLanguage;