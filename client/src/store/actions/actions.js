import {GET_TODOS, ADD_TODO} from './types';

const url = 'http://localhost:5000/todos';

export const getTodos = () => async dispatch => {
    try {
        const results = await fetch(url);
        const jsonResults = await results.json();
        dispatch({type: GET_TODOS, payload: jsonResults.data});
    } catch (err) {
        console.error(err.message);
    }
}

export const addTodo = (todo) => async dispatch => {
    try {
        const results = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({todo}),
        });
        const jsonResults = await results.json();
        dispatch({type: ADD_TODO, payload: jsonResults.data});
    } catch (err) {
        console.error(err.message);
    }
}
