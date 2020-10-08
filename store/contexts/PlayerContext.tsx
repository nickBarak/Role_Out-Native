import React, {createContext, useState} from 'react';

export const PlayerContext:any = createContext({room: {}, color: null, id: null});

export function PlayerContextProvider({children}) {
    const [player, setPlayer] = useState({room: {}, color: null, id: null});

    return <PlayerContext.Provider value={[player, setPlayer]}>{children}</PlayerContext.Provider>
}
