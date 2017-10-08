import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class ContentGithub extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="content-github en">
        <a target="_blank" href="https://github.com">
          <h3 className="en repository">See Repository</h3>
          <h3 className="ja repository">リポジトリを見る</h3>
        </a>
        <section id="section"></section>
        <section id="related" className="related"></section>
      </section>
    );
  }
}

export default ContentGithub;