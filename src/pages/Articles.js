import React, { Component } from 'react';
import Article from '../components/Article';

export default class Articles extends Component {
    render() {

        console.log(this.props);

        const Articles = [
            {
                title: "Article One",
                btnText: "Read More"
            },
            {
                title: "Article Two",
                btnText: "Click Here"
            },
            {
                title: "Article Three",
                btnText: "Learn More"
            },
        ].map((article, i) => <Article key={i} {...article} />);

        {/*} OLD example, new example above using an array
        const Articles = [
            "Article One",
            "Article Two",
            "Article Three",
        ].map((title, i) => <Article key={i} title={title} />); // Arrow function one liner, no need for return
        */}

        {/*
        const Articles = [
            <Article key={1} title="Article One" buttonText="Learn More" buttonText="Child Child Toggle BG" toggleMobile={this.props.toggleMobile} />,
            <Article key={2} title="Article Two" buttonText="Learn More" />,
            <Article key={3} title="Article Three" buttonText="Learn More" />
        ];
        */}

        return (
            <div>
                <h2>Articles</h2>
                <hr />
                <div className="row">

                    {Articles}

                    {/*
                    <Article title="Article One" buttonText="Child Child Toggle BG" toggleMobile={this.props.toggleMobile} />
                    <Article title="Article Two" buttonText="Learn More" />
                    <Article title="Article Three" buttonText="Read More" />
                    */}

                </div>
            </div>
        );
    }
}
