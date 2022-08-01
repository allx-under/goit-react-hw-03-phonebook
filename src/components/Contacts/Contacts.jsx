import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    const { nameList } = this.props;
    return (
      <ul>
        {nameList.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
