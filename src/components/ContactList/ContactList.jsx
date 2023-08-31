import style from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsFiltered,
  selectError,
  selectIsLoading,
} from 'redux/selector';

const ContactList = () => {
  const filteredContacts = useSelector(selectContactsFiltered);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <ul className={style.conList}>
      {isLoading && !error ? (
        <p>Loading...</p>
      ) : contacts.length === 0 && !error ? (
        <p>Add your first number in phonebook</p>
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} contact={{ id, name, number }} />
        ))
      )}
    </ul>
  );
};

export default ContactList;
