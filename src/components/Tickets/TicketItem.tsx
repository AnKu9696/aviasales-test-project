import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import companyLogo from '../../assets/company_logo.png';
import { TicketItemProps } from '../../types';
dayjs.extend(duration);

const TicketItem = ({
  id,
  price,
  departureFlight,
  returnFlight,
  transfer,
}: TicketItemProps) => {
  const { fromAirport, toAirport, departureTime, travelTime, arrivalTime } =
    departureFlight;
  const {
    fromAirport: returnFromAirport,
    toAirport: returnToAirport,
    departureTime: returnDepartureTime,
    arrivalTime: returnArrivalTime,
    travelTime: returnTravelTime,
  } = returnFlight;

  const travelTimeConverter = (milliseconds: number) => {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    return `${hours}г ${minutes}хв`;
  };

  const renderTransfer = (transfer: string[]) => {
    return (
      <div>
        <p className='item__info__title'>
          {transfer.length > 0
            ? `${transfer.length} пересадк${transfer.length > 1 ? 'и' : 'а'}`
            : 'Без пересадок'}
        </p>
        <p className='item__info__text'>{transfer.join(', ')}</p>
      </div>
    );
  };

  return (
    <div className='item'>
      <div className='item__header'>
        <p className='item__header__price'>{price} $</p>
        <img
          className='item__header__logo'
          src={companyLogo}
          alt='Company Logo'
        />
      </div>
      <div className='item__info'>
        <div>
          <p className='item__info__title'>
            {fromAirport} - {toAirport}
          </p>
          <p className='item__info__text'>
            {departureTime} - {arrivalTime}
          </p>
        </div>
        <div>
          <p className='item__info__title'>В дорозі</p>
          <p className='item__info__text'>{travelTimeConverter(travelTime)}</p>
        </div>
        {renderTransfer(transfer)}
      </div>
      <div className='item__info'>
        <div>
          <p className='item__info__title'>
            {returnFromAirport} - {returnToAirport}
          </p>
          <p className='item__info__text'>
            {returnDepartureTime} - {returnArrivalTime}
          </p>
        </div>
        <div>
          <p className='item__info__title'>В дорозі</p>
          <p className='item__info__text'>
            {travelTimeConverter(returnTravelTime)}
          </p>
        </div>
        {renderTransfer(transfer)}
      </div>
    </div>
  );
};

export default TicketItem;
