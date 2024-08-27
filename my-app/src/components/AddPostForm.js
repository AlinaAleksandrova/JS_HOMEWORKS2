import React, { useState } from 'react';
import { useAddPostMutation } from '../services/postsApi';

function AddPostForm() {
    const [title, setTitle] = useState('');
    const [addPost, { isLoading }] = useAddPostMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title.trim()) return;

        await addPost({ title, body: title, userId: 1 })
            .unwrap()
            .then(post => {
                console.log('Post added successfully', post);
                setTitle('');
            })
            .catch(error => console.error('Failed to add post', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title"
            />
            <button type="submit" disabled={isLoading}>Add Post</button>
        </form>
    );
}

export default AddPostForm;
