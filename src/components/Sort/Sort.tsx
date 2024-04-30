import SortButton from './SortButton';
import './sort.scss';

const Sort = () => {
  return (
    <div className='sort'>
      <SortButton
        text='Найдешевший'
        sortType='cheapest'
      />
      <SortButton
        text='Найшвидший'
        sortType='fastest'
      />
      <SortButton
        text='Оптимальный'
        sortType='optimal'
      />
    </div>
  );
};

export default Sort;
