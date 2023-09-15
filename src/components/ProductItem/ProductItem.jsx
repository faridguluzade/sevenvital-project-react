import { UilShoppingBag } from "@iconscout/react-unicons";

import { formatCurrency } from "../../utils/helper";

import Button from "../UI/Button/Button";
import "./ProductItem.styles.scss";

function ProductItem({
  name,
  regularPrice,
  salePrice,
  onSale,
  details,
  imageFront,
  imageBack,
  inShopPage,
}) {
  return (
    <figure className="product">
      <div className="product__photo-box">
        <img src={imageFront} alt="" className="product__photo" />
        <img
          src={imageBack}
          alt=""
          className="product__photo product__photo--rear"
        />

        {onSale && <span className="product__sale">Sale!</span>}
      </div>

      <figcaption
        className={`product__content ${
          inShopPage ? "align-items-start" : "align-items-center"
        }`}
      >
        <p className="product__name">{name}</p>

        <div className="product__price-box">
          <span
            className={`product__price ${onSale ? "product__price--sale" : ""}`}
          >
            {formatCurrency(regularPrice)}
          </span>
          {onSale && (
            <span className="product__sale-price">
              {formatCurrency(salePrice)}
            </span>
          )}
        </div>

        {inShopPage && (
          <div className="product__details">
            <ul className="product__list">
              {details.map((detail) => (
                <li>{detail}</li>
              ))}
            </ul>
          </div>
        )}

        <Button filled={true} className="product__card-btn">
          <UilShoppingBag size="18" />
          Add to cart
        </Button>
      </figcaption>
    </figure>
  );
}

export default ProductItem;
