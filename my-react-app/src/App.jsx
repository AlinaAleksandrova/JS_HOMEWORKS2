import React, { Component } from 'react';
import TodoBox from './components/TodoBox';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div className="container mt-3">
          <h1>Todo List</h1>
          <TodoBox />
        </div>
    );
  }
}

export default App;

