import React, { Component } from 'react';
import './libraries';
import { render } from 'react-dom';
import './style.css';
import Grid from "./grid"

class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="header-text">
          Matthew Chan
        </div>
        <div class="grid">
          <Grid top="Hi" bottom="No" color="#c41212"/>
          <Grid top="Hi" bottom="No" color="#14c463"/>
        </div>
        <div class="grid">
          <Grid top="Hi" bottom="No" color="#edb340"/>
          <Grid top="Hi" bottom="No" color="#5e4fe8"/>
        </div>
        <div class="grid">
          <Grid top="Hi" bottom="No" color="#c147e6"/>
          <Grid top="Hi" bottom="No" color="#f0ed65"/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
