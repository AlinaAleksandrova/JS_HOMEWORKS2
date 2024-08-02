import React, { Component } from 'react';
import LogComponent from './components/LogComponent.jsx';

class App extends Component {
  render() {
    return (
        <div>
          <h1>Event Logger</h1>
          <LogComponent />
        </div>
    );
  }
}

export default App;

