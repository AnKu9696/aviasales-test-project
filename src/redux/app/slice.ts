import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from '../../types';

const initialState: CounterState = {
  filters: ['all'],
  sort: 'cheapest',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addFilter: (state, { payload }) => {
      const isAllOrNone = payload === 'all' || state.filters.includes('all');

      if (isAllOrNone) {
        state.filters = [payload];
        return;
      }

      const filterIndex = state.filters.indexOf(payload);
      if (filterIndex !== -1) {
        state.filters.splice(filterIndex, 1);
      } else {
        state.filters.push(payload);
      }
    },
    addSort: (state, { payload }) => {
      state.sort = payload;
    },
  },
});

export const { addFilter, addSort } = appSlice.actions;

export default appSlice.reducer;
