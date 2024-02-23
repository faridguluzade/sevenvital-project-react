import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

import { getProducts } from "../../store/products/productsSlice";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { UisPrevious } from "@iconscout/react-unicons-solid";
import { UisStepForward } from "@iconscout/react-unicons-solid";
import { PAGE_SIZE } from "../../services/apiProducts";

import ProductItem from "../ProductItem/ProductItem";
import Spinner from "../UI/Spinner/Spinner";
import Button from "../UI/Button/Button";

import "./Products.styles.scss";

const FilteredProducts = ({ filter, sortBy }) => {
  const { pathname } = useLocation();
  const { products, count, status, error } = useSelector(getProducts);
  const [searchParams, setSearchParams] = useSearchParams();

  const inShopPage = pathname !== "/";
  const currentPage = Number(searchParams.get("page") || 1);
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function handlePrev() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  function handleNext() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  if (status === "loading") return <Spinner />;

  return (
    <Container fluid="lg" className="products">
      <Row>
        {error && <p className="products__error">No product found</p>}

        {!error &&
          products?.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductItem inShopPage={inShopPage} {...product} />
            </Col>
          ))}
      </Row>
      {/* {status === "loading" && <Spinner />} */}
      <Row className="">
        <Col xs={6} className="d-flex gap-3">
          <Button onClick={handlePrev} className="products__link">
            <UisPrevious />
          </Button>
          <Button onClick={handleNext} className="products__link">
            <UisStepForward />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(FilteredProducts);
