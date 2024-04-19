import cn from 'classnames';
import React from 'react';
import styles from './tabButton.module.scss';

interface Props {
  text: string;
  index: number;
  length: number;
  isActive: boolean;
  onClick: (tab: string) => void;
}

const TabButton = ({ text, index, length, isActive, onClick }: Props) => {
  return (
    <button
      onClick={() => onClick(text)}
      className={cn({
        [styles.btn]: true,
        [styles.btn_active]: isActive,
        [styles.btn_first]: index === 0,
        [styles.btn_last]: length === index + 1,
      })}
    >
      <span>{text}</span>
    </button>
  );
};

export default React.memo(TabButton);
