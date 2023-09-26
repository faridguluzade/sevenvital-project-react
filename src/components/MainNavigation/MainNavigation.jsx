import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  UilEstate,
  UilSearch,
  UilShoppingBag,
  UilTimes,
  UilAlignLeft,
  UilSignout,
} from "@iconscout/react-unicons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getUser, logout } from "../../store/user/userSlice";

import { useSidebar } from "../../hooks/useSidebar";
import { useSticky } from "../../hooks/useSticky";
import { useOverflow } from "../../hooks/useOverflow";

import MobileNavigation from "../MobileNavigation/MobileNavigation";
import CartSidebar from "../CartSidebar/CartSidebar";

import "./MainNavigation.styles.scss";

const MainNavigation = () => {
  useSticky();
  useOverflow();
  const { toggleMobileNav, toggleSidebarCart } = useSidebar();
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const fullName = user?.user_metadata?.fullName;

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <header className="header">
      <div>
        <MobileNavigation />

        <Container fluid="lg" className="main-nav">
          <Row className="align-items-center justify-content-between">
            <Col className="d-none d-lg-block" lg={5}>
              <nav>
                <ul className="main-nav__list">
                  <li>
                    <Link to="/" className="main-nav__link">
                      <UilEstate size="20" />
                    </Link>
                  </li>
                  <li>
                    <Link to="shop" className="main-nav__link">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="account" className="main-nav__link">
                      Account
                    </Link>
                  </li>
                  <li>
                    <Link to="magazine" className="main-nav__link">
                      Magazine
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" className="main-nav__link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </Col>

            <Col xs={6} lg={3} className=" d-flex align-items-center gap-4">
              <div>
                <UilAlignLeft
                  onClick={toggleMobileNav}
                  className="d-block d-lg-none "
                  size="35"
                />
              </div>

              <figure className="main-nav__logo ">
                <Link to="/">
                  <img
                    src="https://the7.io/cbd/wp-content/uploads/sites/104/2021/05/vital-logo-seven.svg"
                    alt="#"
                  />
                </Link>
              </figure>
            </Col>

            <Col className="ml-auto" xs={6} lg={4}>
              <div className="main-nav__icon-container">
                <div className={`main-nav__icon-bar  ${!show ? "d-none" : ""}`}>
                  <span> {user && fullName}</span>
                  <UilShoppingBag
                    onClick={toggleSidebarCart}
                    className="main-nav__icon"
                  />
                  <UilSearch
                    className="main-nav__icon"
                    onClick={() => setShow((show) => !show)}
                  />
                  {fullName && (
                    <UilSignout onClick={() => dispatch(logout())} />
                  )}
                </div>

                <div
                  className={`main-nav__search-container ${
                    show ? "d-none" : ""
                  }`}
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
                    onClick={() => setShow((show) => !show)}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <CartSidebar />
      </div>
    </header>
  );
};

export default MainNavigation;
