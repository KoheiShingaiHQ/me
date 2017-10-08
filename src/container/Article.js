import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ContentPanel from '../container/ContentPanel.js';
import SidePanel from '../container/SidePanel.js';

class Article extends Component {
  render() {
    return (
      <main id="article">
        <ContentPanel></ContentPanel>
        <SidePanel></SidePanel>
      </main>
    );
  }
}

export default Article;