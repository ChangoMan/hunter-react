import React, { Component } from 'react';
import Article from '../components/Article';

export default class Articles extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Articles</h2>
                <hr />
                <div className="row">
                    <Article title="Article One" buttonText="Child Child Toggle BG" toggleMobile={this.props.toggleMobile} />
                    <Article title="Article Two" buttonText="Learn More" />
                    <Article title="Article Three" buttonText="Read More" />
                </div>
            </div>
        );
    }
}
