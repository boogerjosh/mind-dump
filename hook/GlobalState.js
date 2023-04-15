import React, { createContext, useState } from 'react';

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        urlImage: {},
        item: {},
        items: []
    });
  
    return (
      <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
        {children}
      </GlobalStateContext.Provider>
    );
  };

export { GlobalStateContext, GlobalStateProvider };