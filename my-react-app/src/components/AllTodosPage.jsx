import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllTodosPage extends Component {
    state = {
        todos: JSON.parse(localStorage.getItem('todos')) || [],
    };

    render() {
        const { todos } = this.state;
        return (
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        <Link to={`/todo/${todo.id}`}>View</Link>
                    </li>
                ))}
            </ul>
        );
    }
}

export default AllTodosPage;
