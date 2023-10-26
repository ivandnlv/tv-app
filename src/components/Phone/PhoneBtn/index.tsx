import { ReactNode, RefObject } from 'react';
import styles from './PhoneBtn.module.scss';
interface PhoneBtnProps {
  onClick: () => void;
  children?: ReactNode;
  btnRef?: RefObject<HTMLButtonElement>;
}

export default function PhoneBtn({ onClick, children, btnRef }: PhoneBtnProps) {
  return (
    <button className={styles.btn} ref={btnRef} onClick={onClick}>
      {children ? children : 'Подтвердить номер'}
    </button>
  );
}
