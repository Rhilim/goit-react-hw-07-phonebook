import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6512085eb8c6ce52b39541d9.mockapi.io';

// Операція для отримання контактів
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Операція для додавання контакту
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Операція для видалення контакту за id
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Операція для видалення всіх контактів
export const deleteAllContacts = createAsyncThunk(
  'contacts/deleteAllContacts',
  async (_, thunkAPI) => {
    try {
      await axios.delete('/contacts');
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
