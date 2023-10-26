import { useState, useEffect } from 'react';
import { Scan } from '../../components';

import styles from './PromoVideo.module.scss';

export default function PromoVideo() {
  const [showScan, setShowScan] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowScan(true);
    }, 5000);
  }, []);

  return (
    <>
      <div className={styles.scan} style={showScan ? { opacity: 1 } : { opacity: 0 }}>
        <Scan />
      </div>
    </>
  );
}
