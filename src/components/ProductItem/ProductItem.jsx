import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cartSlice";
import { useSidebar } from "../../hooks/useSidebar";
import { formatCurrency } from "../../utils/helper";

import SpinnerMini from "../UI/SpinnerMini/SpinnerMini";
import { UilShoppingBag } from "@iconscout/react-unicons";
import Button from "../UI/Button/Button";

import "./ProductItem.styles.scss";
import toast from "react-hot-toast";

function ProductItem({
  id,
  name,
  regularPrice,
  salePrice,
  onSale,
  details,
  imageFront,
  imageBack,
  inShopPage,
}) {
  const dispatch = useDispatch();
  const { isSidebarCartOpen, openSidebarCart } = useSidebar();
  const user = useSelector((state) => state.user.user);
  const { loadingProducts } = useSelector((state) => state.cart);

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("You must be logged in!");
      return;
    }

    const price = onSale ? salePrice : regularPrice;

    await dispatch(
      addItemToCart({
        productId: id,
        userId: user.id,
        price,
      })
    );

    // Open the sidebar cart
    if (!isSidebarCartOpen) openSidebarCart();
  };

  return (
    <figure className="product">
      <div className="product__photo-box">
        <img src={imageFront} alt="" className="product__photo" />
        <img
          src={imageBack}
          alt=""
          className="product__photo product__photo--rear"
        />

        {onSale && <span className="product__sale">Sale!</span>}
      </div>

      <figcaption
        className={`product__content ${
          inShopPage ? "align-items-start" : "align-items-center"
        }`}
      >
        <p className="product__name">{name}</p>

        <div className="product__price-box">
          <span
            className={`product__price ${onSale ? "product__price--sale" : ""}`}
          >
            {formatCurrency(regularPrice)}
          </span>
          {onSale && (
            <span className="product__sale-price">
              {formatCurrency(salePrice)}
            </span>
          )}
        </div>

        {inShopPage && (
          <div className="product__details">
            <ul className="product__list">
              {details.map((detail) => (
                <li>{detail}</li>
              ))}
            </ul>
          </div>
        )}

        <Button
          onClick={handleAddToCart}
          filled={true}
          className="product__card-btn"
        >
          {loadingProducts[id] ? <SpinnerMini /> : <UilShoppingBag size="18" />}
          Add to cart
        </Button>
      </figcaption>
    </figure>
  );
}

export default ProductItem;
