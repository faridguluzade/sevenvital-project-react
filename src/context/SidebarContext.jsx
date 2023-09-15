import { createContext, useReducer } from "react";

export const SidebarContext = createContext();

const initialState = {
  isSidebarCartOpen: false,
  isMobileNavOpen: false,
};

const sidebarReducer = (state, action) => {
  switch (action.type) {
    case "sidebar/cart": {
      return { ...state, isSidebarCartOpen: !state.isSidebarCartOpen };
    }
    case "sidebar/navigation": {
      return { ...state, isMobileNavOpen: !state.isMobileNavOpen };
    }
    default:
      throw new Error("Unknown action type");
  }
};

export const SidebarProvider = ({ children }) => {
  const [{ isSidebarCartOpen, isMobileNavOpen }, dispatch] = useReducer(
    sidebarReducer,
    initialState
  );

  const toggleSidebarCart = () => {
    dispatch({ type: "sidebar/cart" });
  };

  const toggleMobileNav = () => {
    dispatch({ type: "sidebar/navigation" });
  };

  const value = {
    isSidebarCartOpen,
    isMobileNavOpen,
    toggleSidebarCart,
    toggleMobileNav,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
