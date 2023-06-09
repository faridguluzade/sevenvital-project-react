import { UilTimes } from "@iconscout/react-unicons";
import { UilShoppingBag } from "@iconscout/react-unicons";

import Button from "../UI/Button/Button";

import "./CartSidebar.styles.scss";
import { useState } from "react";

const CartSidebar = () => {
  const [cartIsEmpty, setIsCartEmpty] = useState(true);

  function handleCartEmpty() {
    setIsCartEmpty(!cartIsEmpty);
  }

  return (
    <div className="sidebar-cart">
      <div className="sidebar-cart__header">
        <h3>Shopping Cart</h3>
        <UilTimes onClick={handleCartEmpty} className="sidebar-cart__icon" />
      </div>

      {cartIsEmpty && (
        <div className="empty-box">
          <UilShoppingBag className="empty-box__icon" />
          <span className="empty-box__text">Your cart is empty</span>
          <Button className="empty-box__btn" filled={true}>
            Browse products
          </Button>
        </div>
      )}

      <div className="sidebar-product">
        <figure className="sidebar-product__photo">
          <img
            src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod014.jpg"
            alt=""
          />
        </figure>
        <div className="sidebar-product__info">
          <p className="sidebar-product__name">CBD Pain Relief Cream</p>
          <div className="sidebar-product__quantity-box">
            <input type="button" value={"-"} />
            <input className="quantity" type="" value={1} step={1} />
            <input type="button" value={"+"} />
          </div>
          <p className="sidebar-product__price">
            <UilTimes size="14" /> <p> $40.00</p>
          </p>
        </div>
        <div className="remove-box">
          <UilTimes className="sidebar-product__remove" />
        </div>
      </div>

      <div className="sidebar-product">
        <figure className="sidebar-product__photo">
          <img
            src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod014.jpg"
            alt=""
          />
        </figure>
        <div className="sidebar-product__info">
          <p className="sidebar-product__name">CBD Pain Relief Cream</p>
          <div className="sidebar-product__quantity-box">
            <input type="button" value={"-"} />
            <input className="quantity" type="" value={1} step={1} />
            <input type="button" value={"+"} />
          </div>
          <p className="sidebar-product__price">
            <UilTimes size="14" /> <p> $40.00</p>
          </p>
        </div>
        <div className="remove-box">
          <UilTimes className="sidebar-product__remove" />
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
