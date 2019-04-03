import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="row">
                <img className="logo" src="logo_transparent.png" alt="Gif Share App" ></img>
            </div>
        )
    }
}

export default Header;