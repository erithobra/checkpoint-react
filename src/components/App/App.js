import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import conatacts from '../../contacts.json';

import Header from '../Header/Header';
import ContactList from '../ContactList/ContactList';
import NewContact from '../NewContact/NewContact';

class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      contacts: props.contacts
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => (
          <ContactList />
        )}/>
          <Route exact path="/new-contact" render={() => (
          <NewContact />
        )}/>
        <p>app</p>

      </div>
    )
  }
}

export default App;