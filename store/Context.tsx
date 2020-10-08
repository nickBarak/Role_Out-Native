import React from 'react';
import {SocketContextProvider} from './contexts/SocketContext';
import {ScreenContextProvider} from './contexts/ScreenContext';
import {PlayerContextProvider} from './contexts/PlayerContext';
import {RoomContextProvider} from './contexts/RoomContext';

export default ({children}) => (
  <SocketContextProvider>
    <PlayerContextProvider>
      <ScreenContextProvider>
        <RoomContextProvider>{children}</RoomContextProvider>
      </ScreenContextProvider>
    </PlayerContextProvider>
  </SocketContextProvider>
);
