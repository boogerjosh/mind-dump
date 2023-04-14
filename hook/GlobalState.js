import React, { createContext } from 'react';

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
      // initial state
    });
  
    return (
      <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
        {children}
      </GlobalStateContext.Provider>
    );
  };

export { GlobalStateContext, GlobalStateProvider };