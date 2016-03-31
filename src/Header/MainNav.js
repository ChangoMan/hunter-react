import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class MainNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-inverse u-bottom20">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <IndexLink className="nav-link" to="/" activeClassName="active">Home</IndexLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" activeClassName="active">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" activeClassName="active">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
