import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetPostsQuery, useUpdatePostMutation } from '../services/postsApi';

function EditPostForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: post } = useGetPostsQuery(undefined, {
        selectFromResult: ({ data }) => ({ data: data?.find(post => post.id === Number(id)) }),
    });
    const [updatePost, { isLoading }] = useUpdatePostMutation();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
        }
    }, [post]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updatePost({ id, title, body });
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea value={body} onChange={(e) => setBody(e.target.value)} required />
            <button type="submit" disabled={isLoading}>{isLoading ? 'Updating...' : 'Update Post'}</button>
        </form>
    );
}

export default EditPostForm;
