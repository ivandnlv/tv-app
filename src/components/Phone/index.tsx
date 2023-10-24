import React, { useEffect, useState } from 'react';
import PhoneBoard from './PhoneBoard';
import PhoneMask from './PhoneMask';
import { Checkbox } from '../UI';
import { useNavigate } from 'react-router-dom';

import styles from './Phone.module.scss';
import PhoneBtn from './PhoneBtn';
import { routerPaths } from '../../types';

const INPUT_MAX = 10;

export function Phone() {
  const navigate = useNavigate();

  const [phoneOutput, setPhoneOutput] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onBoardClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      if (e.target.textContent) {
        const value = e.target.textContent;
        setPhoneOutput((prev) => {
          if (prev.length <= INPUT_MAX) {
            return (prev += value);
          } else return prev;
        });
      }
    }
  };

  const onCompleteClick = () => {
    if (phoneOutput.length === INPUT_MAX && isAgree) {
      navigate('/' + routerPaths.FINAL_INFO);
    } else {
      if (!phoneOutput.length) {
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
          <Checkbox onChange={setIsAgree}>Согласие на обработку персональных данных</Checkbox>
        ) : (
          <p
            className="subtitle"
            style={{ color: '#EA0000', textTransform: 'uppercase', fontWeight: 500 }}>
            {error}
          </p>
        )}
      </div>
      <div className={styles.complete}>
        <PhoneBtn onClick={onCompleteClick} />
      </div>
    </div>
  );
}
