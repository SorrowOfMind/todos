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
                    <div className="input-group">
                        <input type="text" placeholder="Add todo task..." className="form-control" {...connectTodo.setInput} />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary px-5">Add</button>
                        </div>
                    </div>
            </form>
        </div>
    )
}

export default CreateTodo
