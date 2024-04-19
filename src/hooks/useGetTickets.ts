import { config } from '@/config';
import { ticketsAPI } from '@/store/services/TicketsService';
import { useEffect, useMemo, useState } from 'react';

export const useGetTickets = (currency: string, sections: string[]) => {
  const { data: tickets } = ticketsAPI.useGetListQuery();
  const [data, setData] = useState<number>(1);

  const fetchData = async () => {
    try {
      const url = `${config.outward.currency.url}?currency=RUB`;
      const response = await fetch(url).then(response => response.json());
      const { USD, EUR, RUB } = response.data.rates;
      const values = { USD, EUR, RUB };

      if (values && Object.keys(values).includes(currency)) {
        const value = Object.entries(values).find(item => item[0] === currency);
        if (value) {
          setData(Number(value[1]));
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currency, tickets]);

  return useMemo(
    () =>
      tickets
        ?.map(item => {
          return {
            ...item,
            price: Math.round(item.price * data),
          };
        })
        .sort((a, b) => a.price - b.price)
        .filter(item => sections.includes(item.stops.toString())),
    [sections, data, tickets]
  );
};
