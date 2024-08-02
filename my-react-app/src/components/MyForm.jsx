import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            address: '',
            city: '',
            country: 'Choose',
            acceptRules: false,
            submitted: false
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
    }

    handleBack = () => {
        this.setState({ submitted: false });
    }

    renderForm = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="address" className="col-form-label">Address</label>
                    <textarea className="form-control" name="address" id="address" placeholder="1234 Main St" value={this.state.address} onChange={this.handleInputChange}></textarea>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <input type="text" className="form-control" name="city" id="city" value={this.state.city} onChange={this.handleInputChange} />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="country" className="col-form-label">Country</label>
                    <select id="country" name="country" className="form-control" value={this.state.country} onChange={this.handleInputChange}>
                        <option>Choose</option>
                        <option value="argentina">Argentina</option>
                        <option value="ukraine">Ukraine</option>
                        <option value="china">China</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="rules">
                            <input id="rules" type="checkbox" name="acceptRules" className="form-check-input" checked={this.state.acceptRules} onChange={this.handleInputChange} />
                            Accept Rules
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }

    renderTable = () => {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.handleBack}>Back</button>
                <table className="table">
                    <tbody>
                    {Object.keys(this.state).sort().map(key => (
                        key !== 'submitted' && (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{this.state[key].toString()}</td>
                            </tr>
                        )
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        return this.state.submitted ? this.renderTable() : this.renderForm();
    }
}

export default MyForm;
