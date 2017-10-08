import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class ArticleHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="article-header" className="en">
        <h1 id="article-header-title">Something</h1>
      </section>
    );
  }
}

export default ArticleHeader;