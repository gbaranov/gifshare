import React, { Component } from 'react';
import Search from './Search.js';
import Gifs from './Gifs.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null
    }
  }

searchQuery = (query) => {
  this.setState({search: query});
}


  render() {
    return (
      <div className="App">
        <Search searchQuery={this.searchQuery}/>
        <Gifs />
      </div>
    );
  }
}

export default App;
