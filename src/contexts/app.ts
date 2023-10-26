import { createContext } from 'react';
import { Screens } from '../types';

export interface IAppContext {
  screen: Screens;
  toggleScreen: (screen: IAppContext['screen']) => void;
}

export const AppContext = createContext<IAppContext>({
  screen: 'main',
  toggleScreen(screen: Screens) {
    this.screen = screen;
  },
});
