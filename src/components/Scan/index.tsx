import { useContext, useRef, useEffect } from 'react';
import { Btn } from '../UI';

import styles from './Scan.module.scss';
import { AppContext, InputContext } from '../../contexts';

export function Scan() {
  const { toggleScreen } = useContext(AppContext);
  const { addToRefs, deleteFromRefs } = useContext(InputContext);

  const onButtonClick = () => {
    toggleScreen('input');
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
    <div className={styles.scan}>
      <h2 className="title">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО
        <br /> МАЛЫША!
        <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
      </h2>
      <img className={styles.qr} src="./qr-code.png" alt="qr code" />
      <p className={'subtitle ' + styles.subtitle}>Сканируйте QR-код или нажмите ОК</p>
      <Btn btnRef={btnRef} className={styles.button} onClick={onButtonClick}>
        ОК
      </Btn>
    </div>
  );
}
