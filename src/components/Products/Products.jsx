import React from "react";
import { useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { UilShoppingBag } from "@iconscout/react-unicons";

import SectionHeader from "../UI/SectionHeader/SectionHeader";
import Button from "../UI/Button/Button";

import "./Products.styles.scss";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    imgFrontUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod011.jpg",

    imgRearUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod011-1.jpg",
    title: "CBD Products Full Set",
    price: "260.00",
    salePrice: "149.90",
    onSale: true,
    details: [
      "Natural ingredients",
      "  No preservatives",
      "Moisturising & antibacterial effect",
      " Fast & long-lasting results",
    ],
  },
  {
    id: 2,
    imgFrontUrl:
      "	https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod010.jpg",

    imgRearUrl:
      "	https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod010-1.jpg",
    title: "CBD Products Starter Set",
    price: "200.00",
    salePrice: "149.90",
    onSale: true,
    details: [
      "Skin regeneration",
      "Moisturising",
      "Antioxidant",
      "Anti-age effect",
    ],
  },
  {
    id: 3,
    imgFrontUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod012.jpg",

    imgRearUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod012-1.jpg",
    title: "CBD Products Starter Set",
    price: "90.00",
    salePrice: null,
    onSale: false,
    details: ["Moisturising", "Healing", "Long-lasting effect"],
  },

  {
    id: 4,
    imgFrontUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod009.jpg",

    imgRearUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vim0305.jpg",
    title: "CBD Products Starter Set",
    price: "40.00",
    salePrice: null,
    onSale: false,
    details: [
      "Skin regeneration",
      "Moisturising",
      "Antioxidant",
      "Anti-age effect",
    ],
  },
  {
    id: 5,
    imgFrontUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod018.jpg",

    imgRearUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod008.jpg",
    title: "CBD Pain Relief Cream",
    price: "40.00",
    salePrice: null,
    onSale: false,
    details: [
      "CBD oil",
      "CBD gummies",
      "pain relieve cream",
      "healing cream",
      "moisturising balm",
    ],
  },

  {
    id: 6,
    imgFrontUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod014.jpg",

    imgRearUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod005.jpg",
    title: "CBD Oil",
    price: "45.00",
    salePrice: null,
    onSale: false,
    details: [
      "CBD oil",
      "pain relieve cream",
      "healing cream",
      "100% vegan products",
    ],
  },

  {
    id: 7,
    imgFrontUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod006-1.jpg",

    imgRearUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod006.jpg",
    title: "Pain Relief CBD Salve",
    price: "120.00",
    salePrice: null,
    onSale: false,
    details: [
      "100% vegan product",
      " Only natural ingredients",
      "No preservatives",
      "Raspberry, lemon or apple flavour",
    ],
  },

  {
    id: 8,
    imgFrontUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod007.jpg",

    imgRearUrl:
      "https://the7.io/cbd/wp-content/uploads/sites/104/2022/11/vprod007-1.jpg",
    title: "Collagen CBD Gummies",
    price: "35.00",
    salePrice: null,
    onSale: false,
    details: [
      "Natural ingredients",
      "No preservatives",
      "Moisturising effect",
      "Long-lasting results",
    ],
  },
];

const Products = () => {
  const { pathname } = useLocation();

  const inShopPage = pathname === "/shop";

  return (
    <>
      <SectionHeader
        title="Most Popular CBD Products"
        subheading={
          "Nam vitae sapien dapibus, condimentum ipsum non, porttitor purus. Cras et diam ac – nunc urna magna, porttitor eu laoreet aliquam velit. Suspendisse potenti!"
        }
      />

      <Container fluid="lg" className="product px-3">
        <Row>
          {DUMMY_PRODUCTS.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <figure className="product__card">
                <div className="product__photo-box">
                  <img
                    src={product.imgFrontUrl}
                    alt=""
                    className="product__photo"
                  />
                  <img
                    src={product.imgRearUrl}
                    alt=""
                    className="product__photo product__photo--rear"
                  />

                  {product.onSale && (
                    <span className="product__sale">Sale!</span>
                  )}
                </div>

                <figcaption
                  className={`product__content ${
                    inShopPage ? "align-items-start" : "align-items-center"
                  }`}
                >
                  <p className="product__title">{product.title}</p>

                  <div className="product__price-box">
                    <span
                      className={`product__price ${
                        product.onSale ? "product__price--sale" : ""
                      }`}
                    >
                      ${product.price}
                    </span>
                    {product.onSale && (
                      <span className="product__sale-price">
                        ${product.salePrice}
                      </span>
                    )}
                  </div>

                  {inShopPage && (
                    <div className="product__details">
                      <ul className="product__list">
                        {product.details.map((detail) => (
                          <li>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button filled={true} className="product__card-btn">
                    <UilShoppingBag size="18" />
                    Add to cart
                  </Button>
                </figcaption>
              </figure>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={12}>
            <Button className="product__link">View all products</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
