import React, {createContext, useState} from 'react';

export const ScreenContext = createContext('Home');

export function ScreenContextProvider({children}) {
    const [screen, setScreen] = useState('Home');

    return <ScreenContext.Provider value={[screen, setScreen]}>{children}</ScreenContext.Provider>
}
