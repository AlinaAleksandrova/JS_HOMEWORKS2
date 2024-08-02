import React from 'react';
import Item from './Item';
import { uniqueId } from 'lodash';

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            currentText: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ currentText: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.currentText) return;

        const newTask = {
            id: uniqueId(),
            task: this.state.currentText,
        };

        this.setState({
            tasks: [newTask, ...this.state.tasks],
            currentText: '',
        });
    }

    handleRemove = (id) => {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        });
    }

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
                                value={this.state.currentText}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                <div>
                    {this.state.tasks.map(task => (
                        <Item key={task.id} id={task.id} task={task.task} onRemove={this.handleRemove} />
                    ))}
                </div>
            </div>
        );
    }
}

export default TodoBox;
