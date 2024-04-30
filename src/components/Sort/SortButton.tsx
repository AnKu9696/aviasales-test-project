import { useDispatch, useSelector } from 'react-redux';
import { selectSort } from '../../redux/app/selectors';
import { addSort } from '../../redux/app/slice';
import { SortButtonProps } from '../../types';

const SortButton = ({ text, sortType }: SortButtonProps) => {
  const dispatch = useDispatch();
  const appliedSort = useSelector(selectSort);

  return (
    <button
      className={`sort__button ${appliedSort === sortType ? 'active' : ''}`}
      onClick={() => dispatch(addSort(sortType))}
    >
      {text}
    </button>
  );
};

export default SortButton;
