import React, { ReactNode, useContext, useEffect, useRef } from 'react';

import styles from './BoardBtn.module.scss';
import { InputContext } from '../../../../screens/InputNumber';

interface BoardBtnProps {
  children: ReactNode;
  onOutputChange?: (e: React.MouseEvent) => void;
  onOutputClear?: () => void;
}

export default function BoardBtn({ children, onOutputChange, onOutputClear }: BoardBtnProps) {
  const { addToRefs } = useContext(InputContext);

  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (btnRef) {
      btnRef.current?.setAttribute('name', 'boardBtn');
      addToRefs(btnRef);
    }
  }, [btnRef]);

  return (
    <button
      ref={btnRef}
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
