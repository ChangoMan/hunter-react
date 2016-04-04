import React, { Component } from 'react';

export default class Article extends Component {
    render() {
        return (
            <div className="col-sm-4">
                <h3>{this.props.title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum vestibulum porttitor. Suspendisse quam sapien, gravida et orci id, consectetur mattis orci.</p>
                <p><a className="btn btn-info" href="#">{this.props.btnText}</a></p>
                {/* <p><a className="btn btn-info" href="#" onClick={this.props.toggleMobile}>{this.props.buttonText}</a></p> */}
            </div>
        );
    }
}
