import { withMask } from 'use-mask-input';

import styles from './PhoneMask.module.scss';

interface PhoneMaskProps {
  value: string;
  isError: boolean;
}

export default function PhoneMask({ value, isError }: PhoneMaskProps) {
  return (
    <div className={styles['phone-mask']}>
      <label className={styles.phone}>
        <input
          style={isError ? { color: '#EA0000' } : {}}
          disabled
          type="text"
          value={value}
          ref={withMask('+7(999)999-99-99')}
          placeholder="+7(___)___-__-__"
        />
      </label>
    </div>
  );
}
