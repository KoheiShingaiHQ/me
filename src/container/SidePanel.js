import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SideLanguage from '../container/SideLanguage.js';
import SideRelated from '../container/SideRelated.js';

class SidePanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="side-panel">
        <SideLanguage></SideLanguage>
        <SideRelated></SideRelated>
      </section>
    );
  }
}

export default SidePanel;