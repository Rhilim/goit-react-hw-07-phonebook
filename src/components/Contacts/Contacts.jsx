import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactSlice';
import { getFilter } from 'redux/filterSlice';
import { StyledDeleteBtn, StyledList, StyledListItem } from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterSelector = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterSelector.toLowerCase())
  );

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <StyledList>
        {filteredContacts.map(el => (
          <StyledListItem key={el.id}>
            {el.name}: {el.number}
            <StyledDeleteBtn onClick={() => handleDelete(el.id)}>
              delete
            </StyledDeleteBtn>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
};
