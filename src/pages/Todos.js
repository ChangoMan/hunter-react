import React, { Component } from 'react';
import Todo from '../components/Todo';

export default class Todos extends Component {

    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 113464643,
                    text: "Go Shopping",
                    more: "GOGO",
                    complete: false
                },
                {
                    id: 235684679,
                    text: "Pay Bills",
                    more: "PAYPAY",
                    complete: false
                },
            ],
        };
    }

    render() {

        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        });

        return (
            <div>
                <h2>Todos</h2>
                <ul>
                    {TodoComponents}
                </ul>
            </div>
        );
    }
}
