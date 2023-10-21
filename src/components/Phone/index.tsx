import React, { useEffect, useState } from 'react';
import PhoneBoard from './PhoneBoard';

export function Phone() {
  const [phoneOutput, setPhoneOutput] = useState('');

  const onOutputChange = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      if (e.target.textContent) {
        const value = e.target.textContent;
        setPhoneOutput((prev) => (prev += value));
      }
    }
  };

  const onOutputClear = () => {
    setPhoneOutput('');
  };

  useEffect(() => {
    console.log(phoneOutput);
  }, [phoneOutput]);

  return (
    <>
      <PhoneBoard onOutputChange={onOutputChange} onOutputClear={onOutputClear} />
    </>
  );
}
