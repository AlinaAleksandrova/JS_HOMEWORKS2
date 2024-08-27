import React from 'react';
import { Button } from '@mui/material';
import { useDeletePostMutation } from '../services/postsApi';

function DeletePostButton({ postId }) {
    const [deletePost, { isLoading }] = useDeletePostMutation();

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            await deletePost(postId);
            alert('Post deleted successfully!');
        }
    };

    return (
        <Button
            color="secondary"
            onClick={handleDelete}
            disabled={isLoading}
        >
            {isLoading ? 'Deleting...' : 'Delete Post'}
        </Button>
    );
}

export default DeletePostButton;
