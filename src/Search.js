import React, { Component } from 'react';
import ContactTile from './ContactTile';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {contacts: props.contacts}
  }

	render() {
    var itemList = this.state.contacts;
    var filteredList = [];

    if (this.state.searchString>0) {
      filteredList = itemList.filter(function(item) {
        return item.toLowerCase().match( this.state.searchString );
      });
    }

    return (
      <div>
        <input value={this.state.searchString} placeholder='Search name'/>
        <ul>
          {filteredList.map((contact) => {
            return this.state.contacts.map((contact, index) => {
                return ( <ContactTile Key={index} Contact={contact}/> );
              })
            })
          })}
        </ul>
      </div>
  	)
  }
};

export default Search;
