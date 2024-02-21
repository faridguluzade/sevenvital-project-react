import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchSearchedProducts } from "../../store/products/productsSlice";

import Hero from "../../components/UI/Hero/Hero";
import Products from "../../components/Products/Products";

const SearchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("name");

  useEffect(() => {
    if (!searchValue) return;

    dispatch(fetchSearchedProducts(searchValue));
  }, [dispatch, searchValue]);

  return (
    <>
      <Hero title={`Search Results for: ${searchValue}`} />
      <Products />
    </>
  );
};

export default SearchPage;
