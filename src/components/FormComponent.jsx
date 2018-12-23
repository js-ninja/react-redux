import React, { Component } from 'react'

export default class FormComponent extends Component {
    constructor(props) {
        super(props);
        // Set init state
        this.state = {
            fname: '',
            lname: '',
            emailid: '',
            gender: 'male'
        }

        //Bind onchange event to this class
        this.fnameChange = this.fnameChange.bind(this);
        this.lnameChange = this.lnameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.formSubmitted = this.formSubmitted.bind(this);
    }
    render() {
        return (
            <div className="container margin-top">
                <h3>User details.</h3>
                <form onSubmit={this.formSubmitted}>
                    <div className="form-group">
                        <label htmlFor="fname">First Name:</label>
                        <input type="text" className="form-control" id="fname" value={this.state.fname} onChange={this.fnameChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" className="form-control" id="lname" value={this.state.lname} onChange={this.lnameChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" value={this.state.emailid} onChange={this.emailChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Gender:</label>
                        <br />
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" value="male" name="gender" onChange={this.genderChange} checked={this.state.gender === 'male'} />Male
                    </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" value="female" name="gender" onChange={this.genderChange} checked={this.state.gender === 'female'} />Female
                    </label>
                        </div>
                    </div>
                    <div className="float-right">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

    genderChange(event) {
        this.setState({ gender: event.target.value });
    }

    fnameChange(event) {
        this.setState({ fname: event.target.value });
        event.preventDefault();
    }

    lnameChange(event) {
        this.setState({ lname: event.target.value });
        event.preventDefault();
    }

    emailChange(event) {
        this.setState({ emailid: event.target.value });
        event.preventDefault();
    }

    formSubmitted(event) {
        console.log(this.state);
        this.resetForm();
        event.preventDefault();
    }

    resetForm() {
        this.setState({ fname: '', lname: '', emailid: '', gender: 'male' });
    }
}
