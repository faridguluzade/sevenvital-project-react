import { createContext, useReducer } from "react";

export const SidebarContext = createContext({
  isSidebarOpen: false,
});

const INITIAL_STATE = {
  isSidebarOpen: false,
};

const sidebarReducer = (_, action) => {
  switch (action.type) {
    case "IS_SIDEBAR_OPEN": {
      return {
        isSidebarOpen: action.bool,
      };
    }
  }
};

export const SidebarProvider = ({ children }) => {
  const [{ isSidebarOpen }, dispatch] = useReducer(
    sidebarReducer,
    INITIAL_STATE
  );

  const setIsSidebarOpen = () => {
    dispatch({ type: "IS_SIDEBAR_OPEN", bool: !isSidebarOpen });
  };

  const value = {
    isSidebarOpen,
    setIsSidebarOpen,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
