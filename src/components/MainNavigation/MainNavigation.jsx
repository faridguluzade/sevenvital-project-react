import React, { useEffect, useState, useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { SidebarContext } from "../../context/sidebar-context";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import CartSidebar from "../CartSidebar/CartSidebar";

import { Link } from "react-router-dom";
import { UilEstate } from "@iconscout/react-unicons";
import { UilSearch } from "@iconscout/react-unicons";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilAlignLeft } from "@iconscout/react-unicons";
import "./MainNavigation.styles.scss";

const MainNavigation = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [stickyClass, setStickyClass] = useState("");

  const handleToggleMobile = () => {
    setIsMobileOpen((m) => !m);
  };

  const toggleIconHandler = () => {
    setShow(!show);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 100
          ? document.body.classList.add("sticky")
          : document.body.classList.remove("sticky");
      }
    });
  }, []);

  useEffect(() => {
    document.body.style.overflowY = isSidebarOpen ? "hidden" : "";
  }, [isSidebarOpen]);

  return (
    <header className="header">
      <div>
        <MobileNavigation
          isMobileOpen={isMobileOpen}
          onToggleMobile={handleToggleMobile}
        />

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
                  onClick={setIsMobileOpen}
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
                  <UilShoppingBag
                    onClick={setIsSidebarOpen}
                    className="main-nav__icon"
                  />
                  <UilSearch
                    className="main-nav__icon"
                    onClick={toggleIconHandler}
                  />
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
                    onClick={toggleIconHandler}
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
