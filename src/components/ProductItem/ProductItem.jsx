import React from "react";

import { UilShoppingBag } from "@iconscout/react-unicons";

import Button from "../UI/Button/Button";
import "./ProductItem.styles.scss";

function ProductItem({
  imgFrontUrl,
  imgRearUrl,
  onSale,
  inShopPage,
  title,
  price,
  salePrice,
  details,
}) {
  return (
    <figure className="product">
      <div className="product__photo-box">
        <img src={imgFrontUrl} alt="" className="product__photo" />
        <img
          src={imgRearUrl}
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
        <p className="product__title">{title}</p>

        <div className="product__price-box">
          <span
            className={`product__price ${onSale ? "product__price--sale" : ""}`}
          >
            ${price}
          </span>
          {onSale && <span className="product__sale-price">${salePrice}</span>}
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
