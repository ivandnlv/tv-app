import { ReactNode, useState } from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  children: ReactNode;
  onChange: (val: boolean) => void;
}

export function Checkbox({ children, onChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const onCheckboxClick = (e?: React.KeyboardEvent | null) => {
    if (e?.key === 'Enter') {
      setIsChecked((prev) => !prev);
      return onChange(!isChecked);
    }

    if (e && e?.key !== 'Enter') return;

    setIsChecked((prev) => !prev);
    onChange(!isChecked);
  };

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onCheckboxClick(null)}
        onKeyDown={(e) => onCheckboxClick(e)}
      />
      <span>{children}</span>
    </label>
  );
}
