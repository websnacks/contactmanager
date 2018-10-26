import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state, // spread the array...
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state, // spread the array...
        contacts: [action.payload, ...state.contacts]
      };
    case 'UPDATE_CONTACT':
      return {
        ...state, // spread the array...
        contacts: state.contacts.map(
          // loop through the contacts
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    // contacts: [
    //   {
    //     id: 1,
    //     name: 'John Doe',
    //     email: 'johndoe@gmail.com',
    //     phone: '555-555-5555'
    //   },
    //   {
    //     id: 2,
    //     name: 'Karen Smith',
    //     email: 'karen@gmail.com',
    //     phone: '666-666-6665'
    //   },
    //   {
    //     id: 3,
    //     name: 'Henry Johnson',
    //     email: 'henryj@gmail.com',
    //     phone: '777-777-7775'
    //   }
    // ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  // Perform something after content is updated (add/delete/edit)
  // componentDidUpdate() {
  // console.log('did update');
  // }

  async componentDidMount() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    this.setState({
      contacts: response.data
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
