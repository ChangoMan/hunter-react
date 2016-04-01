import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <aside className="site-sidebar">
                <p>This is the sidebar</p>
                <button className="btn btn-warning" onClick={this.props.toggleMobile}>Sidebar Toggle BG</button>
            </aside>
        );
    }
}
