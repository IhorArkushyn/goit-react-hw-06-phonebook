import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import * as S from './App.styled';

const LS_KEY = 'current_contacts';

function App() {
  const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(initialState);

  useEffect(() => {
    const storedContacts = localStorage.getItem(LS_KEY);
    const parsedContacts = JSON.parse(storedContacts);
    console.log(parsedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const normalizedFind = name.toLowerCase();
    const findName = contacts.find(
      contact => contact.normalizedFind === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    const findNumber = contacts.find(contact => contact.number === number);
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }

    setContacts(prevContacts => [
      { id: nanoid(), name, number },
      ...prevContacts,
    ]);
  };

  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const visibleContacts = getContacts();

  return (
    <S.Container>
      <S.Section title="Phonebook">
        <S.SectionTitle>Phonebook</S.SectionTitle>
        <ContactForm onSubmit={addContact} />
      </S.Section>
      <S.Section title="Contacts">
        <S.SectionTitle>Contacts</S.SectionTitle>
        <Filter value={filter} onChange={handleFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </S.Section>
    </S.Container>
  );
}

export default App;
