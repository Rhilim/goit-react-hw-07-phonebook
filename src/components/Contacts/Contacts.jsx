import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactSlice';
import { deleteContact, fetchContacts } from 'redux/operations';
import { StyledDeleteBtn, StyledList, StyledListItem } from './Contacts.styled';
import { useEffect } from 'react';
import { getFilter } from 'redux/filterSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const error = useSelector(state => state.contacts.error);
  const filterSelector = useSelector(getFilter);

  const handleDelete = async contactId => {
    try {
      deleteContact(contactId);
      dispatch(deleteContact(contactId));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterSelector.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchContacts());
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      {contacts > 0 ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <StyledList>
          {filteredContacts.map(el => (
            <StyledListItem key={el.id}>
              {el.name}: {el.phone}
              <StyledDeleteBtn onClick={() => dispatch(handleDelete(el.id))}>
                delete
              </StyledDeleteBtn>
            </StyledListItem>
          ))}
        </StyledList>
      )}
    </>
  );
};
