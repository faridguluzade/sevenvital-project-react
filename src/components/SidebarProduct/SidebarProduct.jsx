import { UilTimes } from "@iconscout/react-unicons";

import "./SidebarProduct.styles.scss";

function SidebarProduct() {
  return (
    <div className="sidebar-product">
      <figure className="sidebar-product__photo">
        <img
          src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod014.jpg"
          alt=""
        />
      </figure>
      <div className="sidebar-product__info">
        <p className="sidebar-product__name">CBD Pain Relief Cream</p>
        <div className="sidebar-product__quantity-box">
          <input type="button" value={"-"} />
          <input className="sidebar-product__quantity" type="number" min={1} />
          <input type="button" value={"+"} />
        </div>
        <p className="d-flex align-items-center">
          <UilTimes size="14" /> <p className="fs-4"> $40.00</p>
        </p>
      </div>
      <div className="ms-auto">
        <UilTimes className="sidebar-product__remove" />
      </div>
    </div>
  );
}

export default SidebarProduct;
