import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="row">
                <a className="logo-url" href="."><img className="logo" src="logo_transparent.png" alt="Gif Share App" ></img></a>
            </div>
        )
    }
}

export default Header;