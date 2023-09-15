import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMagazines } from "../store/magazines/magazinesSlice";

export const useMagazines = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMagazines());
  }, [dispatch]);
};
