import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SideRelatedContent from '../container/SideRelatedContent.js';

class SideRelated extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="side-related" className="en">
        <h2 className="en">Related</h2>
        <h2 className="ja">関連</h2>
        <ul id="related">
          <SideRelatedContent></SideRelatedContent>
        </ul>
      </section>
    );
  }
}

export default SideRelated;