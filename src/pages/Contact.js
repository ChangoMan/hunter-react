import React, { Component } from 'react';

export default class Contact extends Component {

    constructor() {
        super();
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {

        // console.log(this.state);
        const {collapsed} = this.state; // makes collapsed the same thing as this.state.collapsed
        const navClass = collapsed ? "collapse" : "";

        return (
            <div>
                <h2>Contact</h2>
                <div className={"alert alert-success " + navClass}>
                    <p>Collapsed Content</p>
                </div>
                <p><button className="btn btn-primary" onClick={this.toggleCollapse.bind(this)}>Button</button></p>
                <button className="btn btn-warning" onClick={this.props.toggleMobile}>Children Toggle BG</button>
            </div>
        );
    }
}
