import React, { Component } from 'react';

import Contacts from 'components/Contacts/Contacts';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import Title from 'components/Title/Title';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmitAddToContacts = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
    console.log(e.currentTarget);
    this.reset();
  };

  reset = initState => {
    this.setState({ ...initState });
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        <Title title="Phonebook" />
        <ContactsForm onSubmit={this.onSubmitAddToContacts} />
        <Title title="Contacts" />
        <ContactsFilter
          onChange={this.onInputChange}
          filter={this.state.filter}
        />
        <Contacts
          nameList={this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
          )}
        />
      </>
    );
  }
}

export default App;
