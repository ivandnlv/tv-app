import { ReactNode, RefObject } from 'react';
import styles from './Btn.module.scss';

interface BtnProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  btnRef?: RefObject<HTMLButtonElement>;
}

export function Btn({ children, onClick = () => '', className = '', btnRef }: BtnProps) {
  return (
    <button ref={btnRef ? btnRef : null} className={className + ' ' + styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}
