import React, { Component } from 'react';

class Gifs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.giphy.com/v1/gifs/search?q=lol&api_key=V6qydC22ACu4zLq6xo6ZVjd8fIx9VZkG")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="gifs">

      </div>
    );
  }
}

export default Gifs;
