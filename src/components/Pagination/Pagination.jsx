import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { getProducts } from "../../store/products/productsSlice";
import { PAGE_SIZE } from "../../services/apiProducts";

import { UisPrevious } from "@iconscout/react-unicons-solid";
import { UisStepForward } from "@iconscout/react-unicons-solid";

import Button from "../UI/Button/Button";

import "./Pagination.styles.scss";

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { count } = useSelector(getProducts);

  const currentPage = Number(searchParams.get("page") || 1);
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function handlePrev() {
    if (currentPage !== 1) {
      searchParams.set("page", currentPage - 1);
      setSearchParams(searchParams);

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleNext() {
    if (currentPage !== pageCount) {
      searchParams.set("page", currentPage + 1);
      setSearchParams(searchParams);

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="pagination">
      <Button
        onClick={handlePrev}
        className={`pagination__btn ${currentPage === 1 ? "disabled" : ""}`}
      >
        <UisPrevious />
      </Button>
      <Button
        onClick={handleNext}
        className={`pagination__btn ${
          currentPage === pageCount ? "disabled" : ""
        }`}
      >
        <UisStepForward />
      </Button>
    </div>
  );
}

export default Pagination;
