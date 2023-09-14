import { useDispatch } from "react-redux";
import { fetchMagazines } from "../store/magazines/magazinesSlice";
import { useEffect } from "react";

export const useMagazines = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMagazines());
  }, [dispatch]);
};
