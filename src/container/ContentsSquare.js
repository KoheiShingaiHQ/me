import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ContentLabel from '../container/ContentLabel.js';

class ContentsSquare extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="contents-square">
        <ul>{contents}</ul>
      </section>
    );
  }
}

var contents = [];
var data = [
  {main: "Square article 1", sub: 'Something about this square article 1'},
  {main: "Square article 2", sub: 'Something about this square article 2'},
  {main: "Square article 3", sub: 'Something about this square article 3'},
  {main: "Square article 4", sub: 'Something about this square article 4'},
  {main: "Square article 5", sub: 'Something about this square article 5'},
  {main: "Square article 6", sub: 'Something about this square article 6'},
  {main: "Square article 7", sub: 'Something about this square article 7'},
  {main: "Square article 8", sub: 'Something about this square article 8'},
  {main: "Square article 9", sub: 'Something about this square article 9'},
];
for(var i in data){
  contents.push(
    <li key={data[i].main}>
      <div>
        <ContentLabel main={data[i].main} sub={data[i].sub}></ContentLabel>
      </div>
    </li>
  );
}

export default ContentsSquare;