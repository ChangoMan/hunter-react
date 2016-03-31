import React, { Component } from 'react';

export default class Main extends Component {

    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className="form-group">
                    <input className="form-control" value={this.props.title} onChange={this.handleChange.bind(this)} />
                </div>
            </div>
        );
    }
}
