import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

class App extends Component {
    constructor() {
        super();

        this.state = {
            gifs: [
                {
                    id: 1,
                    url: 'http://fakeimg.pl/300/'
                },
                {
                    id: 2,
                    url: 'http://fakeimg.pl/300/'
                },
                {
                id: 3,
                url: 'http://fakeimg.pl/300/'
                }
            ]
        }
    }
    handleTermChange(term) {
        console.log(term);
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={this.handleTermChange} />
            </div>
        );
    }
}

export default App;
