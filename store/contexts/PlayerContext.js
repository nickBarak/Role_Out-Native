import React, { createContext, useState } from 'react';
export var PlayerContext = createContext({ room: {}, color: null, id: null });
export function PlayerContextProvider(_a) {
    var children = _a.children;
    var _b = useState({ room: {}, color: null, id: null }), player = _b[0], setPlayer = _b[1];
    return <PlayerContext.Provider value={[player, setPlayer]}>{children}</PlayerContext.Provider>;
}
