import { FilterItemProps } from '../../types';

const FilterItem = ({ value, checked, onChange }: FilterItemProps) => (
  <div className='filter__item'>
    <input
      className='filter__item__checkbox'
      type='checkbox'
      checked={checked}
      onChange={onChange}
    />
    <label className='filter__item__text'>
      {value} пересадк{value > 1 ? 'и' : 'a'}
    </label>
  </div>
);
export default FilterItem;
