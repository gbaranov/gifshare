import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="row">
                <div className="search col-centered">
                    <div className="form-group">
                        <input type="text" placeholder="Search..." className="form-control search-input" onChange={event => this.onInputChange(event.target.value)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;