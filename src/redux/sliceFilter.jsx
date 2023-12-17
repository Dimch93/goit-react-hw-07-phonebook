import { createSlice } from '@reduxjs/toolkit';

const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    qwery(state, action) {
      return (state = action.payload);
    },
  },
});

export const { qwery, filter } = sliceFilter.actions;
export const filterReducer = sliceFilter.reducer;
