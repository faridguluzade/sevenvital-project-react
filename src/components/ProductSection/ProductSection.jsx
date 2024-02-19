import { useSelector } from "react-redux";

import { getProducts } from "../../store/products/productsSlice";

import Products from "../Products/Products";
import SectionHeader from "../UI/SectionHeader/SectionHeader";
import Button from "../UI/Button/Button";

const ProductSection = () => {
  const productsData = useSelector(getProducts);

  return (
    <>
      <SectionHeader
        title="Most Popular CBD Products"
        subheading={
          "Nam vitae sapien dapibus, condimentum ipsum non, porttitor purus. Cras et diam ac – nunc urna magna, porttitor eu laoreet aliquam velit. Suspendisse potenti!"
        }
      />

      <Products productsData={productsData} />

      <div className="text-center">
        <Button to="/shop" className="products__link">
          View all products
        </Button>
      </div>
    </>
  );
};

export default ProductSection;
