import React, { Component } from "react";

export default class ApiCalls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }
    componentDidMount () {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
          console.log(data);
        })
        .catch(console.log)
    }
    render () {
        return (
            <div>
            <br/><br/>
          <center><h1>Contact List</h1></center>
          {this.state.contacts.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p class="card-text">{contact.company.catchPhrase}</p>
              </div>
            </div>
          ))}
        </div>
        );
    }
}