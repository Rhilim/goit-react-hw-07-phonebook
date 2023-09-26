import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
  filter: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getFilter = state => state.filter.filter;
