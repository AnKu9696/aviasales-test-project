import { FilterType, TicketItemProps } from '../types';

const useFilterData = (
  data: TicketItemProps[],
  filters: FilterType[]
): TicketItemProps[] => {
  return data.filter((item) => {
    if (filters.includes('all') || filters.length === 0) {
      return true;
    }
    return filters.includes(item.transfer.length.toString() as FilterType);
  });
};

export default useFilterData;
