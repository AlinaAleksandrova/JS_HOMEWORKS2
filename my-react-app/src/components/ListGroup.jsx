import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListGroup extends Component {
    render() {
        const { children } = this.props;

        return (
            <ul className="list-group">
                {React.Children.map(children, (child, index) => (
                    <li key={index} className="list-group-item">
                        {child}
                    </li>
                ))}
            </ul>
        );
    }
}

ListGroup.propTypes = {
    children: PropTypes.node.isRequired
};

export default ListGroup;
