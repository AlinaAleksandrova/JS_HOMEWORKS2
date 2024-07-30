import React, { Component } from 'react';

class BtnGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: null
        };
    }

    toggleActive = (button) => {
        this.setState({ active: button });
    }

    render() {
        const { active } = this.state;
        return (
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className={`btn btn-secondary ${active === 'left' ? 'active' : ''}`}
                    onClick={() => this.toggleActive('left')}
                >
                    Left
                </button>
                <button
                    type="button"
                    className={`btn btn-secondary ${active === 'right' ? 'active' : ''}`}
                    onClick={() => this.toggleActive('right')}
                >
                    Right
                </button>
            </div>
        );
    }
}

export default BtnGroup;
