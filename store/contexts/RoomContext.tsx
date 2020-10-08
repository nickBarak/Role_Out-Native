import React, {createContext, useState} from 'react';

export const RoomContext:any = createContext({room: {}, color: null});

export function RoomContextProvider({children}) {
    const [room, setRoom] = useState({ name: '', players: [] });

    return <RoomContext.Provider value={[room, setRoom]}>{children}</RoomContext.Provider>
}
