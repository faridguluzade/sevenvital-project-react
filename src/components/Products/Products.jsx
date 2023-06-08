import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductItem from "../ProductItem/ProductItem";

import "./Products.styles.scss";

const Products = ({ products, inShopPage }) => {
  return (
    <Container fluid="lg" className="products">
      <Row>
        {products.map((productItem) => (
          <Col key={productItem.id} xs={12} sm={6} md={4} lg={3}>
            <ProductItem inShopPage={inShopPage} {...productItem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
