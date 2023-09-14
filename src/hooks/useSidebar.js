import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (context === undefined)
    throw new Error("Sidebar Context was used outside of SidebarProvider");

  return context;
};
