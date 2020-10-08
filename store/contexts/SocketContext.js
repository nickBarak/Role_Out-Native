import React, { createContext } from 'react';
import io from 'socket.io-client';
import { server } from '../../URLs';
export var SocketContext = createContext(null);
var socket = io(server);
export function SocketContextProvider(_a) {
    var children = _a.children;
    return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}
