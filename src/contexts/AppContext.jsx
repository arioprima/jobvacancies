/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [menuPlacement, setMenuPlacement] = useState('bottom');

    return (
        <AppContext.Provider value={{ hoveredIndex, setHoveredIndex, menuPlacement, setMenuPlacement }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
