import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTodos, deleteTodo} from '../store/actions/actions';

const ListTodos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state);

    useEffect(() => {
            dispatch(getTodos());
    }, [dispatch]);

    const handleDelete = id => {
        dispatch(deleteTodo(id));
    }

    return (
        <div>
            <h1 className="display-5 my-3">Your todos:</h1>
            <div className="table-responsive">
                <table className="table">
                    <thead className="thead-dark">
                        <tr className="d-flex">
                            <th scope="col" className="col-1">#</th>
                            <th scope="col" className="col-7 text-left">Task</th>
                            <th scope="col" className="col-2 text-left">Edit</th>
                            <th scope="col" className="col-2 text-left">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="tbl__body" >
                        {todos && todos.map((todo, idx) => (
                            <tr key={todo.todo_id} className="d-flex">
                                <th scope="row" className="col-1">{idx + 1}</th>
                                <td className="col-7 text-left">{todo.description}</td>
                                <td className="col-2 text-left"><button className="btn btn-success px-4">Edit</button></td>
                                <td className="col-2 text-left"><button className="btn btn-danger px-4" onClick={() => handleDelete(todo.todo_id)}>Delete</button></td>
                            </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodos
