import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getCart,
  getTotalPrice,
  getCartById,
} from "../../store/cart/cartSlice";

import { useSidebar } from "../../hooks/useSidebar";
import { formatCurrency } from "../../utils/helper";
import { UilTimes, UilShoppingBag } from "@iconscout/react-unicons";

import SidebarProduct from "../SidebarProduct/SidebarProduct";
import Button from "../UI/Button/Button";

import "./CartSidebar.styles.scss";

const CartSidebar = ({ user }) => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalPrice);
  const cartIsEmpty = !cart?.length;

  const { isSidebarCartOpen, toggleSidebarCart } = useSidebar();

  useEffect(() => {
    if (user?.id) {
      dispatch(getCartById(user.id));
    }
  }, [dispatch, user?.id]);

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
            <span className="fs-3">{formatCurrency(totalPrice)} </span>
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

export default memo(CartSidebar);
