import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

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

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AppContext }; 
