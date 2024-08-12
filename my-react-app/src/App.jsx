import React, { Component } from 'react';
import PostCatalog from './components/PostCatalog';

class App extends Component {
  render() {
    return (
        <div className="app">
          <h1>Post Catalog</h1>
          <PostCatalog />
        </div>
    );
  }
}

export default App;

