import { useContext } from 'react';
import { Btn } from '../UI';

import styles from './Scan.module.scss';
import { AppContext } from '../App';

export function Scan() {
  const { toggleScreen } = useContext(AppContext);

  const onButtonClick = () => {
    toggleScreen('input');
  };

  return (
    <div className={styles.scan}>
      <h2 className="title">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО
        <br /> МАЛЫША!
        <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
      </h2>
      <img className={styles.qr} src="./qr-code.png" alt="qr code" />
      <p className={'subtitle ' + styles.subtitle}>Сканируйте QR-код или нажмите ОК</p>
      <Btn className={styles.button} type="btn" onClick={onButtonClick}>
        ОК
      </Btn>
    </div>
  );
}
