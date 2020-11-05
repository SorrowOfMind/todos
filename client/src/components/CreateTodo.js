import React from 'react';
import useInput from '../hooks/useInput';

const CreateTodo = () => {
    const [todo, connectTodo] = useInput('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!todo) return;
        try {
            const response = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                body: JSON.stringify({todo}),
                headers: {'Content-Type': 'application/json'}
            });
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
                        <input type="text" placeholder="Add to-do task..." className="form-control" {...connectTodo.setInput} />
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
