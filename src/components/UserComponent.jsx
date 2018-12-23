import React, { Component } from 'react'

export default class UserComponent extends Component {
    constructor(props) {
        super(props);
        //Initialising state
        this.state = {
            jsonresults: []
        }
    }

    componentDidMount() {
        //Fetching data
        fetch('https://gorest.co.in/public-api/users?_format=json&access-token=QeUtQCgdsAAeCdFbhUz1h6-HdVJ30zv8xMYR')
            .then(data => data.json())
            .then(data => {
                this.setState({ jsonresults: data.result });
            });
    }
    render() {
        return (
            <div className="padding">
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>DOB</th>
                            <th>Phone</th>
                            <th>State</th>
                            <th>Website</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.jsonresults.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{element.id}</td>
                                        <td>{element.name}</td>
                                        <td>{element.email}</td>
                                        <td>{element.address}</td>
                                        <td>{element.dob}</td>
                                        <td>{element.phone}</td>
                                        <td>{element.state}</td>
                                        <td>{element.website}</td>
                                        <td>{element.gender}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        )
    }
}
