import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
//
// import imgOne from './images/only-pc上_40.jpg';
import Tabs from './effects/Tabs.js';

import Slide from './effects/slide.js';

import Carousel from './effects/Carousel.js';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Tabs />
        <Slide />
        <Carousel />
      </div>
    );
  }
}

export default App;
