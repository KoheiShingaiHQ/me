import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class ContentLabel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content-label">
        <h2>{this.props.main ? this.props.main : ""}</h2>
        <h3>{this.props.sub ? this.props.sub : ""}</h3>
      </div>
    );
  }
}

export default ContentLabel;