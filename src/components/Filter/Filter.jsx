import { useSearchParams } from "react-router-dom";
import "./Filter.styles.scss";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <div className="filter">
      {options.map((option) => (
        <button
          key={option.value}
          className={`filter__btn ${
            option.value === currentFilter ? "filter__btn--active" : ""
          }`}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
