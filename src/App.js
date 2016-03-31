import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class App extends Component {

    // This is setting a state, which is passes with x={this.state.x}
    constructor() {
        super();
        this.state = {
            title: "Default Title",
        };
    }

    changeTitle(title) {
        this.setState({title}); // Same as this.setState({title : title})
    } // Must .bind(this) when passing as prop into component.


    render() {

        const message = "Welcome Hunter!"; // This is setting a prop, which is passes by x={x}

        return (
            <div>
                <Header title={this.state.title} message={message} />
                <Main changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <Footer />
            </div>
        );
    }
}
