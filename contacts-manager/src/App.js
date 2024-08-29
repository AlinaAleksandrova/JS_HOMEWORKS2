import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<ContactList />} />
                    <Route path="/add" element={<ContactForm />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;


