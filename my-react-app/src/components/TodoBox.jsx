import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import Item from './Item';

class TodoBox extends Component {
    state = {
        tasks: [],
        text: ''
    };

    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newTask = {
            id: uniqueId(),
            text: this.state.text,
        };

        this.setState(state => ({
            tasks: [newTask, ...state.tasks],
            text: ''
        }));
    };

    handleRemove = (id) => {
        this.setState(state => ({
            tasks: state.tasks.filter(task => task.id !== id)
        }));
    };

    render() {
        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                        <div className="me-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="I am going..."
                                value={this.state.text}
                                onChange={this.handleTextChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>
                <div>
                    {this.state.tasks.map(task => (
                        <Item key={task.id} task={task} onRemove={this.handleRemove} />
                    ))}
                </div>
            </div>
        );
    }
}

export default TodoBox;
