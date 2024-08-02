import React, { Component } from 'react';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';

class Collapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.opened
        };
    }

    toggleCollapse = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        const { text } = this.props;
        const { isOpen } = this.state;
        const collapseClass = isOpen ? "collapse show" : "collapse";
        const ariaExpanded = isOpen ? "true" : "false";

        return (
            <div>
                <p>
                    <a
                        className="btn btn-primary"
                        data-bs-toggle="collapse"
                        href="#"
                        role="button"
                        aria-expanded={ariaExpanded}
                        onClick={this.toggleCollapse}
                    >
                        Link with href
                    </a>
                </p>
                <div className={collapseClass}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Collapse;
