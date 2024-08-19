import React from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { useGetPostByIdQuery, useUpdatePostMutation } from '../../services/postsApi';
import { Button, CircularProgress, TextField } from '@mui/material';

const EditPostForm = () => {
    const { postId } = useParams();
    const { data: post, isFetching } = useGetPostByIdQuery(postId);
    const [updatePost, { isLoading }] = useUpdatePostMutation();

    if (isFetching) {
        return <CircularProgress />;
    }

    if (!post) {
        return <p>Post not found!</p>;
    }

    return (
        <div>
            <h1>Edit Post</h1>
            <Formik
                initialValues={{
                    title: post.title,
                    body: post.body
                }}
                enableReinitialize
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        await updatePost({ id: postId, ...values }).unwrap();
                        alert('Post updated successfully');
                    } catch (error) {
                        alert('Failed to update post');
                        console.error('Failed to update post', error);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                <Form>
                    <Field name="title" as={TextField} label="Title" fullWidth margin="normal" />
                    <Field name="body" as={TextField} label="Body" multiline rows={4} fullWidth margin="normal" />
                    <Button type="submit" color="primary" disabled={isLoading}>
                        Update Post
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default EditPostForm;
