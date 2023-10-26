import React, { useEffect, useState, useContext, useRef } from 'react';
import PhoneBoard from './PhoneBoard';
import PhoneMask from './PhoneMask';
import { Checkbox } from '../UI';

import styles from './Phone.module.scss';
import PhoneBtn from './PhoneBtn';
import { AppContext, InputContext } from '../../contexts';

const INPUT_MAX = 10;

export function Phone() {
  const { toggleScreen } = useContext(AppContext);
  const { addToRefs, deleteFromRefs } = useContext(InputContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const completeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (inputRef && completeBtnRef) {
      addToRefs(inputRef);
      addToRefs(completeBtnRef);
    }

    return () => {
      deleteFromRefs(inputRef);
      deleteFromRefs(completeBtnRef);
    };
  }, [inputRef, completeBtnRef]);

  const [phoneOutput, setPhoneOutput] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addToPhoneOutput = (value: string) => {
    setPhoneOutput((prev) => {
      if (prev.length < INPUT_MAX) {
        return (prev += value);
      } else return prev;
    });
  };

  const removeFromPhoneOutput = () => {
    setPhoneOutput((prev) => {
      if (prev.length > 0) {
        return prev.slice(0, -1);
      } else return prev;
    });
  };

  const onBoardClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      if (e.target.textContent) {
        const value = e.target.textContent;
        addToPhoneOutput(value);
      }
    }
  };

  const onKeyboardClick = (e: KeyboardEvent) => {
    if (Number(e.key) || e.key === '0') {
      addToPhoneOutput(e.key);
    }

    if (e.key === 'Backspace') {
      removeFromPhoneOutput();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', (e) => onKeyboardClick(e));

    return () => {
      document.removeEventListener('keydown', (e) => onKeyboardClick(e));
    };
  }, []);

  const onCompleteClick = () => {
    if (phoneOutput.length === INPUT_MAX && isAgree) {
      toggleScreen('final');
    } else {
      if (phoneOutput.length < INPUT_MAX) {
        setError('НЕВЕРНО ВВЕДЕН НОМЕР');
      } else if (!isAgree) {
        setError('Примите согласие на обработку данных');
        setTimeout(() => setError(null), 2000);
      }
    }
  };

  const onOutputClear = () => {
    setPhoneOutput('');
  };

  useEffect(() => {
    setError(null);
  }, [phoneOutput]);

  return (
    <div className="container">
      <h2 className={'title' + ' ' + styles.title}>
        Введите ваш номер
        <br /> мобильного телефона
      </h2>
      <div className={styles.mask}>
        <PhoneMask value={phoneOutput} isError={error?.toLowerCase().includes('номер') ?? false} />
      </div>
      <p className={'subtitle' + ' ' + styles.subtitle}>
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </p>
      <div className={styles.board}>
        <PhoneBoard onOutputChange={onBoardClick} onOutputClear={onOutputClear} />
      </div>
      <div className={styles.checkbox}>
        {!error ? (
          <Checkbox inputRef={inputRef} onChange={setIsAgree}>
            Согласие на обработку персональных данных
          </Checkbox>
        ) : (
          <p
            className="subtitle"
            style={{ color: '#EA0000', textTransform: 'uppercase', fontWeight: 500 }}>
            {error}
          </p>
        )}
      </div>
      <div className={styles.complete}>
        <PhoneBtn btnRef={completeBtnRef} onClick={onCompleteClick} />
      </div>
    </div>
  );
}
