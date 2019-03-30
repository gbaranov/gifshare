import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

class App extends Component {

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
