import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import * as S from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch(); // функція, яка дозволяє відправити екшн
  const contacts = useSelector(getContacts); // отримуємо всі контакти зі стейта

  const handleSubmit = event => {
    event.preventDefault(); // відміняємо стандартну поведінку браузера

    // створюємо об'єкт контакту
    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };

    // перевіряємо чи такий контакт вже є в списку
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase() // переводимо в нижній регістр і порівнюємо
    );

    // якщо такий контакт вже є, то виводимо повідомлення
    if (isExist) {
      return toast.warn(`${contact.name} is already in contacts.`);
    }

    dispatch(addContact(contact)); // відправляємо екшн з контактом в стейт
    event.currentTarget.reset(); // очищаємо форму
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label htmlFor={nanoid()}>
        Name
        <S.Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </S.Label>

      <S.Label htmlFor="numberId">
        Number
        <S.Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </S.Label>

      <S.Button type="submit">Add contact</S.Button>
    </S.Form>
  );
};
