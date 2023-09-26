import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

import { Container } from './Container.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const hasNameDuplicate = this.state.contacts.some(
      contact => contact.name === data.name
    );
    const hasNamberDuplicate = this.state.contacts.some(
      contact => contact.number === data.number
    );
    if (hasNameDuplicate) {
      alert(` ${data.name} is already in contacts`);
      return;
    }
    if (hasNamberDuplicate) {
      alert(` ${data.number} is already in contacts`);
      return;
    }
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

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  contactsFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <Container>
        <Section title="PHONEBOOK">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="CONTACTS">
          {this.state.contacts.length !== 0 && (
            <Filter onChange={this.handleChange} filter={this.state.filter} />
          )}
          <ContactList
            contacts={this.contactsFilter()}
            handleDelete={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}
