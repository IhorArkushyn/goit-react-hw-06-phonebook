import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { ContactItem } from 'components/ContactItem/ContactItem';
import * as S from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts); // функція, яка дозволяє витягнути дані зі стейта
  const filter = useSelector(getFilter);
  const dispatch = useDispatch(); // функція, яка дозволяє відправити екшн

  // фільтруємо контакти по значенню фільтра
  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id)); // відправляємо екшн
  };

  // якщо контактів немає, то виводимо повідомлення
  if (!filteredContacts?.length) {
    return <S.Text>No contacts found.</S.Text>;
  }

  return (
    <S.List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={onDeleteContact}
        />
      ))}
    </S.List>
  );
};
