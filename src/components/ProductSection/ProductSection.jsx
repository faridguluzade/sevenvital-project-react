import Products from "../Products/Products";
import SectionHeader from "../UI/SectionHeader/SectionHeader";
import Button from "../UI/Button/Button";
import { useProducts } from "../../hooks/useProducts";

const ProductSection = () => {
  useProducts();

  return (
    <>
      <SectionHeader
        title="Most Popular CBD Products"
        subheading={
          "Nam vitae sapien dapibus, condimentum ipsum non, porttitor purus. Cras et diam ac – nunc urna magna, porttitor eu laoreet aliquam velit. Suspendisse potenti!"
        }
      />

      <Products />

      <div className="text-center">
        <Button to="/shop" className="products__link">
          View all products
        </Button>
      </div>
    </>
  );
};

export default ProductSection;
