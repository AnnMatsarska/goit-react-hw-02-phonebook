import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
