import React, { Component } from 'react';

class ContactsFilter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <label>
        Find contacts by name
        <input name="filter" onChange={onChange} value={filter} />
      </label>
    );
  }
}

export default ContactsFilter;
