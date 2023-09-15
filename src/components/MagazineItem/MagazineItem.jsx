import { useLocation } from "react-router-dom";
import { formatDate } from "../../utils/helper";
import Button from "../UI/Button/Button";

import "./MagazineItem.styles.scss";

const MagazineItem = ({ id, image, title, date }) => {
  const { pathname } = useLocation();

  const to = pathname === "/magazine" ? `${id}` : `magazine/${id}`;

  return (
    <div className="magazine__card">
      <figure className="magazine__photo">
        <img src={image} alt="" loading="lazy" />
      </figure>

      <div className="magazine__content">
        <h3 className="magazine__title">{title}</h3>
      </div>

      <span className="magazine__date">{formatDate(date)}</span>
      <Button to={to} filled={true} className="magazine__btn">
        Read Article
      </Button>
    </div>
  );
};

export default MagazineItem;
