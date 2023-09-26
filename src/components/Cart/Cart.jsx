import { useDispatch, useSelector } from "react-redux";

import { UilSync } from "@iconscout/react-unicons";

import { getCart, clearCart } from "../../store/cart/cartSlice";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Cart.styles.scss";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <Container className="cart">
      <Row>
        <Col xs={8}>
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
          <p className="cart__refresh" onClick={() => dispatch(clearCart())}>
            <UilSync />
            Refresh Cart
          </p>
        </Col>
        <Col xs={4}>ELeykum</Col>
      </Row>
    </Container>
  );
};

export default Cart;
