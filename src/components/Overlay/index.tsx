import PhoneBtn from '../Phone/PhoneBtn';
import Qr from './Qr';

import styles from './Overlay.module.scss';
import { Btn } from '../UI';

export function Overlay() {
  const onClose = () => {
    console.log('close');
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