import React, { createContext, useState } from 'react';
export var ScreenContext = createContext('Home');
export function ScreenContextProvider(_a) {
    var children = _a.children;
    var _b = useState('Home'), screen = _b[0], setScreen = _b[1];
    return <ScreenContext.Provider value={[screen, setScreen]}>{children}</ScreenContext.Provider>;
}
