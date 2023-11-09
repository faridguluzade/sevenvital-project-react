import Hero from "../components/UI/Hero/Hero";
import Products from "../components/Products/Products";
import { useProducts } from "../hooks/useProducts";

const ShopPage = () => {
  useProducts();

  return (
    <>
      <Hero title={"Shop"} />
      <Products />
    </>
  );
};

export default ShopPage;
