import React, { Component } from 'react';
import Alert from './components/Alert.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Alert type="warning" text="What is love?" />
                <Alert type="success" text="It works!" />
                <Alert type="danger" text="Error occurred!" />
            </div>
        );
    }
}

export default App;

