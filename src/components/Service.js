import React, { Component } from 'react';

export default class Service extends Component {

    constructor() {
        super();

        this.state = {
            active: false
        }
    }

    clickHandler() {
        const active = !this.state.active;
        this.setState({active});
        this.props.addTotal( active ? this.props.price : -this.props.price );
    }

    render() {

        const activeClass = this.state.active ? 'active' : '';

        return (
            <div>
                <p className={activeClass + ' service'} onClick={this.clickHandler.bind(this)}>
                    <strong>{this.props.name}:</strong> {this.props.price}
                </p>
            </div>
        );
    }
}
