import React from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../store/actions/actions';
import useInput from '../hooks/useInput';

const CreateTodo = () => {
    const [todo, connectTodo] = useInput('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!todo) return;
        try {
            dispatch(addTodo(todo));
            connectTodo.clearInput();
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="input-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-10">
                        <input type="text" placeholder="Add todo task..." className="form-control" {...connectTodo.setInput} />
                    </div>
                    <div className="col-2">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTodo
