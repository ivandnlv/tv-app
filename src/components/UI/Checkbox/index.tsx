import { ReactNode, useState, RefObject } from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  children: ReactNode;
  onChange: (val: boolean) => void;
  inputRef?: RefObject<HTMLInputElement>;
}

export function Checkbox({ children, onChange, inputRef }: CheckboxProps) {
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
        ref={inputRef ? inputRef : null}
        type="checkbox"
        checked={isChecked}
        onChange={() => onCheckboxClick(null)}
        onKeyDown={(e) => onCheckboxClick(e)}
      />
      <span>{children}</span>
    </label>
  );
}
