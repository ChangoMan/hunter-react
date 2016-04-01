import React, { Component } from 'react';

export default class About extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>About</h2>
                <p>{this.props.params.article}</p>
                <p>{this.props.location.pathname}</p>
                <button className="btn btn-warning" onClick={this.props.toggleMobile}>Children Toggle BG</button>
            </div>
        );
    }
}
