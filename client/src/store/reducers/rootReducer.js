import {GET_TODOS, ADD_TODO, DELETE_TODO} from '../actions/types';

const initState = [];

const rootReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case GET_TODOS:
            return [...payload];
        case ADD_TODO:
            return [
                ...state,
                payload
            ];
        case DELETE_TODO:
            let newState = state.filter(todo => todo.todo_id !== payload.todo_id);
            return newState;
        default:
            return state;
    }
}

export default rootReducer;