import React, { Component } from 'react';
import ContentsFull from '../container/ContentsFull.js';
import ContentsHalf from '../container/ContentsHalf.js';

class ContentFeatured extends Component {
  render() {
    return (
      <section id="content-featured">
        <ContentsFull></ContentsFull>
        <ContentsHalf></ContentsHalf>
      </section>
    );
  }
}

export default ContentFeatured;