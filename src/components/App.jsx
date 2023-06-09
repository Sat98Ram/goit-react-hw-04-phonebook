import { useEffect, useState } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Section from './Sectiion/Section';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const { name } = contact;
    const isExist = name =>
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
    if (isExist(name)) {
      alert(`contact already exist`);
      return;
    }
    setContacts([...contacts, contact]);
  };

  const searchFilter = ev => {
    const { value } = ev.target;
    setFilter(value);
  };

  const filterContacts = ev => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContacts();

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <Phonebook onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChange={searchFilter} />{' '}
        <Contacts contacts={filteredContacts} deleteContact={deleteContact} />
      </Section>
    </div>
  );
};
