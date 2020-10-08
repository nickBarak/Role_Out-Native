import React, { createContext, useState } from 'react';
export var RoomContext = createContext({ room: {}, color: null });
export function RoomContextProvider(_a) {
    var children = _a.children;
    var _b = useState({ name: '', players: [] }), room = _b[0], setRoom = _b[1];
    return <RoomContext.Provider value={[room, setRoom]}>{children}</RoomContext.Provider>;
}
