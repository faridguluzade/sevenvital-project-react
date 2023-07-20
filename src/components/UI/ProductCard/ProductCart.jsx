import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

import "./ProductCard.styles.scss";

const ProductCart = () => {
  const navigate = useNavigate();

  function handleNavigateShop() {
    navigate("/shop");
  }

  return (
    <div className="px-5">
      <div className="product-card">
        <span className="product-card__subheading">Seven Vital</span>

        <h3 className="product-card__heading">Premium CBD Products</h3>
        <Button
          filled={true}
          onClick={handleNavigateShop}
          className="product-card__btn"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCart;
