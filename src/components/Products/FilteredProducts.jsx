import { memo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getProducts } from "../../store/products/productsSlice";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductItem from "../ProductItem/ProductItem";
import Spinner from "../UI/Spinner/Spinner";

import "./Products.styles.scss";
import Pagination from "../Pagination/Pagination";

const FilteredProducts = () => {
  const { pathname } = useLocation();
  const { products, status, error } = useSelector(getProducts);

  const inShopPage = pathname !== "/";

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
      <Row>
        <Pagination />
      </Row>
    </Container>
  );
};

export default memo(FilteredProducts);
