import { useContext } from 'react';
import Qr from './Qr';

import styles from './Overlay.module.scss';
import { Btn } from '../UI';
import { AppContext } from '../App';

export function Overlay() {
  const { toggleScreen } = useContext(AppContext);

  const onClose = () => {
    toggleScreen('empty');
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.btn}>
        <Btn type="btn" onClick={onClose}>
          <img src="close.svg" alt="close" />
        </Btn>
      </div>
      <Qr />
    </div>
  );
}
