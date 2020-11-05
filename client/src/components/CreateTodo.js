import React from 'react';
import useInput from '../hooks/useInput';

const CreateTodo = () => {
    const [todo, connectTodo] = useInput('');

    return (
        <div className="input-wrapper">
            <form>
                <div className="form-row">
                    <div className="col-10">
                        <input type="text" placeholder="Add to-do task..." className="form-control" {...connectTodo} />
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
