import React, {createContext, useState} from 'react';

export const PlayerContext = createContext({room: null, color: null});

export function PlayerContextProvider({children}) {
    const [player, setPlayer] = useState({room: null, color: null});

    return <PlayerContext.Provider value={[player, setPlayer]}>{children}</PlayerContext.Provider>
}
