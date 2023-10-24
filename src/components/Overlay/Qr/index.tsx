import styles from './Qr.module.scss';

export default function Qr() {
  return (
    <div className={styles.qr}>
      <p className={'title' + ' ' + styles.title}>
        Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
      </p>
      <img src="qr-code.png" alt="qr code" />
    </div>
  );
}
