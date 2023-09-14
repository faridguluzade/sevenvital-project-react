import { useEffect } from "react";
import { useSidebar } from "./useSidebar";

export const useOverflow = () => {
  const { isSidebarCartOpen } = useSidebar();

  useEffect(() => {
    document.body.style.overflowY = isSidebarCartOpen ? "hidden" : "";
  }, [isSidebarCartOpen]);
};
