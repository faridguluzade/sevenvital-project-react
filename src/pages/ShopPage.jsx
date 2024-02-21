import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Hero from "../components/UI/Hero/Hero";
import Products from "../components/Products/Products";
import ProductOperations from "../components/ProductOperations/ProductOperations";
import { useEffect, useMemo } from "react";
import { fetchFilteredProducts } from "../store/products/productsSlice";

const ShopPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("status");
  const filter = !filterValue || filterValue === "all" ? null : filterValue;

  // Sort
  const sortByRaw = searchParams.get("sortBy") || "regularPrice-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = useMemo(() => {
    return { field, direction };
  }, [field, direction]);

  // // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  useEffect(() => {
    dispatch(fetchFilteredProducts({ filter, sortBy, page }));
  }, [dispatch, filter, sortBy, page]);

  return (
    <>
      <Hero title={"Shop"} />
      <ProductOperations />
      <Products />
    </>
  );
};

export default ShopPage;
