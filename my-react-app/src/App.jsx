import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Collapse from './components/Collapse.jsx';

class App extends Component {
  render() {
    const text = "collapse me";
    return (
        <div>
          <Collapse text={text} opened={false} />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

