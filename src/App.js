import React, { Component } from "react";
import "./App.css";

import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = (newContact) => {
    // console.log(newContact);
    const validContact = this.state.contacts.find(
      (contact) => contact.name === newContact.name
    );
    // console.log(validContact);

    if (validContact) {
      alert(`${validContact.name} is already in contacts`);
      return;
    }
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  handleChangeFilter = (e) => {
    this.setState({ filter: e.target.value });
    // console.log(e);
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) => {
      // console.log(contact.name);
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChangeFilter} />
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}

export default App;
