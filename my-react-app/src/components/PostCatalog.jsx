import React, { Component } from 'react';

class PostCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
            error: null
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const posts = await response.json();
            this.setState({ posts, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    }

    render() {
        const { posts, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div className="posts">
                <ul className="posts__list">
                    {posts.map(post => (
                        <li key={post.id} className="posts_single-post" data-post-id={post.id}>
                            <h3 className="posts__post-title">{post.title}</h3>
                            <p className="posts__post-description">{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PostCatalog;
