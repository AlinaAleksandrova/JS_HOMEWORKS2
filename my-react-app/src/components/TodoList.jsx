import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const TodoList = ({ todos, handleDelete }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <Link to={`/todo/${todo.id}`}>Edit</Link>
                    <Button onClick={() => handleDelete(todo.id)} color="secondary">Delete</Button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
