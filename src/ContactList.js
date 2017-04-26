import React, { Component } from 'react';
import ContactTile from './ContactTile';
import Search from './Search';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {contacts: []};
  };

  _getRandomUser() {
    fetch('https://randomuser.me/api/', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => {return response.json()})
    .then(function(json) {
      console.log("randomuser.me response.json(): " + json);
      // this.setState((prevState, props) => {
      //   prevState.contacts.push(json.results[0]);
      //   return prevState;
      // });
      this.state.contacts.push(json.results[0]);
    });
  };

  render() {
    return (
      <div>
        <Search/>
      </div>
    );
  };
};

export default ContactList;
