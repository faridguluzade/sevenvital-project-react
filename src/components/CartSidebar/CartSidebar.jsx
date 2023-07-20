import { UilTimes } from "@iconscout/react-unicons";
import { UilShoppingBag } from "@iconscout/react-unicons";

import SidebarProduct from "../SidebarProduct/SidebarProduct";
import Button from "../UI/Button/Button";

import { SidebarContext } from "../../context/sidebar-context";
import { useContext } from "react";

import "./CartSidebar.styles.scss";
import { useState } from "react";

const CartSidebar = () => {
  const [cartIsEmpty, setIsCartEmpty] = useState(true);

  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <div
      className={`sidebar-cart ${isSidebarOpen ? "sidebar-cart--open" : ""}`}
    >
      <div className="sidebar-cart__header">
        <h3>Shopping Cart</h3>
        <UilTimes onClick={setIsSidebarOpen} className="sidebar-cart__icon" />
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
