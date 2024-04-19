import TabButton from '@/uikit/buttons/TabButton';
import Checkbox from '@/uikit/forms/Checkbox';
import React from 'react';
import styles from './filters.module.scss';

interface Props {
  currentTab: string;
  currency: string[];
  sections: string[];
  transfers: string[];
  handleSelectTab: (tab: string) => void;
  handleInputSections: (value: string) => void;
}

const Filters = ({ currentTab, currency, sections, transfers, handleSelectTab, handleInputSections }: Props) => {
  return (
    <section className={styles.filters}>
      <div className={styles.filters_fixed}>
        <div className={styles.container}>
          <div className={styles.wrap}>
            <h6 className={styles.title}>ВАЛЮТА</h6>
            <div className={styles.btn_group}>
              {currency.map((item, index) => (
                <TabButton
                  key={item}
                  text={item}
                  index={index}
                  length={currency.length}
                  onClick={handleSelectTab}
                  isActive={currentTab === item}
                />
              ))}
            </div>
          </div>
          <div className={styles.wrap}>
            <h6 className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h6>
            {transfers.map(item => (
              <Checkbox key={item} name={item} sections={sections} handleInputSections={handleInputSections} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Filters);
