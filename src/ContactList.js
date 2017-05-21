import React, { Component } from 'react';
import ContactTile from './ContactTile';
import Search from './Search';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {contacts: [{
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "romain",
        "last": "hoogmoed"
      },
      "location": {
        "street": "1861 jan pieterszoon coenstraat",
        "city": "maasdriel",
        "state": "zeeland",
        "postcode": 69217
      },
      "email": "romain.hoogmoed@example.com",
      "login": {
        "username": "lazyduck408",
        "password": "jokers",
        "salt": "UGtRFz4N",
        "md5": "6d83a8c084731ee73eb5f9398b923183",
        "sha1": "cb21097d8c430f2716538e365447910d90476f6e",
        "sha256": "5a9b09c86195b8d8b01ee219d7d9794e2abb6641a2351850c49c309f1fc204a0"
      },
      "dob": "1983-07-14 07:29:45",
      "registered": "2010-09-24 02:10:42",
      "phone": "(656)-976-4980",
      "cell": "(065)-247-9303"
      }]
    };
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
      this.setState({contacts: this.state.contacts.push(json.results[0])});
    });
  }

  render() {
    this.getRandomUser();
    return (
      <div>
        <Search contacts={this.state.contacts} />
      </div>
    );
  };
};

export default ContactList;
