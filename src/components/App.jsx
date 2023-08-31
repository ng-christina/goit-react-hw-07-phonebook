import React from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import style from './App.module.css';

const App = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <Form />
      <h1 className={style.title}>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
};
export default App;
