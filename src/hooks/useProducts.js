import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/products/productsSlice";

export const useProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
};
