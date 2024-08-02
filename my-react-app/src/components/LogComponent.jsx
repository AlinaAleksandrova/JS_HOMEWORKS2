import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class LogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            log: [0]
        };
    }

    addToLog = (increment) => {
        const { log } = this.state;
        const lastValue = log[0];
        const newValue = increment ? lastValue + 1 : lastValue - 1;
        this.setState({ log: [newValue, ...log] });
    }

    removeFromLog = (index) => {
        const { log } = this.state;
        this.setState({
            log: log.filter((_, idx) => idx !== index)
        });
    }

    render() {
        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={() => this.addToLog(true)}>+</button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => this.addToLog(false)}>-</button>
                </div>
                <div className="list-group">
                    {this.state.log.map((item, index) => (
                        <button key={index} type="button" className="list-group-item list-group-item-action"
                                onClick={() => this.removeFromLog(index)}>
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default LogComponent;
