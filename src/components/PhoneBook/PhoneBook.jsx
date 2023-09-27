import React from 'react';
import { Formik } from 'formik';
import {
  StyledBtnReset,
  StyledButton,
  StyledError,
  StyledField,
  StyledForm,
  StyledLabel,
  Wrapper,
} from 'components/PhoneBook/PhoneBook.styled';
import { AiOutlineDelete, AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import toast, { Toaster } from 'react-hot-toast';
import { deleteAllContactsUI, getContacts } from 'redux/contactSlice';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleReset = () => {
    dispatch(deleteAllContactsUI());
  };

  const handleAddContact = newName => {
    const findContact = contacts.find(
      item => item.name.toLowerCase() === newName.name.toLowerCase()
    );
    if (findContact) {
      return toast.error(`${newName.name} is already in the phonebook`, {
        duration: 4000,
        position: 'top-center',
      });
    } else {
      dispatch(addContact({ ...newName }));
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        onSubmit={(values, actions) => {
          handleAddContact(values);
          actions.resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel> Name </StyledLabel>
            <StyledField
              id="firstName"
              placeholder="Jane Smith"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я
              ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters,
              apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
              Charles de Batz de Castelmore d'Artagnan"
              required
            ></StyledField>
            <StyledError name="name" component="div" />
            <StyledLabel> Number </StyledLabel>
            <StyledField
              type="tel"
              name="phone"
              placeholder="123456789"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            ></StyledField>

            <Wrapper>
              <StyledButton type="submit">
                <AiOutlinePlusCircle size={25} />
                Add contact
              </StyledButton>
              <StyledBtnReset type="button" onClick={handleReset}>
                <AiOutlineDelete size={25} />
                Delete all contacts
              </StyledBtnReset>
            </Wrapper>
          </StyledForm>
        )}
      </Formik>
      <Toaster />
    </>
  );
};
