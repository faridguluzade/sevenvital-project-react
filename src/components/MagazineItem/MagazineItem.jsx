import Button from "../UI/Button/Button";

import { formatDate } from "../../utils/helper";

import "./MagazineItem.styles.scss";

const MagazineItem = ({ image, title, date }) => {
  return (
    <div className="magazine__card">
      <figure className="magazine__photo">
        <img src={image} alt="" />
      </figure>

      <div className="magazine__content">
        <h3 className="magazine__title">{title}</h3>
      </div>

      <span className="magazine__date">{formatDate(date)}</span>
      <Button filled={true} className="magazine__btn">
        Read Article
      </Button>
    </div>
  );
};

export default MagazineItem;
