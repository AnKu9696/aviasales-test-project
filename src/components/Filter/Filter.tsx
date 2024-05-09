import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/app/selectors';
import { addFilter } from '../../redux/app/slice';
import { FilterType } from '../../types';
import FilterItem from './FilterItem';
import './filter.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const appliedFilters = useSelector(selectFilters);

  const handleFilterClick = (filterValue: string) => {
    dispatch(addFilter(filterValue));
  };

  return (
    <div className='filter'>
      <p className='filter__title'>Кількість пересадок</p>
      <div className='filter__item'>
        <input
          type='checkbox'
          className='filter__item__checkbox'
          checked={appliedFilters.includes('all')}
          onChange={() => handleFilterClick('all')}
        />
        <label className='filter__item__text'>Всі</label>
      </div>
      <div className='filter__item'>
        <input
          type='checkbox'
          className='filter__item__checkbox'
          checked={appliedFilters.includes('0' || 'all')}
          onChange={() => handleFilterClick('0')}
        />
        <label className='filter__item__text'>Без пересадок</label>
      </div>
      {[1, 2, 3].map((value) => (
        <FilterItem
          key={value}
          value={value}
          checked={appliedFilters.includes(value.toString() as FilterType)}
          onChange={() => handleFilterClick(value.toString())}
        />
      ))}
    </div>
  );
};

export default Filter;
