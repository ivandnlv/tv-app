import { ReactNode } from 'react';
import styles from './Btn.module.scss';

interface BtnProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Btn({ children, onClick = () => '', className = '' }: BtnProps) {
  return (
    <button className={className + ' ' + styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}
