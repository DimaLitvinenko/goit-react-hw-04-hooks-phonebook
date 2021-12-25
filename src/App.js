import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.scss';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import ContactsList from './components/ContactsList/ContactsList';
import ContactsForm from './components/ContactsForm/ContactsForm';
import Filter from './components/Filter/Filter';
import earlyAddedContacts from '../src/data/contacts.json';

export default function App(props) {
   const [contacts, setContacts] = useState(props.contacts);
   const [filter, setFilter] = useState(props.filter);

   useEffect(() => {
      const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
      parsedContacts && setContacts(parsedContacts);
   }, []);

   useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
   }, [contacts]);

   const addContact = ({ name, number }) =>
      contacts.some(contact => name === contact.name)
         ? alert(`${name} is already in contacts`)
         : setContacts(prevState => [
              ...prevState,
              { id: nanoid(5), name, number },
           ]);

   const deleteContact = contactId =>
      setContacts(prevState =>
         prevState.filter(contact => contact.id !== contactId),
      );

   const findContactByName = event => setFilter(event.currentTarget.value);

   const filterContactsList = () =>
      contacts.filter(contact =>
         contact.name.toLowerCase().includes(filter.toLowerCase()),
      );

   return (
      <main className="App">
         <Container>
            <Section>
               <h1 className="app-title">Phonebook</h1>
               <ContactsForm addContactHandler={addContact} />
            </Section>
            <Section>
               <h2 className="app-title">Contacts</h2>
               <Filter
                  contactName={filter}
                  findContactHandler={findContactByName}
               />
               <ContactsList
                  contacts={filterContactsList()}
                  deleteContactHandler={deleteContact}
               />
            </Section>
         </Container>
      </main>
   );
}

App.defaultProps = {
   contacts: earlyAddedContacts,
   filter: '',
};
