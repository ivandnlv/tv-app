import { ReactNode } from 'react';
import styles from './Btn.module.scss';
import { Link } from 'react-router-dom';

interface BtnProps {
  children: ReactNode;
  type: 'link' | 'btn';
  linkTo?: string;
  onClick?: () => void;
  className?: string;
}

export function Btn({ children, type, linkTo, onClick = () => '', className = '' }: BtnProps) {
  const btnTypes: { [key: string]: JSX.Element } = {
    link: (
      <Link className={className + ' ' + styles.btn} to={linkTo || '/'}>
        {children}
      </Link>
    ),
    btn: (
      <button className={className + ' ' + styles.btn} onClick={onClick}>
        {children}
      </button>
    ),
  };

  return btnTypes[type];
}
