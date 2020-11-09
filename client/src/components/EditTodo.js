import React from 'react';
import {useDispatch} from 'react-redux';
import useInput from '../hooks/useInput';
import {editTodo} from '../store/actions/actions';

const EditTodo = ({setIsOpen, currentTodo}) => {
    const [todo, connectTodo] = useInput(currentTodo.description);
    const dispatch = useDispatch();

    const handleEdit = () => {
        if (todo) {
            dispatch(editTodo(currentTodo.todo_id, todo));
            setIsOpen(false);
        }
    }

    return (
        <>
        <div className="modal__backdrop" id="backdrop" onClick={() => setIsOpen(false)}></div>
            <div className="todo__modal p-4">
                <div className="form-group">
                    <label htmlFor="input__edit">Description:</label>
                    <input type="text" className="form-control" id="input__edit" {...connectTodo.setInput}/>
                </div>
                <button type="submit" className="btn btn-success btn-block" onClick={handleEdit}>Edit</button>
            </div>
        </>
    )
}

export default EditTodo;
