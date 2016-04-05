import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {

    constructor() {
        super()
        this.todos = [
            {
                id: 113464643,
                text: "Go Shopping",
                more: "GO GO",
                complete: false
            },
            {
                id: 235684679,
                text: "Pay Bills",
                more: "PAY PAY",
                complete: false
            },
        ];
    }

    createTodo(text) {
        const id = Date.now();

        this.todos.push({
            id,
            text,
            complete: false,
        });

        this.emit("change");
    }

    getAll() {
        return this.todos;
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
                break;
            }
            case "RECEIVE_TODOS": {
                this.todos = action.todos;
                this.emit("change");
                break;
            }
        }
        // console.log("TodoStore received an action", action);
    }

}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = dispatcher;

// window.todoStore = todoStore; // Allows browser console to access todoStore and its functions

export default todoStore;