import React, { Component } from 'react';
import ContactTile from './ContactTile';
import Search from './Search';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {contacts: []};
    this.getRandomUser();
    this.getRandomUser();
    this.getRandomUser();
    this.getRandomUser();
    this.getRandomUser();
  };

  getRandomUser() {
    fetch('https://randomuser.me/api/?format=json,nat=us').then((response) => {
      if(response.ok) {
        console.log("reponse from website is fine ...");
        return response.json();
      } else {
        console.log("response was not fine...");
      }
    }).then((json) => {
      console.log("randomuser.me response.json(): " + JSON.stringify(json.results[0]));
      // this.setState((prevState, props) => {
      //   prevState.contacts.push(json.results[0]);
      //   return prevState;
      // });
      // console.log(this.state.contacts[0])
      this.setState({contacts: this.state.contacts.concat(json.results[0])});
    });
  }

  render() {
    return (
      <div>
        <Search contacts={this.state.contacts} />
      </div>
    );
  };
};

export default ContactList;
