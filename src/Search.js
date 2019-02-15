import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <form>
        <div class="form-group">
            <input type="text" class="form-control" id="search-query" placeholder="Search..." />
        </div>
        </form>
      </div>
    );
  }
}

export default Search;
