import { useState, useRef, useEffect } from 'react';
import { Screens } from '../../types';
import { PromoVideo, FinalInfo, InputNumber, Empty } from '../../screens';
import { Video } from '../Video';
import { AppContext, IAppContext, InputContext, InputContextType } from '../../contexts';

export default function App() {
  const [screen, setScreen] = useState<Screens>('main');
  const videoRef = useRef<HTMLVideoElement>(null);

  const [refs, setRefs] = useState<InputContextType['refs']>([]);

  const addToRefs: InputContextType['addToRefs'] = (ref) => {
    setRefs((prev) => [...prev, ref]);
  };

  const deleteFromRefs: InputContextType['deleteFromRefs'] = (ref) => {
    setRefs((prev) => prev.filter((item) => item !== ref));
  };

  const [refsFocusIndex, setRefsFocusIndex] = useState<number | null>(null);

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
    if (refsFocusIndex !== null) {
      refs[refsFocusIndex]?.current?.focus();
    }
  }, [refsFocusIndex]);

  const screensComponents: { [key in Screens]: JSX.Element } = {
    main: <PromoVideo />,
    input: <InputNumber />,
    final: <FinalInfo />,
    empty: <Empty />,
  };

  const toggleScreen = (value: Screens) => {
    setScreen(value);
  };

  const appState: IAppContext = {
    screen,
    toggleScreen,
  };

  const inputState: InputContextType = {
    refs,
    addToRefs,
    deleteFromRefs,
    onArrowClick,
    refsFocusIndex,
    setRefsFocusIndex,
  };

  useEffect(() => {
    if (screen !== 'main' && screen !== 'empty') {
      stopVideo();
    } else {
      playVideo();
    }
  }, [screen]);

  useEffect(() => {
    if (refs.length) {
      document.addEventListener('keydown', onArrowClick);

      return () => {
        document.removeEventListener('keydown', onArrowClick);
      };
    }
  }, [refs]);

  const stopVideo = () => {
    videoRef.current?.pause();
  };

  const playVideo = () => {
    videoRef.current?.play();
  };

  return (
    <AppContext.Provider value={appState}>
      <InputContext.Provider value={inputState}>
        <Video src="./video.mp4" videoRef={videoRef} />
        {screensComponents[screen]}
      </InputContext.Provider>
    </AppContext.Provider>
  );
}
