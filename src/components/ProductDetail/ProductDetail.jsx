import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "../UI/Button/Button";

// Light Gallery library
import LightGallery from "lightgallery/react";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";

import "./ProductDetail.styles.scss";

const ProductDetail = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <Container className="product-detail">
      <Row>
        <Col xs={6}>
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgZoom, lgFullscreen]}
            elementClassNames="product-detail__gallery"
          >
            <a
              className="product-detail__link product-detail__link--1"
              data-src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod018-900x1198.jpg"
            >
              <img
                className="product-detail__photo"
                alt="img1"
                src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod018-900x1198.jpg"
              />
            </a>

            <a
              className="product-detail__link product-detail__link--2"
              data-src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod018-900x1198.jpg"
            >
              <img
                className="product-detail__photo"
                alt="img1"
                src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod018-900x1198.jpg"
              />
            </a>
            <a
              className="product-detail__link product-detail__link--3"
              data-src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod008-900x1198.jpg"
            >
              <img
                className="product-detail__photo"
                alt="img2"
                src="	https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod008-900x1198.jpg"
              />
            </a>
            <a
              className="product-detail__link product-detail__link--4"
              data-src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vim0307-900x1198.jpg"
            >
              <img
                className="product-detail__photo"
                alt="img2"
                src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vim0307-900x1198.jpg"
              />
            </a>
            <a
              className="product-detail__link product-detail__link--5"
              data-src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vim0308-900x1198.jpg"
            >
              <img
                className="product-detail__photo"
                alt="img2"
                src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vim0308-900x1198.jpg"
              />
            </a>
          </LightGallery>
        </Col>
        <Col xs={6}>
          <div className="product-detail__content-box">
            <h2 className="product-detail__title">CBD Pain Relief Cream</h2>
            <p className="product-detail__price">$40.00</p>
            <div className="d-flex align-items-center gap-5 my-2">
              <div className="product-detail__quantity-box">
                <input type="button" value="-" />
                <input
                  className="product-detail__quantity"
                  type="number"
                  min={1}
                  value={1}
                />
                <input type="button" value="+" />
              </div>
              <Button className="product-detail__btn" filled={true}>
                Add To Cart
              </Button>
            </div>

            <ul className="product-detail__list">
              <li> Moisturising</li>
              <li>Healing</li>
              <li>Long-lasting effect</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
