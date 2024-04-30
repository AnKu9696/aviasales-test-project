import { SortType, TicketItemProps } from '../types';

const useSortData = (
  data: TicketItemProps[],
  sortType: SortType
): TicketItemProps[] => {
  return data.sort((a, b) => {
    const getTotalTime = (item: TicketItemProps) =>
      item.departureFlight.travelTime + item.returnFlight.travelTime;

    switch (sortType) {
      case 'cheapest':
        return parseFloat(a.price) - parseFloat(b.price);
      case 'fastest':
        return getTotalTime(a) - getTotalTime(b);
      case 'optimal':
        const totalTimeDiff = getTotalTime(a) - getTotalTime(b);
        if (totalTimeDiff !== 0) return totalTimeDiff;
        const transferDiff = a.transfer.length - b.transfer.length;
        if (transferDiff !== 0) return transferDiff;
        return parseFloat(a.price) - parseFloat(b.price);
      default:
        return 0;
    }
  });
};

export default useSortData;
