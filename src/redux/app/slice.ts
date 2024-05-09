import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from '../../types';
import { addFilterToState } from '../../helpers/addFiltersToState';

const initialState: CounterState = {
  filters: ['all', '0', '1', '2', '3'],
  sort: 'cheapest',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addFilter: (state, { payload }) => {
      state.filters = addFilterToState(state, payload);
    },
    addSort: (state, { payload }) => {
      state.sort = payload;
    },
  },
});

export const { addFilter, addSort } = appSlice.actions;

export default appSlice.reducer;
