import { Overlay } from '../../components';
import styles from './FinalInfo.module.scss';

export default function FinalInfo() {
  return (
    <>
      <Overlay />
      <div className={styles.final}>
        <h2>
          Заявка
          <br />
          принята
        </h2>
        <p>
          Держите телефон под рукой.
          <br /> Скоро с Вами свяжется наш менеджер.{' '}
        </p>
      </div>
    </>
  );
}
