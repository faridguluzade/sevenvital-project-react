import { useDispatch } from "react-redux";
import { UilTimes } from "@iconscout/react-unicons";

// import {
//   deleteItem,
//   increaseItemQuantity,
//   decreaseItemQuantity,
// } from "../../store/cart/cartSlice";
import { formatCurrency } from "../../utils/helper";
import {
  deleteCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} from "../../store/cart/cartSlice";

import "./SidebarProduct.styles.scss";

function SidebarProduct({ item }) {
  const dispatch = useDispatch();
  const {
    id,
    productId,
    totalPrice,
    userId,
    name,
    price,
    imageFront,
    quantity,
  } = item;
  console.log(item);

  return (
    <div className="sidebar-product">
      <figure className="sidebar-product__photo">
        <img src={imageFront} alt="" />
      </figure>
      <div className="sidebar-product__info">
        <p className="sidebar-product__name">{name}</p>
        <div className="sidebar-product__quantity-box">
          <input
            type="button"
            value={"-"}
            onClick={() =>
              dispatch(
                decreaseCartItemQuantity({
                  userId,
                  productId,
                  price,
                  totalPrice,
                  quantity,
                })
              )
            }
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
            onClick={() =>
              dispatch(
                increaseCartItemQuantity({
                  userId,
                  productId,
                  price,
                  totalPrice,
                  quantity,
                })
              )
            }
          />
        </div>
        <p className="d-flex align-items-center">
          <UilTimes size="14" /> <p className="fs-4">{formatCurrency(price)}</p>
        </p>
      </div>
      <div className="ms-auto" onClick={() => dispatch(deleteCartItem(id))}>
        <UilTimes className="sidebar-product__remove" />
      </div>
    </div>
  );
}

export default SidebarProduct;
