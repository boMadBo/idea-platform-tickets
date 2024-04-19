import { getStops } from '@/common/helpers';
import { ECarrier } from '@/containers/tickets/enums';
import { ITicket } from '@/containers/tickets/types';
import SubmitButton from '@/uikit/buttons/SubmitButton';
import getSymbolFromCurrency from 'currency-symbol-map';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import React from 'react';
import { IoIosAirplane } from 'react-icons/io';
import styles from './ticketCard.module.scss';
require('dayjs/locale/ru');
dayjs.extend(localizedFormat);

interface Props {
  currency: string;
  data: ITicket;
  onClick: () => void;
}
const TicketCard = ({ currency, data, onClick }: Props) => {
  const departureDay = dayjs(data.departure_date, 'DD.MM.YY').locale('ru').format('dd');
  const arrivalDay = dayjs(data.arrival_date, 'DD.MM.YY').locale('ru').format('dd');
  const price = `Купить \n\n за ${data.price.toLocaleString('ru-RU')} ${getSymbolFromCurrency(currency)}`;
  const stops = getStops(data.stops.toString());

  const image =
    data.carrier === ECarrier.tk
      ? '/images/turkish.png'
      : data.carrier === ECarrier.s7
        ? '/images/s7.png'
        : data.carrier === ECarrier.su
          ? '/images/aeroflot.png'
          : '/images/british.png';

  return (
    <div className={styles.ticket_card}>
      <div className={styles.company}>
        <div className={styles.wrap}>
          <img src={image} className={styles.logo} />
          <SubmitButton text={price} onClick={onClick} />
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.timing}>
          <div className={styles.time}>{data.departure_time}</div>
          <div className={styles.stops_wrap}>
            <span>{stops}</span>
            <div className={styles.aeroline_wrap}>
              <div className={styles.aeroline}></div>
              <IoIosAirplane />
            </div>
          </div>
          <div className={styles.time}>{data.arrival_time}</div>
        </div>
        <div className={styles.locations}>
          <div className={styles.location_wrap}>
            <span>
              {data.origin}, {data.origin_name}
            </span>
            <span className={styles.location_date}>
              {data.departure_date}, {departureDay}
            </span>
          </div>
          <div className={styles.location_wrap_reverse}>
            <span>
              {data.destination}, {data.destination_name}
            </span>
            <span className={styles.location_date}>
              {data.arrival_date}, {arrivalDay}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TicketCard);
