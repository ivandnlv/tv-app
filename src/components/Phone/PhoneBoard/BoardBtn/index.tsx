import React, { ReactNode } from 'react';

import styles from './BoardBtn.module.scss';

interface BoardBtnProps {
  children: ReactNode;
  onOutputChange?: (e: React.MouseEvent) => void;
  onOutputClear?: () => void;
}

export default function BoardBtn({ children, onOutputChange, onOutputClear }: BoardBtnProps) {
  return (
    <button
      className={styles.btn}
      onClick={(e) =>
        onOutputClear && !onOutputChange
          ? onOutputClear()
          : onOutputChange
          ? onOutputChange(e)
          : null
      }>
      {children}
    </button>
  );
}
