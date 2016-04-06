import React, { Component } from 'react';
import ajax from 'superagent';

export default class Data extends Component {

    componentWillMount () {
        ajax.get('https://api.github.com/repos/facebook/react/commits')
            .end((error, response) => {
                if (!error && response) {
                    console.dir(response.body);
                    this.setState({ commits: response.body });
                } else {
                    console.log('There was an error fetching from GitHub', error);
                }
            })
    }

    constructor(props) {
        super(props);

        this.state = {
            commits: []
        };
    }

    render() {
        return (
            <div>
                <h2>Data</h2>
                <hr />

                {this.state.commits.map((commit, index) => {
                    const author = commit.author ? commit.author.login : 'Anonymous';
                    const avatar = commit.author ? commit.author.avatar_url : 'Anonymous';
                    return (
                        <p key={index}><strong>{author}</strong>: <a href={commit.html_url}>{commit.commit.message}</a>. {avatar}</p>

                    );
                })}

            </div>
        );
    }
}
