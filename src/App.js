import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import request from 'superagent';
import Header from './components/Header';

class App extends Component {
    constructor() {
        super();

        this.state = {
            gifs: []
        }
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleTermChange(term) {
        const url = `https://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=7wSVo3gVFv5E1PPkCI9eqRYVIrPRf8Ok`;
        request.get(url, (err, res) => {
            //console.log(res.body.data);
            this.setState({ gifs: res.body.data })
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <SearchBar onTermChange={this.handleTermChange} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

export default App;
