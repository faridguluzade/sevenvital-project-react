import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UilSync } from "@iconscout/react-unicons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  getCart,
  getCartById,
  deleteAllCart,
  getTotalPrice,
} from "../../store/cart/cartSlice";

import { formatCurrency } from "../../utils/helper";

import CartItem from "../CartItem/CartItem";

import "./Cart.styles.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const { user } = useSelector((state) => state.user);
  const totalPrice = useSelector(getTotalPrice);

  useEffect(() => {
    if (user?.id) {
      dispatch(getCartById(user.id));
    }
  }, [dispatch, user?.id]);

  return (
    <Container className="cart">
      <Row className="justify-center">
        <Col xs={12}>
          <div className="cart__basket">
            <div className="cart__titles">
              <p className="first-child">Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="d-flex align-items-center justify-content-between mt-5">
            <p
              className="cart__refresh"
              onClick={() => dispatch(deleteAllCart(user.id))}
            >
              <UilSync />
              Refresh Cart
            </p>
            <span className="cart__totals">
              Cart totals: {formatCurrency(totalPrice)}
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
