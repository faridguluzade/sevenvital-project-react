import { useDispatch } from "react-redux";
import { UilTimes } from "@iconscout/react-unicons";

import {
  deleteCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../store/cart/cartSlice";

import { formatCurrency } from "../../utils/helper";

import "../Cart/Cart.styles.scss";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, imageFront, price, totalPrice, quantity } = item;
  const obj = { id, price, quantity };

  return (
    <div className="cart__product">
      <div className="cart__header">
        <UilTimes
          className="cart__icon"
          onClick={() => dispatch(deleteCartItem(id))}
        />

        <figure className="cart__photo">
          <img src={imageFront} alt={`Image of ${name}`} />
        </figure>
        <p className="cart__name">{name}</p>
      </div>
      <p className="cart__price">{formatCurrency(price)}</p>
      <div className="cart__quantity-box">
        <input
          type="button"
          value="-"
          onClick={() => dispatch(decreaseItemQuantity(obj))}
        />
        <input
          className="cart__quantity"
          type="number"
          min={1}
          value={quantity}
        />
        <input
          type="button"
          value="+"
          onClick={() => dispatch(increaseItemQuantity(obj))}
        />
      </div>
      <p className="cart__subtotal">{formatCurrency(totalPrice)}</p>
    </div>
  );
};

export default CartItem;
