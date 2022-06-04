import { Component } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
export default class App extends Component {
  state = {
    contacts: [...initialState],
    filter: "",
  };

  addContact = (data) => {
    if (this.state.contacts.find((contact) => contact.name === data.name)) {
      alert(`${data.name} already exists`);
      return;
    }
    this.setState((prev) => {
      const contact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      };
      return {
        contacts: [...prev.contacts, contact],
      };
    });
  };
  getFilteredBooks() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  filter = (e) => {
    this.setState({ filter: e.target.value });
  };
  delete = (name) => {
    this.setState((prev) => {
      return {
        contacts: prev.contacts.filter((contact) => contact.name !== name),
      };
    });
  };

  render() {
    const data = this.getFilteredBooks();
    return (
      <div className="app">
        <div className="phone-book">
          <h1>Phonebook</h1>
          <Form onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <Filter onChange={this.filter} value={this.state.filter} />
          <ContactList contacts={data} onClick={this.delete} />
        </div>
      </div>
    );
  }
}
