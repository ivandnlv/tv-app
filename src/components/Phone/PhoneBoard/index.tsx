import BoardBtn from './BoardBtn';

import styles from './PhoneBoard.module.scss';

const BUTTONS_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'cтереть', 0] as const;

interface PhoneBoardProps {
  onOutputChange: (e: React.MouseEvent) => void;
  onOutputClear: () => void;
}

export default function PhoneBoard({ onOutputChange, onOutputClear }: PhoneBoardProps) {
  return (
    <div className={styles.board}>
      {BUTTONS_VALUES.map((btnValue) =>
        btnValue !== 'cтереть' ? (
          <BoardBtn key={btnValue} onOutputChange={onOutputChange}>
            {btnValue}
          </BoardBtn>
        ) : (
          <div className={styles.clear} key={btnValue}>
            <BoardBtn onOutputClear={onOutputClear}>{btnValue}</BoardBtn>
          </div>
        ),
      )}
    </div>
  );
}
