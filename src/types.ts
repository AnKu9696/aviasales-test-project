export type FilterItemProps = {
  value: number;
  checked: boolean;
  onChange: () => void;
};

export type FilterType = '0' | '1' | '2' | '3' | 'all';

export type CounterState = {
  filters: FilterType[];
  sort: string;
};

export type SortType = 'cheapest' | 'fastest' | 'optimal';

export type SortButtonProps = {
  text: string;
  sortType: SortType;
};

export type FlightData = {
  fromAirport: string;
  toAirport: string;
  departureTime: string;
  arrivalTime: string;
  travelTime: number;
};

export type TicketItemProps = {
  id: number;
  price: string;
  departureFlight: FlightData;
  returnFlight: FlightData;
  transfer: string[];
};
