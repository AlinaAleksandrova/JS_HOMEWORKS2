import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/add-post">Add New Post</Link></li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<PostsList/>}/>
                        <Route path="/add-post" element={<AddPostForm/>}/>
                        <Route path="/edit-post/:id" element={<EditPostForm/>}/>
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
