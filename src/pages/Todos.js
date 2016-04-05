import React, { Component } from 'react';
import Todo from '../components/Todo';
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";

export default class Todos extends Component {

    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll(),
        };
    }

    componentWillMount() {
        TodoStore.on("change", this.getTodos);
    }

    componentWillUnmount() {
        TodoStore.removeListener("change", this.getTodos);
    }

    getTodos() {
        this.setState({
            todos : TodoStore.getAll(),
        });
    }

    createTodo() {
        TodoActions.createTodo(Date.now());
    }

    reloadTodos() {
        TodoActions.reloadTodos();
    }

    /*deleteTodo() {
        TodoActions.deleteTodo("113464643");
    }*/

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
                <p><button className="btn btn-primary" onClick={this.createTodo.bind(this)}>Create!</button></p>
                <p><button className="btn btn-info" onClick={this.reloadTodos.bind(this)}>Reload!</button></p>
                {/* <p><button className="btn btn-danger" onClick={this.deleteTodo.bind(this)}>Delete!</button></p> */}
            </div>
        );
    }
}
