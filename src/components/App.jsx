import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Box from './Box/Box';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = (submitName, submitNumber) => {
    if (this.state.contacts.find(contact => contact.name === submitName)) {
      return alert(`${submitName} is already in contacts.`);
    }
    this.setState(PreviousState => {
      return {
        contacts: [
          ...PreviousState.contacts,
          {
            id: nanoid(),
            name: submitName,
            number: submitNumber,
          },
        ],
      };
    });
  };

  deleteContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  handleFilterChange = filter => this.setState({ filter });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box>
        <Section title="PhoneBook"></Section>
        <ContactForm onSubmit={this.onSubmit} />
        <div>
          <Section title="Contacts"></Section>
          <Filter filter={filter} onChange={this.handleFilterChange} />
          <ContactList
            onRemove={this.handleRemoveContact}
            contacts={visibleContacts}
          />
        </div>
      </Box>
    );
  }
}

export default App;
