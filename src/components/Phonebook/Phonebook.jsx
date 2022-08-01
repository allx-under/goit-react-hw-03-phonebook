import React, { Component } from 'react';

import Button from 'components/Button/Button';
import Contacts from 'components/Contacts/Contacts';
import Title from 'components/Title/Title';

import { nanoid } from 'nanoid';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onSubmitAddToContacts = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const contact = {
      name,
      id: nanoid(),
    };

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
    e.target.reset();
  };

  render() {
    return (
      <>
        <Title title="Phonebook" />
        <form onSubmit={this.onSubmitAddToContacts}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <Button />
        </form>
        <Title title="Contacts" />
        <Contacts nameList={this.state.contacts} />
      </>
    );
  }
}

export default Phonebook;
