import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ContentsSquare from '../container/ContentsSquare.js';

class About extends Component {
  render() {
    return (
      <main id="about">
        <ContentsSquare></ContentsSquare>
      </main>
    );
  }
}

export default About;