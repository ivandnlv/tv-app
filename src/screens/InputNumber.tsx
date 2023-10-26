import { createContext, useState, RefObject, useEffect } from 'react';
import { Phone, Overlay } from '../components';

type RefItem = RefObject<HTMLButtonElement> | RefObject<HTMLInputElement>;

interface InputContext {
  refs: RefItem[];
  addToRefs: (ref: RefItem) => void;
}

export const InputContext = createContext<InputContext>({
  refs: [],
  addToRefs() {},
});

export default function InputNumber() {
  const [refs, setRefs] = useState<RefItem[]>([]);
  const [refsFocusIndex, setRefsFocusIndex] = useState<number | null>(null);

  const addToRefs = (ref: RefItem) => {
    setRefs((prev) => [...prev, ref]);
  };

  const inputState: InputContext = {
    refs,
    addToRefs,
  };

  const onArrowClick = (e: KeyboardEvent) => {
    const arrows = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

    function refIndexIncrement() {
      setRefsFocusIndex((prev) => {
        if (prev !== null) {
          if (prev + 1 < refs.length) {
            return prev + 1;
          } else {
            return 0;
          }
        } else {
          return 0;
        }
      });
    }

    function refIndexDecrement() {
      setRefsFocusIndex((prev) => {
        if (prev !== null) {
          if (prev - 1 >= 0) {
            return prev - 1;
          } else {
            return refs.length - 1;
          }
        } else {
          return refs.length - 1;
        }
      });
    }

    if (arrows.includes(e.key)) {
      switch (e.key) {
        case arrows[0]:
          refIndexDecrement();
          break;
        case arrows[1]:
          refIndexIncrement();
          break;
        case arrows[2]:
          refIndexDecrement();
          break;
        case arrows[3]:
          refIndexIncrement();
          break;
      }
    }
  };

  useEffect(() => {
    if (refs) {
      document.addEventListener('keydown', onArrowClick);

      return () => {
        document.removeEventListener('keydown', onArrowClick);
      };
    }
  }, [refs]);

  useEffect(() => {
    if (refsFocusIndex !== null) {
      refs[refsFocusIndex]?.current?.focus();
    }
  }, [refsFocusIndex]);

  return (
    <InputContext.Provider value={inputState}>
      <Phone />
      <Overlay />
    </InputContext.Provider>
  );
}
