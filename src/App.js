import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import request from 'superagent';

class App extends Component {
    constructor() {
        super();

        this.state = {
            gifs: []
        }
    }
    handleTermChange(term) {
        const url = 'http://api.giphy.com/v1/gifs/search?q=${term}&api_key=V6qydC22ACu4zLq6xo6ZVjd8fIx9VZkG';
        request.get(url, function(err, res) {
            console.log(res.body.data[0]);
        });
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={this.handleTermChange} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

export default App;
