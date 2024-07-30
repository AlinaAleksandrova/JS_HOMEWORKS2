import React, { Component } from 'react';
import Progress from './components/Progress.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="container mt-5">
            <h2>Progress Bar Example</h2>
            <Progress percentage={40} />
            <Progress percentage={70} />
            <Progress percentage={90} />
          </div>
        </div>
    );
  }
}

export default App;
