import React, { Component } from 'react';
import ContentsSquare from '../container/ContentsSquare.js';

class About extends Component {
  hideScreen() {
    var header = document.getElementsByTagName('header')[0];
    var main = document.getElementsByTagName('main')[0];
    var searchResult = document.getElementById('search-result');
    header.classList.remove('show-menu');
    if (main) {
      main.classList.remove('show-search');
      document.body.classList.remove('show-search');
    }
    if (searchResult) {
      if (window.location.hash === "#/") {
        searchResult.classList.remove('show');
        document.getElementById('search-input').value = "";
      }
    }
  }
  setFooterOpacity(opacity) {
    document.getElementsByTagName("footer")[0].style.opacity = opacity;
  }
  setScrollStatus() {
    if (document.getElementById('about')) {
      var header = document.getElementsByTagName('header')[0];
      var main = document.getElementById('about');
      var footer = document.getElementsByTagName('footer')[0];
      var b = window.innerHeight;
      var h = header.scrollHeight;
      var m = main.scrollHeight;
      var f = footer.scrollHeight;
      var t = b - (h + m + f);
      footer.dataset.scroll = (t < 12) ? true : false;
    }
  }
  componentDidMount() {
    this.hideScreen();
    this.setFooterOpacity(0);
    this.setScrollStatus();
    this.setFooterOpacity(1);
    var self = this;
    window.addEventListener('resize', function (event) {
      self.setScrollStatus();
    });
  }
  render() {
    const data = [
      {main: "LinkedIn", size: 'cover', image: 'https://c1.staticflickr.com/5/4475/36992969453_f65472041a_b.jpg', href: 'https://www.linkedin.com/in/kohei-shingai-6a414a89/'},
      {main: "GitHub", size: 'cover', image: 'https://c1.staticflickr.com/5/4479/36953070364_f09ddc8cec_b.jpg', href: 'https://github.com/KoheiShingaiHQ'},
      {main: "UI/UX", size: 'cover', image: 'https://c1.staticflickr.com/5/4443/36992968563_7a4dae6a8f_b.jpg', href: '/article/ui-ux'},
      {main: "Prototyping", size: 'cover', image: 'https://c1.staticflickr.com/5/4453/23810866228_40922c1f47_b.jpg', href: '/article/prototyping'},
      {main: "Open Source", size: 'auto', image: 'https://www.toptal.com/designers/subtlepatterns/patterns/footer_lodyas.png', href: '/article/open-source'},
      {main: "Java", size: 'cover', image: 'https://c1.staticflickr.com/5/4506/36953070014_8be195a378_z.jpg', href: '/article/java-career'},
      {main: "Certification", size: 'cover', image: 'https://c1.staticflickr.com/5/4476/36992969803_f40031f972_b.jpg', href: '/article/certification'},
      {main: "Activity", size: 'cover', image: 'https://c1.staticflickr.com/5/4445/36992968773_05810c4e15_k.jpg', href: '/article/activity'},
      {main: "Data", size: 'cover', image: 'https://c1.staticflickr.com/5/4493/36992968663_9d454b1722_b.jpg', href: 'https://docs.google.com/spreadsheets/d/1kC_j4cWM6I8czctA1HsqlXTqT79MGkA6SmRsFrAIMB8/edit?usp=sharing'}
    ];
    return (
      <main id="about">
        <ContentsSquare data={data}></ContentsSquare>
      </main>
    );
  }
}

export default About;