import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Progress extends Component {
    render() {
        const { percentage } = this.props;
        const progressStyle = {
            width: `${percentage}%`
        };

        return (
            <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="progressbar"
                    style={progressStyle}
                >
                </div>
            </div>
        );
    }
}

export default Progress;
