import React, { Component } from 'react';

export default class Main extends Component {

    constructor() {
        super();
        this.state = {
            title: "Default Title",
        };
    }

    handleChange(e) {
        this.setState({title: e.target.value});
    }

    render() {

        var title = this.state.title;

        return (
            <div>
                <h1>Home</h1>
                <h2>{title}</h2>
                <div className="form-group">
                    <input className="form-control" value={title} onChange={this.handleChange.bind(this)} />
                </div>
            </div>
        );
    }
}
