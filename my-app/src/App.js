import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store';
import PostsList from './components/PostsList';
import AddPostForm from './components/AddPostForm';
import DeletePostButton from "./components/DeletePostButton";
import EditPostForm from "./components/EditPostForm";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <h1>Posts</h1>
                    <Routes>
                        <Route path="/" element={<PostsList />} />
                        <Route path="/add-post" element={<AddPostForm />} />
                        <Route path="/edit-post/:id" element={<EditPostForm />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
