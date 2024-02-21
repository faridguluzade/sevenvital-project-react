import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

import { getProducts } from "../../store/products/productsSlice";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductItem from "../ProductItem/ProductItem";
import Spinner from "../UI/Spinner/Spinner";
import Button from "../UI/Button/Button";

import "./Products.styles.scss";

const Products = () => {
  const { products, status, error } = useSelector(getProducts);
  const [searchParams, setSearchParams] = useSearchParams();

  const pageSize = Number(searchParams.get("page") || 1);

  const { pathname } = useLocation();
  const inShopPage = pathname !== "/";

  if (status === "loading") return <Spinner />;

  function handleLoadMore() {
    const newPageSize = pageSize + 1;

    searchParams.set("page", newPageSize.toString());

    setSearchParams(searchParams);
  }

  return (
    <Container fluid="lg" className="products">
      <Row>
        {error && <p className="products__error">{error}</p>}

        {!error &&
          products?.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductItem inShopPage={inShopPage} {...product} />
            </Col>
          ))}
      </Row>

      {inShopPage && (
        <Row className="text-center">
          <Col xs={12}>
            <Button onClick={handleLoadMore} className="products__link">
              Load More products...
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Products;
