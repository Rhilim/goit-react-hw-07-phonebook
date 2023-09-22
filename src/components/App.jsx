import { Toaster } from 'react-hot-toast';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { StyledTitle } from './PhoneBook/PhoneBook.styled';
import { Wrapper } from './Wrapper';

export const App = () => {
  return (
    <Wrapper>
      <StyledTitle>Phonebook</StyledTitle>
      <PhoneBook />
      <StyledTitle>Contacts</StyledTitle>
      <Filter />
      <Contacts />
      <Toaster />
    </Wrapper>
  );
};

export default App;
