import { useLocation } from "react-router-dom";

import Products from "../Products/Products";
import SectionHeader from "../UI/SectionHeader/SectionHeader";
import Button from "../UI/Button/Button";

import { DUMMY_PRODUCTS } from "../../constants";

const ProductSection = () => {
  const { pathname } = useLocation();
  const inShopPage = pathname === "/shop";

  return (
    <>
      <SectionHeader
        title="Most Popular CBD Products"
        subheading={
          "Nam vitae sapien dapibus, condimentum ipsum non, porttitor purus. Cras et diam ac – nunc urna magna, porttitor eu laoreet aliquam velit. Suspendisse potenti!"
        }
      />

      <Products products={DUMMY_PRODUCTS} inShopPage={inShopPage} />

      <div className="text-center">
        <Button className="products__link">View all products</Button>
      </div>
    </>
  );
};

export default ProductSection;
