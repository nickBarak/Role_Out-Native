import React, {createContext} from 'react';
import io from 'socket.io-client';
import {server} from '../../URLs';

export const SocketContext:any = createContext(null);
let socket = io(server);

export function SocketContextProvider({children}) {
    return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
}
