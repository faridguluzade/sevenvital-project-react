import "./ProductOperations.style.scss";

import Container from "react-bootstrap/Container";

import Filter from "../Filter/Filter";
import SortBy from "../SortBy/SortBy";

function ProductOperations() {
  return (
    <Container fluid="lg" className="p-4 mb-4">
      <div className="product-operations">
        <Filter
          filterField="status"
          options={[
            { value: "all", label: "All" },
            { value: "onSale", label: "On Sale" },
          ]}
        />

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
      </div>
    </Container>
  );
}

export default ProductOperations;
