import React, { Component } from 'react';
import ListGroup from './components/ListGroup.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div className="container">
          <ListGroup>
            <p>one</p>
            <p>two</p>
          </ListGroup>
        </div>
    );
  }
}

export default App;

