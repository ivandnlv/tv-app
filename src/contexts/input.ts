import { RefObject, createContext } from 'react';

type RefItem = RefObject<HTMLButtonElement> | RefObject<HTMLInputElement>;

interface InputContextType {
  refs: RefItem[];
  addToRefs: (ref: RefItem) => void;
  deleteFromRefs: (ref: RefItem) => void;
  refsFocusIndex: number | null;
  setRefsFocusIndex: (value: React.SetStateAction<number | null>) => void;
  onArrowClick: (e: KeyboardEvent) => void;
}

const InputContext = createContext<InputContextType>({
  refs: [],
  addToRefs() {},
  deleteFromRefs() {},
  refsFocusIndex: null,
  setRefsFocusIndex() {},
  onArrowClick() {},
});

export { InputContext, type InputContextType, type RefItem };
