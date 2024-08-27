import React from 'react';
import { useGetPostsQuery } from '../services/postsApi';

function PostsList() {
    const { data: posts, isLoading, isError } = useGetPostsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error occurred!</div>;

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <h4>{post.id}. {post.title}</h4>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
}

export default PostsList;

