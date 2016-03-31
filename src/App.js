import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default class App extends Component {

    render() {

        const message = "Welcome Hunter!"; // This is setting a prop, which is passes by x={x}

        return (
            <div>
                <Header />

                <div className="site-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                                <main className="site-main">
                                    {this.props.children}
                                    {/* <Main changeTitle={this.changeTitle.bind(this)} title={this.state.title} /> */}
                                </main>
                            </div>
                            <div className="col-sm-3">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
