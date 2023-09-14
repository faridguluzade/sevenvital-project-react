import { useEffect } from "react";

export const useSticky = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 100
          ? document.body.classList.add("sticky")
          : document.body.classList.remove("sticky");
      }
    });
  }, []);
};
