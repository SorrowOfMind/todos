import {GET_TODOS} from '../actions/types';

const initState = {
    todos: []
}

const rootReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case GET_TODOS:
            return {
                todos: payload
            }
        default:
            return state;
    }
}

export default rootReducer;