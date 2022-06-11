import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const one = useRef(true);

  useEffect(() => {
    if (one.current) {
      const data = JSON.parse(localStorage.getItem('contacts'));
      if (data?.length) setContacts(data);
      one.current = false;
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);
  //
  const addContact = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} already exists`);
      return;
    }
    setContacts(prev => {
      const contact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      };
      return [...prev, contact];
    });
  };

  function getFilteredContacts() {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const filterContacts = e => {
    setFilter(e.target.value);
  };

  const remove = name => {
    setContacts(prev => prev.filter(contact => contact.name !== name));
  };

  const data = getFilteredContacts();
  return (
    <div className="app">
      <div className="phone-book">
        <h1>Phonebook</h1>
        <Form onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter onChange={filterContacts} value={filter} />
        <ContactList contacts={data} onClick={remove} />
      </div>
    </div>
  );
}
