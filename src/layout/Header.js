import React, { Component } from 'react';
import MainNav from './Header/MainNav';

export default class Header extends Component {
    render() {
        return (
            <header className="site-header">
                <div className="site-header__main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div>
                                    <img width="220" src="http://www.madwire.com/branding-guidelines/img/primary-logo.png" alt="" />
                                </div>
                                {/* <p>{this.props.title}</p> */}
                                {/* <p>{this.props.message}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-header__nav">
                    <MainNav />
                </div>
            </header>
        );
    }
}
