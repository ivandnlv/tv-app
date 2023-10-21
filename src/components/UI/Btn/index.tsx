import { ReactNode } from 'react';
import styles from './Btn.module.scss';

interface BtnProps {
  children: ReactNode;
}

export function Btn({ children }: BtnProps) {
  return <button className={styles.btn}>{children}</button>;
}
