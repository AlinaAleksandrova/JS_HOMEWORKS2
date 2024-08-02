import React from 'react';

class Item extends React.Component {
    handleRemove = () => {
        this.props.onRemove(this.props.id);
    }

    render() {
        return (
            <div className="row">
                <div className="col-auto">
                    <button type="button" className="btn btn-primary btn-sm" onClick={this.handleRemove}>-</button>
                </div>
                <div className="col">{this.props.task}</div>
                <hr />
            </div>
        );
    }
}

export default Item;
