import React, { Component } from 'react';
import PostCatalog from './components/PostCatalog.jsx';

class App extends Component {
  render() {
    return (
        <div>
          <h1>Blog Posts</h1>
          <PostCatalog />
        </div>
    );
  }
}

export default App;
