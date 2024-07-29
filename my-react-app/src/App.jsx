import React, { Component } from 'react';
import Card from './components/Card.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container mt-5">
                    <Card title="Hi" />
                    <Card text="How are you?" />
                    <Card title="Hi" text="How are you?" />
                </div>
            </div>
        );
    }
}

export default App;
