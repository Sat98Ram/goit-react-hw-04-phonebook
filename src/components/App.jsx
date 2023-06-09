import { useEffect, useState } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Section from './Sectiion/Section';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const LOCAL_STORAGE_CONTACTS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(window.localStorage.getItem('contacts') ?? [])
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  });

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
    localStorage.setItem(LOCAL_STORAGE_CONTACTS_KEY, JSON.stringify(contacts));
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
    // localStorage.setItem(LOCAL_STORAGE_CONTACTS_KEY, JSON.stringify(contacts));
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

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts.length !== this.state.contacts.length) {
//       localStorage.setItem(
//         LOCAL_STORAGE_CONTACTS_KEY,
//         JSON.stringify(this.state.contacts)
//       );
//     }
//   }
