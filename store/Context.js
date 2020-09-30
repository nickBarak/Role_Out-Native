import React from 'react';
import {SocketContextProvider} from './contexts/SocketContext';
import {ScreenContextProvider} from './contexts/ScreenContext';
import {PlayerContextProvider} from './contexts/PlayerContext';

export default ({children}) => (
  <SocketContextProvider>
    <PlayerContextProvider>
      <ScreenContextProvider>{children}</ScreenContextProvider>
    </PlayerContextProvider>
  </SocketContextProvider>
);
