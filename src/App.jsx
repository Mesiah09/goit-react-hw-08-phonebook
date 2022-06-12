import { useState, useEffect, useCallback } from 'react';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import {
  getContacts,
  getLoading,
  getError,
} from './redux/contacts/contacts-selectors';

import * as operations from 'redux/contacts/contacts-operations';

import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import s from './app.module.scss';

const App = () => {
  const contacts = useSelector(getContacts, shallowEqual);
  const loading = useSelector(getLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback(
    e => {
      setFilter(e.target.value);
    },
    [setFilter]
  );

  const deleteContact = id => {
    dispatch(operations.deleteContact(id));
  };

  const getFilteredContacts = useCallback(() => {
    if (!filter) {
      return contacts;
    }
    const filterToLover = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const result = name.toLowerCase().includes(filterToLover);
      return result;
    });
    return filteredContacts;
  }, [contacts, filter]);

  const addContactBySubmit = props => {
    dispatch(operations.addContact(props));
  };

  return (
    <div className={s.app}>
      <div className={s.phonebook}>
        <h1>Phonebook</h1>
        <Form addContactBySubmit={addContactBySubmit} />
        <h2>Contacts</h2>
        <Filter handleChange={handleChange} filter={filter} />
        {error && <p>Whoops...Please try later</p>}
        {loading && <p>Loading...</p>}
        {Boolean(contacts.length) && (
          <ContactList
            contacts={getFilteredContacts()}
            deleteContact={deleteContact}
          />
        )}
      </div>
    </div>
  );
};

export default App;
