import App from '../../App';
import { Header, Scan } from '../../components';

import styles from './PromoVideo.module.scss';

export default function PromoVideo() {
  return (
    <>
      <Header />
      <div className={styles.scan}>
        <Scan />
      </div>
      <App />
    </>
  );
}
