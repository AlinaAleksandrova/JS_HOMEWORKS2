import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Modal extends Component {
    render() {
        const { isOpen, children } = this.props;
        const displayStyle = isOpen ? { display: 'block', opacity: 1 } : { display: 'none' };
        return (
            <div className="modal" style={displayStyle} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

class ModalHeader extends Component {
    render() {
        const { toggle, children } = this.props;
        return (
            <div className="modal-header">
                <h5 className="modal-title">{children}</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

class ModalBody extends Component {
    render() {
        return (
            <div className="modal-body">
                {this.props.children}
            </div>
        );
    }
}

class ModalFooter extends Component {
    render() {
        return (
            <div className="modal-footer">
                {this.props.children}
            </div>
        );
    }
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default class App extends Component {
    state = { modal: false };

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    render() {
        return (
            <div>
                <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
                <Modal isOpen={this.state.modal}>
                    <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="modal-close-button btn btn-secondary" onClick={this.toggle}>Cancel</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
