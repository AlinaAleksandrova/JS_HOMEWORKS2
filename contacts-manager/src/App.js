import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add">Add New Contact</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<ContactList/>}/>
                    <Route path="/add" element={<ContactForm/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;


