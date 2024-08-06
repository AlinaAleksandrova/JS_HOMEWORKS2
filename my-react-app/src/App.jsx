import React, { Component } from 'react';
import MarkdownEditor from './MarkdownEditor';

class App extends Component {
    handleContentChange = (content) => {
        console.log('Markdown Content:', content);
    }

    render() {
        return (
            <div>
                <MarkdownEditor onContentChange={this.handleContentChange} />
            </div>
        );
    }
}

export default App;


