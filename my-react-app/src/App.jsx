import React, { Component } from 'react';
import Modal from './Modal';

class App extends Component {
  state = { modalOpen: false };

  toggleModal = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  }

  render() {
    return (
        <div className="container">
          <button onClick={this.toggleModal} className="btn btn-primary">
            {this.state.modalOpen ? 'Close Modal' : 'Open Modal'}
          </button>

          <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
            <Modal.Header toggle={this.toggleModal}>Modal Title</Modal.Header>
            <Modal.Body>
              Here is some important text or error or anything.
            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.toggleModal} className="btn btn-warning">Close</button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}

export default App;

