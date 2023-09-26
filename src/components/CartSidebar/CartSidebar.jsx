import { useState } from "react";
import { useSelector } from "react-redux";

import { UilTimes, UilShoppingBag } from "@iconscout/react-unicons";

import { useSidebar } from "../../hooks/useSidebar";
import { getCart } from "../../store/cart/cartSlice";

import SidebarProduct from "../SidebarProduct/SidebarProduct";
import Button from "../UI/Button/Button";

import "./CartSidebar.styles.scss";

const CartSidebar = () => {
  const { isSidebarCartOpen, toggleSidebarCart } = useSidebar();
  const cart = useSelector(getCart);
  const cartIsEmpty = !cart.length;

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
          <Button
            to="/shop"
            onClick={toggleSidebarCart}
            className="empty-box__btn"
            filled={true}
          >
            Browse products
          </Button>
        </div>
      )}

      {!cartIsEmpty && (
        <div className="sidebar-cart__product">
          {cart.map((item) => (
            <SidebarProduct key={item.id} item={item} />
          ))}
        </div>
      )}

      {!cartIsEmpty && (
        <div className="sidebar-cart__footer">
          <div className="d-flex align-items-center justify-content-between">
            <p>Subtotal:</p>
            <span className="fs-3">$225.00</span>
          </div>

          <Button to="shop/cart" onClick={toggleSidebarCart} className="py-4">
            View Cart
          </Button>
          <Button className="py-4" filled={true}>
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
