import {GET_TODOS, ADD_TODO} from '../actions/types';

const initState = [];

const rootReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case GET_TODOS:
            return [...payload];
        case ADD_TODO:
            return [
                ...state,
                payload
            ]
        default:
            return state;
    }
}

export default rootReducer;