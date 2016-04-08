import React, { Component } from 'react';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import { IndexLink, Link } from 'react-router';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            hideMobile: true,
        };
    }

    toggleMobile() {
        this.setState({hideMobile: !this.state.hideMobile});
    }

    render() {

        const message = 'Welcome Hunter!'; // This is setting a prop, which is passes by x={x}

        const {hideMobile} = this.state; // makes collapsed the same thing as this.state.collapsed
        const mobileClass = hideMobile ? 'is-hidden' : 'is-showing';

        return (
            <div className={'site-wrap ' + mobileClass}>
                <Header />

                <div className="site-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                                <main className="site-main">

                                    {React.cloneElement(this.props.children, { toggleMobile: this.toggleMobile.bind(this) })}

                                    {/* this.props.children */}
                                    {/* <Main changeTitle={this.changeTitle.bind(this)} title={this.state.title} /> */}
                                </main>
                            </div>
                            <div className="col-sm-3">
                                <Sidebar toggleMobile={this.toggleMobile.bind(this)} />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
