import React from 'react';
import { SocketContextProvider } from './contexts/SocketContext';
import { ScreenContextProvider } from './contexts/ScreenContext';
import { PlayerContextProvider } from './contexts/PlayerContext';
import { RoomContextProvider } from './contexts/RoomContext';
export default (function (_a) {
    var children = _a.children;
    return (<SocketContextProvider>
    <PlayerContextProvider>
      <ScreenContextProvider>
        <RoomContextProvider>{children}</RoomContextProvider>
      </ScreenContextProvider>
    </PlayerContextProvider>
  </SocketContextProvider>);
});
