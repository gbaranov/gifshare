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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <img src={item.images.fixed_height_still.url} className="img-thumbnail mx-auto d-block" alt=""></img>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Gifs;
