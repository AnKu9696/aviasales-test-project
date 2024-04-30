import { useState } from 'react';
import { useSelector } from 'react-redux';
import data from '../../data.json';
import { selectFilters, selectSort } from '../../redux/app/selectors';
import { TicketItemProps } from '../../types';
import Sort from '../Sort/Sort';
import TicketItem from './TicketItem';
import './ticketList.scss';

import useFilterAndSort from '../../hooks/useFilterAndSort';

const TicketList = () => {
  const filters = useSelector(selectFilters);
  const sortType = useSelector(selectSort);
  const [showAll, setShowAll] = useState(false);
  const filteredAndSortedData = useFilterAndSort(data, filters, sortType);

  const visibleTickets =
    showAll && filteredAndSortedData.length > 5
      ? filteredAndSortedData
      : filteredAndSortedData.slice(0, 5);

  return (
    <div className='tickets'>
      <div className='tickets__list'>
        <Sort />
        {visibleTickets.map(
          ({
            id,
            price,
            departureFlight,
            returnFlight,
            transfer,
          }: TicketItemProps) => (
            <TicketItem
              key={id}
              id={id}
              price={price}
              departureFlight={departureFlight}
              returnFlight={returnFlight}
              transfer={transfer}
            />
          )
        )}
        {!showAll && filteredAndSortedData.length > 5 && (
          <button
            className='tickets__list__show-button'
            onClick={() => setShowAll(true)}
          >
            Показати ще 5 квитків
          </button>
        )}
      </div>
    </div>
  );
};
export default TicketList;
