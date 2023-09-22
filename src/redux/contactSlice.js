import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    deleteAllContacts: state => {
      return [];
    },
  },
});

export const { addContact, deleteContact, deleteAllContacts } =
  contactSlice.actions;

export const contactReducer = contactSlice.reducer;

export const getContacts = state => state.contacts;
