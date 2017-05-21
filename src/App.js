import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './ContactList.js'
import Search from './Search.js'

class App extends Component {

  // constructor() {
  //
  // };

  render() {
    return (<div>
      <ContactList />
    </div>)
  }

};

export default App;
