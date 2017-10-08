import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class SideRelatedContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="side-related-content en"><a><h3>Something</h3></a></li>
    );
  }
}

export default SideRelatedContent;