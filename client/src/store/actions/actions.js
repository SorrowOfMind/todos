import {GET_TODOS} from './types';

const getTodos = () => async dispatch => {
    const url = 'http://localhost:5000/todos';
    try {
        const results = await fetch(url);
        const jsonResults = await results.json();
        dispatch({type: GET_TODOS, payload: jsonResults.data});
        console.log(jsonResults);
    } catch (err) {
        console.error(err.message);
    }
    
}

export default getTodos;