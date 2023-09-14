import { useState } from "react";

import { UilTimes, UilShoppingBag } from "@iconscout/react-unicons";

import { useSidebar } from "../../hooks/useSidebar";

import SidebarProduct from "../SidebarProduct/SidebarProduct";
import Button from "../UI/Button/Button";

import "./CartSidebar.styles.scss";

const CartSidebar = () => {
  const { isSidebarCartOpen, toggleSidebarCart } = useSidebar();
  const [cartIsEmpty, setIsCartEmpty] = useState(true);

  return (
    <div
      className={`sidebar-cart ${
        isSidebarCartOpen ? "sidebar-cart--open" : ""
      }`}
    >
      <div className="sidebar-cart__header">
        <h3>Shopping Cart</h3>
        <UilTimes onClick={toggleSidebarCart} className="sidebar-cart__icon" />
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

      {!cartIsEmpty && (
        <div className="sidebar-cart__product">
          <SidebarProduct />
          <SidebarProduct />
        </div>
      )}

      {!cartIsEmpty && (
        <div className="sidebar-cart__footer">
          <div className="d-flex align-items-center justify-content-between">
            <p>Subtotal:</p>
            <span className="fs-3">$225.00</span>
          </div>

          <Button className="py-4">View Cart</Button>
          <Button className="py-4" filled={true}>
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
