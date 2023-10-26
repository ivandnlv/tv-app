import { useContext, useRef, useEffect } from 'react';
import Qr from './Qr';

import styles from './Overlay.module.scss';
import { Btn } from '../UI';
import { AppContext } from '../../contexts';
import { InputContext } from '../../contexts';

export function Overlay() {
  const { toggleScreen } = useContext(AppContext);
  const { addToRefs, deleteFromRefs } = useContext(InputContext);

  const onClose = () => {
    toggleScreen('empty');
  };

  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (btnRef) {
      addToRefs(btnRef);
    }

    return () => {
      deleteFromRefs(btnRef);
    };
  }, [btnRef]);

  return (
    <div className={styles.overlay}>
      <div className={styles.btn}>
        <Btn btnRef={btnRef} onClick={onClose}>
          <img src="close.svg" alt="close" />
        </Btn>
      </div>
      <Qr />
    </div>
  );
}
