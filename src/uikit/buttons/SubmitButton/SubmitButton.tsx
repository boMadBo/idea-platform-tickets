import React from 'react';
import styles from './submitButton.module.scss';

interface Props {
  text: string;
  onClick: () => void;
}

const SubmitButton = ({ text, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      <span>{text}</span>
    </button>
  );
};

export default React.memo(SubmitButton);
