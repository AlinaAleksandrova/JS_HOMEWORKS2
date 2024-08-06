import React, { Component } from 'react';
import { Editor } from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

class MarkdownEditor extends Component {
    editorRef = React.createRef();

    componentDidMount() {
        this.editor = new Editor({
            el: this.editorRef.current,
            hideModeSwitch: true,
        });

        this.editor.addHook('change', () => {
            if (this.props.onContentChange) {
                this.props.onContentChange(this.editor.getMarkdown());
            }
        });
    }

    componentWillUnmount() {
        this.editor.destroy();
    }

    render() {
        return (
            <div ref={this.editorRef}></div>
        );
    }
}

export default MarkdownEditor;
