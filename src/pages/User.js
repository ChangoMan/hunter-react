import React, { Component } from 'react';
import ajax from 'superagent';

export default class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: []
        };
    }

    fetchFeed(type) {
        ajax.get(`https://api.github.com/users/${this.props.params.user}/events`)
            .end((error, response) => {
                console.dir(response.body);
                if (!error && response) {
                    this.setState({ [type]: response.body });
                } else {
                    console.log(`Error fetching ${type}`, error);
                }
            }
        );
    }

    componentWillMount() {
        this.fetchFeed('events');
    }

    renderCommits() {
        return this.state.events.map((event, index) => {
            const actor = event.actor ? event.actor.login : 'Anonymous';

            const eventType = event.type;
            const repoName = event.repo.name;
            const creationDate = event.created_at;

            return (
                <p key={index}><strong>{actor}</strong>: {repoName}: {eventType} at {creationDate}</p>
            );
        });
    }

    render() {

        let content = this.renderCommits();

        return (
            <div>
                <h2>User Data</h2>

                <hr />

                {content}

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
