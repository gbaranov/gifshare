import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      data: null
    }
  }

handleSubmit(event) {
  this.setState({data: this.input.value});
  this.props.searchQuery(this.input.value);
  event.preventDefault();
}

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <input type="text" ref={(input) => this.input = input} className="form-control" id="search-query" placeholder="Search..." />
            <input type="submit" value="Search"></input>
        </div>
        </form>
      </div>
    );
  }
}

export default Search;