import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MagazineDetail from "../components/MagazineDetail/MagazineDetail";
import Posts from "../components/Posts/Posts";
import ProductCart from "../components/UI/ProductCard/ProductCart";

function MagazineDetailPage() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center px-3">
        <Col xs="8">
          <MagazineDetail />
        </Col>
        <Col xs="4" className="px-4">
          <Posts />
          <ProductCart />
        </Col>
      </Row>
    </Container>
  );
}

export default MagazineDetailPage;
