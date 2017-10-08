import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ArticleHeader from '../container/ArticleHeader.js';
import ContentTimeline from '../container/ContentTimeline.js';
import ContentGithub from '../container/ContentGithub.js';

class ContentPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article id="content-panel">
        <ArticleHeader></ArticleHeader>
        <ContentGithub></ContentGithub>
      </article>
    );
  }
}

export default ContentPanel;