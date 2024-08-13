import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { task, onRemove } = this.props;
        return (
            <div className="row">
                <div className="col-auto">
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => onRemove(task.id)}>
                        -
                    </button>
                </div>
                <div className="col">{task.text}</div>
            </div>
        );
    }
}

export default Item;
