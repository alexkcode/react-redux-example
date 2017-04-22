import React, { Component } from 'react';
import ContactTile from './ContactTile';
import Search from './Search';

class ContactList extends Component {
  constructor(props) {
    super(props);
    state: {contacts: []};
    this._getContact();
    this._getContact();
    this._getContact();
    this._getContact();
  };

  _getContact = function(){
    fetch('https://randomuser.me/api/')
    .then((response) => return response.json())
    .then(function(response) {
      this.setState((prevState, props) => {
        prevState.contacts.push(response.results[0]);
        return prevState;
      })
    })
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