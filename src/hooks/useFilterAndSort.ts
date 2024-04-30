import { FilterType, SortType, TicketItemProps } from '../types';
import useFilterData from './useFilterData';
import useSortData from './useSortData';

const useFilterAndSort = (
  data: TicketItemProps[],
  filters: FilterType[],
  sortType: SortType
): TicketItemProps[] => {
  const filteredData = useFilterData(data, filters);
  const sortedData = useSortData(filteredData, sortType);

  return sortedData;
};
export default useFilterAndSort;
