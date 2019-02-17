import React, { Component } from 'react';
import Search from './Search.js';
import Gifs from './Gifs.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Gifs />
      </div>
    );
  }
}

export default App;
