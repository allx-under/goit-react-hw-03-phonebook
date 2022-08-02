import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    const { nameList } = this.props;
    return (
      <ul>
        {nameList.map(({ name, id, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
