import React, { Component } from 'react';
import ajax from 'superagent';

export default class Data extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mode: 'commits',
            commits: [],
            forks: [],
            pulls: []
        };
    }

    componentWillMount () {
        ajax.get('https://api.github.com/repos/facebook/react/commits')
            .end((error, response) => {
                if (!error && response) {
                    // console.dir(response.body);
                    this.setState({ commits: response.body });
                } else {
                    console.log('There was an error fetching from GitHub', error);
                }
            });

        ajax.get('https://api.github.com/repos/facebook/react/forks')
            .end((error, response) => {
                if (!error && response) {
                    // console.dir(response.body);
                    this.setState({ forks: response.body });
                } else {
                    console.log('There was an error fetching from GitHub', error);
                }
            });

        ajax.get('https://api.github.com/repos/facebook/react/pulls')
            .end((error, response) => {
                if (!error && response) {
                    console.dir(response.body);
                    this.setState({ pulls: response.body });
                } else {
                    console.log('There was an error fetching from GitHub', error);
                }
            });
    }

    renderCommits() {
        return this.state.commits.map((commit, index) => {
            const author = commit.author ? commit.author.login : 'Anonymous';
            return (
                <p key={index}><strong>{author}</strong>: <a href={commit.html_url}>{commit.commit.message}</a>.</p>
            );
        });
    }

    renderForks() {
        return this.state.forks.map((fork, index) => {
            const owner = fork.owner ? fork.owner.login : 'Anonymous';
            return (
                <p key={index}><strong>{owner}</strong>: forked to <a href={fork.html_url}>{fork.html_url}</a> at {fork.created_at}.</p>
            );
        });
    }

    renderPulls() {
        return this.state.pulls.map((pull, index) => {
            const user = pull.user ? pull.user.login : 'Anonymous';
            return (
                <p key={index}><strong>{user}</strong>: pulled to <a href={pull.html_url}>{pull.body}</a>.</p>
            );
        });
    }

    render() {

        let content;

        if (this.state.mode === 'commits') {
            content = this.renderCommits();
        } else if (this.state.mode === 'forks') {
            content = this.renderForks();
        } else {
            content = this.renderPulls();
        }

        return (
            <div>
                <h2>Data</h2>
                <hr />

                {/*
                <h3>Commits</h3>
                {this.renderCommits()}
                <hr />
                <h3>Forks</h3>
                {this.renderForks()}
                <hr />
                <h3>Pulls</h3>
                {this.renderPulls()}
                */}

            </div>
        );
    }
}
