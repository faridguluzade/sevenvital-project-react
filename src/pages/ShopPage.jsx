import { useLocation } from "react-router-dom";

import Hero from "../components/UI/Hero/Hero";
import Products from "../components/Products/Products";

import { DUMMY_PRODUCTS } from "../constants";

const ShopPage = () => {
  const { pathname } = useLocation();
  const inShopPage = pathname === "/shop";
  return (
    <>
      <Hero title={"Shop"} />
      <Products products={DUMMY_PRODUCTS} inShopPage={inShopPage} />
    </>
  );
};

export default ShopPage;
