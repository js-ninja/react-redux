import React, { Component } from 'react'

export default class FormComponent extends Component {
    constructor(props) {
        super(props);
        // Set init state
        this.state = this.props.store.getState();

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
                        <label htmlFor="email">Email address:</label>
                        <select className="form-control" id="gender" onChange={this.genderChange} value={this.state.gender}>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                    <div className="float-right">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

    genderChange(event) {
        this.props.store.dispatch({ type: "gender", state: event.target.value });
        event.preventDefault();
    }

    fnameChange(event) {
        this.props.store.dispatch({ type: "fname", state: event.target.value });
        event.preventDefault();
    }

    lnameChange(event) {
        this.props.store.dispatch({ type: "lname", state: event.target.value });
        event.preventDefault();
    }

    emailChange(event) {
        this.props.store.dispatch({ type: "emailid", state: event.target.value });
        event.preventDefault();
    }

    formSubmitted(event) {
        event.preventDefault();
        const currentState = this.props.store.getState();
        // Save using the api
        const payload = {
            first_name: currentState.fname,
            last_name: currentState.lname,
            email: currentState.emailid,
            gender: currentState.gender
        };

        fetch('https://gorest.co.in/public-api/users?_format=json&access-token=QeUtQCgdsAAeCdFbhUz1h6-HdVJ30zv8xMYR', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => res.json())
            .then(res => {
                //Todo Check whether the form was submitted successfully and only then resetfom
                alert('Form Submitted successfully');
                this.resetForm();
            });
    }

    resetForm() {
        this.props.store.dispatch({ type: "reset", state: { fname: '', lname: '', emailid: '', gender: 'male' } });
    }
}
