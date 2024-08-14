import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';

class TodoPage extends React.Component {
    constructor(props) {
        super(props);
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const todo = todos.find(todo => todo.id === props.todoId) || {};

        this.state = {
            todo: todo,
            todos: todos,
        };
    }

    handleFormSubmit = (values) => {
        const updatedTodos = this.state.todos.map(todo =>
            todo.id === this.state.todo.id ? { ...todo, ...values } : todo
        );
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        alert('Todo updated successfully!');
        this.props.navigate('/');
    };

    handleDelete = () => {
        const filteredTodos = this.state.todos.filter(todo => todo.id !== this.state.todo.id);
        localStorage.setItem('todos', JSON.stringify(filteredTodos));
        alert('Todo deleted successfully!');
        this.props.navigate('/');
    };

    render() {
        const { todo } = this.state;
        return (
            <Formik
                initialValues={todo}
                validationSchema={Yup.object({
                    title: Yup.string().required('Required'),
                    description: Yup.string().required('Required'),
                    status: Yup.string().required('Required')
                })}
                onSubmit={this.handleFormSubmit}
            >
                {() => (
                    <Form>
                        <Field name="title" as={TextField} label="Title" fullWidth />
                        <Field name="description" as={TextField} label="Description" multiline rows={4} fullWidth />
                        <Field name="status" as={TextField} label="Status" fullWidth select>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="not-completed">Not Completed</option>
                        </Field>
                        <Button type="submit" color="primary">Save Changes</Button>
                        <Button onClick={this.handleDelete} color="secondary">Delete</Button>
                    </Form>
                )}
            </Formik>
        );
    }
}


function TodoPageWrapper() {
    const params = useParams();
    const navigate = useNavigate();
    return <TodoPage todoId={params.id} navigate={navigate} />;
}

export default TodoPageWrapper;
