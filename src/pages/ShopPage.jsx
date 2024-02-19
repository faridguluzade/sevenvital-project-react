import { useSelector } from "react-redux";

import { getProducts } from "../store/products/productsSlice";
import { useProducts } from "../hooks/useProducts";

import Hero from "../components/UI/Hero/Hero";
import Products from "../components/Products/Products";

const ShopPage = () => {
  useProducts();
  const productsData = useSelector(getProducts);

  return (
    <>
      <Hero title={"Shop"} />
      <Products productsData={productsData} />
    </>
  );
};

export default ShopPage;
