import React, { useState } from 'react';
import { useAddPostMutation } from '../features/apiSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [addPost] = useAddPostMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        await addPost({ title, body: title, userId: 1 });
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add new post"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddPostForm;
