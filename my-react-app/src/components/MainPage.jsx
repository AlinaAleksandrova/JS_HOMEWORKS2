import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TodoList from './TodoList';
import { uniqueId } from 'lodash';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    status: Yup.string().required('Status is required')
});

class MainPage extends Component {
    state = {
        todos: JSON.parse(localStorage.getItem('todos') || '[]'),
    };

    handleFormSubmit = (values, { resetForm }) => {
        const newTodo = { ...values, id: uniqueId(), status: 'pending' };
        const updatedTodos = [newTodo, ...this.state.todos];
        this.setState({ todos: updatedTodos });
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        resetForm();
    };

    handleDelete = (id) => {
        const updatedTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos: updatedTodos });
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    render() {
        return (
            <div>
                <Formik
                    initialValues={{ title: '', description: '', status: 'pending' }}
                    validationSchema={validationSchema}
                    onSubmit={this.handleFormSubmit}
                >
                    {({ values, handleChange }) => (
                        <Form>
                            <Field name="title" as={TextField} label="Title" fullWidth />
                            <Field name="description" as={TextField} label="Description" multiline rows={4} fullWidth />
                            <FormControl fullWidth>
                                <InputLabel>Status</InputLabel>
                                <Field name="status" as={Select} label="Status" value={values.status} onChange={handleChange}>
                                    <MenuItem value="pending">Pending</MenuItem>
                                    <MenuItem value="completed">Completed</MenuItem>
                                    <MenuItem value="not-completed">Not Completed</MenuItem>
                                </Field>
                            </FormControl>
                            <Button type="submit" variant="contained" color="primary">Add Todo</Button>
                        </Form>
                    )}
                </Formik>
                <TodoList todos={this.state.todos} handleDelete={this.handleDelete} />
            </div>
        );
    }
}

export default MainPage;
