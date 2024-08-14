import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import AllTodosPage from './components/AllTodosPage';
import TodoPage from './components/TodoPage';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/todos" element={<AllTodosPage />} />
                        <Route path="/todo/:id" element={<TodoPage />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;





