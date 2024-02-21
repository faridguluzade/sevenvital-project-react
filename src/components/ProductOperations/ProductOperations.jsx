import "./ProductOperations.style.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Filter from "../Filter/Filter";
import SortBy from "../SortBy/SortBy";

function ProductOperations() {
  return (
    <Container fluid="lg">
      <Row>
        <Col xs={12} md={5}>
          <Filter
            filterField="status"
            options={[
              { value: "all", label: "All" },
              { value: "onSale", label: "On Sale" },
            ]}
          />
        </Col>
        <Col xs={12} md={6}>
          <SortBy
            options={[
              // { value: "startDate-desc", label: "Sort by date (recent first)" },
              // { value: "startDate-asc", label: "Sort by date (earlier first)" },
              {
                value: "regularPrice-desc",
                label: "Sort by Price (high first)",
              },
              {
                value: "regularPrice-asc",
                label: "Sort by Price (low first)",
              },
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductOperations;
