import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    const { nameList, onClick } = this.props;
    return (
      <ul>
        {nameList.map(({ name, id, number }) => (
          <li key={id}>
            <p>
              {name}: {number}{' '}
              <button onClick={() => onClick(id)} type="button">
                Delete
              </button>
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
