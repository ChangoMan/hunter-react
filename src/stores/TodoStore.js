import { EventEmitter } from "events";

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

}

const todoStore = new TodoStore;

// window.todoStore = todoStore; // Allows browser console to access todoStore and its functions

export default todoStore;