import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { UilTimes } from "@iconscout/react-unicons";
import { UilSync } from "@iconscout/react-unicons";

import "./Cart.styles.scss";

const Cart = () => {
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
            <div className="cart__product">
              <div className="cart__header">
                <UilTimes className="cart__icon" size={60} />

                <figure className="cart__photo">
                  <img
                    src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod018.jpg"
                    alt=""
                  />
                </figure>
                <p className="cart__name">CBD Pain Relief Cream</p>
              </div>
              <p className="cart__price">$40.00</p>
              <div className="cart__quantity-box">
                <input type="button" value="-" />
                <input
                  className="cart__quantity"
                  type="number"
                  min={1}
                  defaultValue={1}
                />
                <input type="button" value="+" />
              </div>
              <p className="cart__subtotal">$40.00</p>
            </div>
            <div className="cart__product">
              <div className="cart__header">
                <UilTimes className="cart__icon" size={60} />

                <figure className="cart__photo">
                  <img
                    src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod011.jpg"
                    alt=""
                  />
                </figure>
                <p className="cart__name">CBD Products Full Set</p>
              </div>
              <p className="cart__price">$120.00</p>
              <div className="cart__quantity-box">
                <input type="button" value="-" />
                <input
                  className="cart__quantity"
                  type="number"
                  min={1}
                  defaultValue={1}
                />
                <input type="button" value="+" />
              </div>
              <p className="cart__subtotal">$120.00</p>
            </div>
          </div>
          <p className="cart__refresh">
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
