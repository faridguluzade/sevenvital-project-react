import { useDispatch } from "react-redux";
import { UilTimes } from "@iconscout/react-unicons";

import {
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
} from "../../store/cart/cartSlice";

import { formatCurrency } from "../../utils/helper";

import "../Cart/Cart.styles.scss";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, image, price, totalPrice, quantity } = item;

  return (
    <div className="cart__product">
      <div className="cart__header">
        <UilTimes
          className="cart__icon"
          size={60}
          onClick={() => dispatch(deleteItem(id))}
        />

        <figure className="cart__photo">
          <img src={image} alt={`Image of ${image}`} />
        </figure>
        <p className="cart__name">{name}</p>
      </div>
      <p className="cart__price">{formatCurrency(price)}</p>
      <div className="cart__quantity-box">
        <input
          type="button"
          value="-"
          onClick={() => dispatch(decreaseItemQuantity(id))}
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
          onClick={() => dispatch(increaseItemQuantity(id))}
        />
      </div>
      <p className="cart__subtotal">{formatCurrency(totalPrice)}</p>
    </div>
  );
};

export default CartItem;
