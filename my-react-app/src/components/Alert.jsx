import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
    render() {
        const { text, type } = this.props;

        if (!text || !type) {
            return null;
        }

        return (
            <div className={`alert alert-${type}`} role="alert">
                {text}
            </div>
        );
    }
}

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'
    ]).isRequired
};

export default Alert;

