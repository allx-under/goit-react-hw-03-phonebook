import React, { Component } from 'react';
import styled from 'styled-components';
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
    const savedNames = this.state.contacts.map(contact => contact.name);
    if (savedNames.includes(name)) {
      alert(`${name} is already in contacts.`);
      e.target.reset();
      return;
    }

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
    e.target.reset();
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onClickDelete = idToDel => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== idToDel),
    });
  };

  render() {
    return (
      <Container>
        <Title title="Phonebook" />
        <ContactsForm onSubmit={this.onSubmitAddToContacts} />
        <Title title="Contacts" />
        <ContactsFilter
          onChange={this.onInputChange}
          filter={this.state.filter}
        />
        <Contacts
          onClick={this.onClickDelete}
          nameList={this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
          )}
        />
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  margin: 0 20px;
`;
