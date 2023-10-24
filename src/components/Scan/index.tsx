import { Btn } from '../UI';
import { routerPaths } from '../../types';

import styles from './Scan.module.scss';

export function Scan() {
  return (
    <div className={styles.scan}>
      <h2 className="title">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО
        <br /> МАЛЫША!
        <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
      </h2>
      <img className={styles.qr} src="./qr-code.png" alt="qr code" />
      <p className={'subtitle ' + styles.subtitle}>Сканируйте QR-код или нажмите ОК</p>
      <Btn className={styles.button} type="link" linkTo={'/' + routerPaths.INPUT_NUMBER}>
        ОК
      </Btn>
    </div>
  );
}
