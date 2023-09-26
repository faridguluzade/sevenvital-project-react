import { createContext, useReducer, useState } from "react";

export const SidebarContext = createContext();

const initialState = {
  isSidebarCartOpen: false,
  isMobileNavOpen: false,
};

const sidebarReducer = (state, action) => {
  switch (action.type) {
    case "sidebar/cart-toggle": {
      return { ...state, isSidebarCartOpen: !state.isSidebarCartOpen };
    }
    case "sidebar/cart-open": {
      return { ...state, isSidebarCartOpen: true };
    }
    case "sidebar/navigation-toggle": {
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
    dispatch({ type: "sidebar/cart-toggle" });
  };

  const openSidebarCart = () => {
    dispatch({ type: "sidebar/cart-open" });
  };

  const toggleMobileNav = () => {
    dispatch({ type: "sidebar/navigation-toggle" });
  };

  const value = {
    isSidebarCartOpen,
    isMobileNavOpen,
    toggleSidebarCart,
    toggleMobileNav,
    openSidebarCart,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
