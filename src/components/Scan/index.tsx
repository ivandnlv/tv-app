import { Link } from 'react-router-dom';
import { Btn } from '../UI';
import { routerPaths } from '../../types';

import styles from './Scan.module.scss';

export function Scan() {
  return (
    <div className={styles.scan}>
      <h2 className={styles.title}>
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО
        <br /> МАЛЫША!
        <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
      </h2>
      <img className={styles.qr} src="./qr-code.png" alt="qr code" />
      <p className={styles.descr}>Сканируйте QR-код или нажмите ОК</p>
      <Link to={'/' + routerPaths.INPUT_NUMBER}>
        <Btn>ОК</Btn>
      </Link>
    </div>
  );
}
