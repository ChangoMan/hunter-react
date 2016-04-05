import React, { Component } from 'react';

export default class About extends Component {

    constructor() {
        super();
        this.state = {
            liked: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({liked: !this.state.liked});
    }

    render() {

        console.log(this.props);
        const text = this.state.liked ? 'like' : 'NO like';

        return (
            <div>
                <h2>About</h2>
                <p>{this.props.params.article}</p>
                <p>{this.props.location.pathname}</p>
                <button className="btn btn-warning" onClick={this.props.toggleMobile}>Children Toggle BG</button>
                <hr />
                <p onClick={this.handleClick}>You {text} this</p>
            </div>
        );
    }
}
