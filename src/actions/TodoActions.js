import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodos() {
    /*axios("http://someurl.com/somedataendpoint").then((data) => {
        console.log("got the data!", data);
    })*/
    dispatcher.dispatch({
        type: "FETCH_TODOS",
    });
    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_TODOS",
            todos: [
                {
                    id: 4587381144,
                    text: "Call Cab Again",
                    more: "MORE",
                    complete: true
                },
                {
                    id: 45378996999,
                    text: "Hug Wife",
                    more: "HUG HUG",
                    complete: true
                },
            ]
        });
    }, 1000);
}