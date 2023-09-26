import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactSlice';
import { deleteContact, fetchContacts } from 'redux/operations';
// import { getFilter } from 'redux/filterSlice';
import { StyledDeleteBtn, StyledList, StyledListItem } from './Contacts.styled';
import { useEffect } from 'react';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  // const filterSelector = useSelector(getFilter);

  // const filteredContacts = contacts.items.filter(item =>
  //   item.name.toLowerCase().includes(filterSelector.toLowerCase())
  // );

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchContacts());
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };
      fetchData();
  }, [dispatch]);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
    {isLoading ? (
      <div>Loading...</div>
    ) : error ? (
      <div>Error: {error}</div>
    ) : (
      <StyledList>
        {contacts.map((el) => (
          <StyledListItem key={el.id}>
            {el.name}: {el.phone}
            <StyledDeleteBtn onClick={() => handleDelete()}>
              delete
            </StyledDeleteBtn>
          </StyledListItem>
        ))}
      </StyledList>
    )}
  </>
  );
};
