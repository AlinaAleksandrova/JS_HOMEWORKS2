import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useAddPostMutation } from '../../services/postsApi';
import { Button, TextField } from '@mui/material';

const AddPostForm = () => {
    const [addPost, { isLoading }] = useAddPostMutation();

    return (
        <div>
            <h1>Add New Post</h1>
            <Formik
                initialValues={{
                    title: '',
                    body: ''
                }}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        await addPost(values).unwrap();
                        resetForm();
                        alert('Post added successfully');
                    } catch (error) {
                        alert('Failed to add post');
                        console.error('Failed to add post', error);
                    }
                }}
            >
                <Form>
                    <Field name="title" as={TextField} label="Title" fullWidth margin="normal" />
                    <Field name="body" as={TextField} label="Body" multiline rows={4} fullWidth margin="normal" />
                    <Button type="submit" color="primary" disabled={isLoading}>
                        Add Post
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default AddPostForm;
