import { FilterType, SortType } from '../../types';
import { RootState } from '../store';

export const selectFilters = (state: RootState) =>
  state.app.filters as FilterType[];
export const selectSort = (state: RootState) => state.app.sort as SortType;
