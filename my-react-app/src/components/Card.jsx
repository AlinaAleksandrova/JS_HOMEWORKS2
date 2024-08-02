import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Card extends Component {
    render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        );
    }
}

class CardBody extends Component {
    render() {
        return (
            <div className="card-body">
                {this.props.children}
            </div>
        );
    }
}

class CardTitle extends Component {
    render() {
        return (
            <h4 className="card-title">
                {this.props.children}
            </h4>
        );
    }
}

class CardText extends Component {
    render() {
        return (
            <p className="card-text">
                {this.props.children}
            </p>
        );
    }
}

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;
