import { useDispatch } from "react-redux";
import { UilTimes } from "@iconscout/react-unicons";

import {
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../store/cart/cartSlice";
import { formatCurrency } from "../../utils/helper";

import "./SidebarProduct.styles.scss";

function SidebarProduct({ item }) {
  const dispatch = useDispatch();
  const { id, name, price, image, quantity } = item;

  return (
    <div className="sidebar-product">
      <figure className="sidebar-product__photo">
        <img src={image} alt={`Image of ${name}`} />
      </figure>
      <div className="sidebar-product__info">
        <p className="sidebar-product__name">{name}</p>
        <div className="sidebar-product__quantity-box">
          <input
            type="button"
            value={"-"}
            onClick={() => dispatch(decreaseItemQuantity(id))}
          />
          <input
            className="sidebar-product__quantity"
            value={quantity}
            type="number"
            min={1}
          />
          <input
            type="button"
            value={"+"}
            onClick={() => dispatch(increaseItemQuantity(id))}
          />
        </div>
        <p className="d-flex align-items-center">
          <UilTimes size="14" /> <p className="fs-4">{formatCurrency(price)}</p>
        </p>
      </div>
      <div className="ms-auto" onClick={() => dispatch(deleteItem(id))}>
        <UilTimes className="sidebar-product__remove" />
      </div>
    </div>
  );
}

export default SidebarProduct;
