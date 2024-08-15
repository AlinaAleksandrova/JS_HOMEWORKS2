import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';

function TodoPage() {
    const params = useParams();
    const navigate = useNavigate();
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todo = todos.find(t => t.id === params.id) || {};

    const handleFormSubmit = (values) => {
        const updatedTodos = todos.map(t =>
            t.id === todo.id ? { ...t, ...values } : t
        );
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        alert('Todo updated successfully!');
        navigate('/');
    };

    const handleDelete = () => {
        const filteredTodos = todos.filter(t => t.id !== todo.id);
        localStorage.setItem('todos', JSON.stringify(filteredTodos));
        alert('Todo deleted successfully!');
        navigate('/');
    };

    return (
        <Formik
            initialValues={todo}
            validationSchema={Yup.object({
                title: Yup.string().required('Required'),
                description: Yup.string().required('Required'),
                status: Yup.string().required('Required')
            })}
            onSubmit={handleFormSubmit}
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
                    <Button onClick={handleDelete} color="secondary">Delete</Button>
                </Form>
            )}
        </Formik>
    );
}

export default TodoPage;
