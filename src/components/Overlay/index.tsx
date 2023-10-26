import { useContext, useRef, useEffect } from 'react';
import Qr from './Qr';

import styles from './Overlay.module.scss';
import { Btn } from '../UI';
import { AppContext } from '../App';
import { InputContext } from '../../screens/InputNumber';

export function Overlay() {
  const { toggleScreen } = useContext(AppContext);
  const { addToRefs } = useContext(InputContext);

  const onClose = () => {
    toggleScreen('empty');
  };

  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (btnRef) {
      btnRef.current?.setAttribute('name', 'closeBtn');
      addToRefs(btnRef);
    }
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
