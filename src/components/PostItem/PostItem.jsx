import { Link } from "react-router-dom";

import "./PostItem.styles.scss";

const PostItem = ({ title, imgUrl, date }) => {
  return (
    <div className="post">
      <figure className="post__photo">
        <img src={imgUrl} alt="" />
      </figure>
      <div className="post__content">
        <Link className="post__heading">{title}</Link>
        <span className="post__date">{date}</span>
      </div>
    </div>
  );
};

export default PostItem;
