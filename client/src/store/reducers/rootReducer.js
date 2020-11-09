import {GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO} from '../actions/types';

const initState = [];

const rootReducer = (state = initState, {type, payload}) => {
    let newState = [...state];
    switch (type) {
        case GET_TODOS:
            return [...payload];
        case ADD_TODO:
            return [
                ...state,
                payload
            ];
        case DELETE_TODO:
            newState = state.filter(todo => todo.todo_id !== payload.todo_id);
            return newState;
        case EDIT_TODO:
            let todoIdx = newState.findIndex(todo => todo.todo_id === payload.todo_id);
            newState[todoIdx].description = payload.description;
            return newState; 
        default:
            return state;
    }
}

export default rootReducer;