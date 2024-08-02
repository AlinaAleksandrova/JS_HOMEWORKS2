import React, { Component } from 'react';
import MyForm from './components/MyForm.jsx';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Welcome to the Form Example</h1>
          <MyForm />
        </div>
    );
  }
}

export default App;

