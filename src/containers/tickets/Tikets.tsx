import { ECurrency } from '@/common/enums';
import { EOnly, ETransfers } from '@/containers/tickets/enums';
import Filters from '@/containers/tickets/filters';
import { useGetTickets } from '@/hooks/useGetTickets';
import TicketCard from '@/uikit/cards/TicketCard';
import React, { useCallback, useState } from 'react';
import styles from './tickets.module.scss';

const currency = Object.values(ECurrency);
const transfers = Object.values(ETransfers);

const Tikets = () => {
  const [currentTab, setCurrentTab] = useState<string>(currency[0]);
  const [sections, setSections] = useState<string[]>([...transfers]);

  const handleSelectTab = useCallback((tab: string) => {
    setCurrentTab(tab);
  }, []);

  const handleInputSections = useCallback((value: string) => {
    setSections(prev => {
      if (prev.includes(value)) {
        if (value === ETransfers.all) {
          return [];
        }
        return prev.filter(item => item !== value && item !== ETransfers.all);
      } else {
        if (value === ETransfers.all) {
          return [...transfers];
        }
        if (value === EOnly.only) {
          return [ETransfers.direct];
        }
        return [...prev, value];
      }
    });
  }, []);

  const handleSelectTicket = useCallback(() => {}, []);

  const tickets = useGetTickets(currentTab, sections);

  return (
    <div className={styles.tickets}>
      <Filters
        currentTab={currentTab}
        currency={currency}
        sections={sections}
        transfers={transfers}
        handleSelectTab={handleSelectTab}
        handleInputSections={handleInputSections}
      />
      <div className={styles.cards_container}>
        {tickets?.map((item, index) => (
          <TicketCard
            key={item.departure_date + index}
            currency={currentTab}
            data={item}
            onClick={handleSelectTicket}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Tikets);
