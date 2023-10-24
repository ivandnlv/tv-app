import { useState, createContext, useRef, useEffect } from 'react';
import { Screens } from '../../types';
import { PromoVideo, FinalInfo, InputNumber, Empty } from '../../screens';
import { Video } from '../Video';

interface IAppContext {
  screen: Screens;
  toggleScreen: (screen: IAppContext['screen']) => void;
}

export const AppContext = createContext<IAppContext>({
  screen: 'main',
  toggleScreen(screen: Screens) {
    this.screen = screen;
  },
});

export default function App() {
  const [screen, setScreen] = useState<Screens>('main');
  const videoRef = useRef<HTMLVideoElement>(null);

  const screensComponents: { [key in Screens]: JSX.Element } = {
    main: <PromoVideo />,
    input: <InputNumber />,
    final: <FinalInfo />,
    empty: <Empty />,
  };

  const toggleScreen = (value: Screens) => {
    setScreen(value);
  };

  const app: IAppContext = {
    screen,
    toggleScreen,
  };

  useEffect(() => {
    if (screen !== 'main' && screen !== 'empty') {
      stopVideo();
    } else {
      playVideo();
    }
  }, [screen]);

  const stopVideo = () => {
    videoRef.current?.pause();
  };

  const playVideo = () => {
    videoRef.current?.play();
  };

  return (
    <AppContext.Provider value={app}>
      <Video src="./video.mp4" videoRef={videoRef} />
      {screensComponents[screen]}
    </AppContext.Provider>
  );
}
