import React, { Component } from 'react';
import Chance from 'chance';

export default class Data extends Component {

    constructor() {
        super();

        const people = [];
        for (let i = 0; i < 10; i++) {
            people.push({
                firstName: chance.first(),
                lastName: chance.last(),
                country: chance.country({ full: true })
            });
        }

        this.state = {
            people // Same As people: people, since the key name is the same as the value
        };
    }

    render() {

        // const { people } = this.state;

        return (
            <div>
                <h2>Data</h2>
                <hr />
                {this.state.people.map((person, index) => (
                    <p key={index}>Hello, {person.firstName} {person.lastName} from {person.country}!</p>
                ))}
            </div>
        );
    }
}
