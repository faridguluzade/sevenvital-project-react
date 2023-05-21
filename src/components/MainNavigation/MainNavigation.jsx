import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UilEstate } from "@iconscout/react-unicons";
import { UilSearch } from "@iconscout/react-unicons";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import "./MainNavigation.styles.scss";

const MainNavigation = () => {
  const [show, setShow] = useState(true);

  const toggleIconHandler = () => {
    setShow(!show);
  };

  return (
    <nav className="main-nav container">
      <div className="row align-items-center">
        <div className="col-4">
          <ul className="main-nav__list">
            <li>
              <Link to="#" className="main-nav__link">
                <UilEstate size="20" />
              </Link>
            </li>
            <li>
              <Link to="#" className="main-nav__link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="#" className="main-nav__link">
                Account
              </Link>
            </li>
            <li>
              <Link to="#" className="main-nav__link">
                Magazine
              </Link>
            </li>
            <li>
              <Link to="#" className="main-nav__link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-4">
          <div className="main-nav__logo">
            <img
              src="https://the7.io/cbd/wp-content/uploads/sites/104/2021/05/vital-logo-seven.svg"
              alt="#"
            />
          </div>
        </div>

        <div className="col-4">
          <div className="main-nav__icon-container">
            <div className={`main-nav__icon-bar  ${!show ? "d-none" : ""}`}>
              <UilShoppingBag className="main-nav__icon" />
              <UilSearch
                className="main-nav__icon"
                onClick={toggleIconHandler}
              />
            </div>

            <div
              className={`main-nav__search-container ${show ? "d-none" : ""}`}
            >
              <form className="main-nav__search-form">
                <UilSearch className="main-nav__icon" />
                <input
                  className="main-nav__search-input "
                  type="text"
                  placeholder="Search..."
                />
              </form>

              <UilTimes
                className="main-nav__icon"
                onClick={toggleIconHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
