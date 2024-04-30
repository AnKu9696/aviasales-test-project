import { Link } from 'react-router-dom';
import aviasalesLogo from './assets/aviasales_logo.png';
import Filter from './components/Filter/Filter';
import TicketsList from './components/Tickets/TicketsList';
import './styles.scss';

const App = () => {
  return (
    <div className='app'>
      <div className='app__logo'>
        <Link to='/'>
          <img src={aviasalesLogo} />
        </Link>
      </div>
      <div className='app__container'>
        <div className='app__container__body'>
          <Filter />
          <TicketsList />
        </div>
      </div>
    </div>
  );
};

export default App;
