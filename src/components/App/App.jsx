import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import * as S from './App.styled';


function App() {
  return (
    <S.Container>
      <S.Section title="Phonebook">
        <S.SectionTitle>Phonebook</S.SectionTitle>
        <ContactForm/>
      </S.Section>
      <S.Section title="Contacts">
        <S.SectionTitle>Contacts</S.SectionTitle>
        <Filter/>
        <ContactList/>
        <ToastContainer position="top-center" />
      </S.Section>
    </S.Container>
  );
}

export default App;
