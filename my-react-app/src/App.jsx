import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import EditPostForm from './features/posts/EditPostForm';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>RTK Query Blog</h1>
                <Routes>
                    <Route path="/" element={<PostsList />} />
                    <Route path="/add-post" element={<AddPostForm />} />
                    <Route path="/edit-post/:postId" element={<


