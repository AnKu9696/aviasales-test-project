import { CounterState, FilterType } from '../types';

export const addFilterToState = (
  state: CounterState,
  payload: FilterType
): FilterType[] | [] => {
  const { filters } = state;
  const isAllInPayload = payload === 'all';
  const filterIndex = filters.includes(payload);

  if (isAllInPayload) {
    if (!filterIndex) {
      return ['all', '0', '1', '2', '3'];
    } else if (filterIndex) {
      return [];
    }
  } else {
    if (filters.includes('all')) {
      return [payload];
    } else if (filterIndex) {
      filters.splice(filters.indexOf(payload), 1);
    } else {
      filters.push(payload);
    }
  }
  return filters;
};
