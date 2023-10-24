import { ReactNode } from 'react';
import styles from './PhoneBtn.module.scss';

interface PhoneBtnProps {
  onClick: () => void;
  children?: ReactNode;
}

export default function PhoneBtn({ onClick, children }: PhoneBtnProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children ? children : 'Подтвердить номер'}
    </button>
  );
}
