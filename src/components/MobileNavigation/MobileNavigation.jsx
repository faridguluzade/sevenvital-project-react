import { memo, useContext } from "react";
import { Link } from "react-router-dom";

import { SidebarContext } from "../../context/sidebar-context";

import { UilTimes } from "@iconscout/react-unicons";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilYoutube } from "@iconscout/react-unicons";
import { UilQuestionCircle } from "@iconscout/react-unicons";
import { UilCheck } from "@iconscout/react-unicons";

import "./MobileNavigation.styles.scss";

const MobileNavigation = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <>
      <div className={`side-nav ${isSidebarOpen ? "side-nav--open" : ""}`}>
        <UilTimes onClick={setIsSidebarOpen} className="side-nav__close" />

        <figure className="side-nav__logo">
          <img
            src="https://the7.io/cbd/wp-content/uploads/sites/104/2021/05/vital-logo-seven.svg"
            alt=""
          />
        </figure>
        <nav className="sidebar">
          <ul className="side-nav__list">
            <li className="side-nav__item">
              <Link className="side-nav__link">Shop</Link>
            </li>
            <li className="side-nav__item">
              <Link className="side-nav__link">Account</Link>
            </li>
            <li className="side-nav__item">
              <Link className="side-nav__link">Magazine</Link>
            </li>
            <li className="side-nav__item">
              <Link className="side-nav__link">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="side-nav__content-box">
          <div className="side-nav__help d-flex align-items-center gap-2">
            <UilQuestionCircle />
            <span>Hotline:</span>
            <span className="fw-bold">001 234-567-890</span>
          </div>
          <div>
            <UilCheck />
            <span> Free shipping for orders over $50</span>
          </div>
          <div>
            <UilCheck />
            <span> 30 days return period</span>
          </div>
        </div>
        <div className="side-nav__icons">
          <UilFacebookF />
          <UilTwitter />
          <UilInstagram />
          <UilYoutube />
        </div>
      </div>
    </>
  );
};

export default memo(MobileNavigation);
