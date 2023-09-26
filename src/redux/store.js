import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

export const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
