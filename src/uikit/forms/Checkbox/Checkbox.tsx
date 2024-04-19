import { getStops } from '@/common/helpers';
import { EOnly, ETransfers } from '@/containers/tickets/enums';
import React from 'react';
import styles from './checkbox.module.scss';

interface Props {
  name: string;
  sections: string[];
  handleInputSections: (value: string) => void;
}

const Checkbox = ({ name, sections, handleInputSections }: Props) => {
  const checked = sections.includes(name);
  return (
    <label className={styles.container}>
      <input name={name} type="checkbox" checked={checked} onChange={() => handleInputSections(name)} />
      <div className={styles.checkmark_wrapper}>
        <span className={styles.checkmark}></span>
      </div>
      <div>
        <span className={styles.label_text}>{getStops(name)}</span>
        {name === ETransfers.direct && (
          <button className={styles.btn_only} onClick={() => handleInputSections(EOnly.only)}>
            {EOnly.only}
          </button>
        )}
      </div>
    </label>
  );
};

export default React.memo(Checkbox);
