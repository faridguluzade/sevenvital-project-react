import Button from "../UI/Button/Button";

import "./TestimonialItem.styles.scss";

const TestimonialItem = ({ fullName, comment, image, shortName }) => {
  return (
    <figure className="testimonial-item">
      <figcaption className="testimonial-item__user">
        <img className="testimonial-item__photo" src={image} alt="" />
      </figcaption>
      <h3 className="testimonial-item__user-name">{fullName}</h3>
      <blockquote className="testimonial-item__text">"{comment}"</blockquote>
      <Button filled={true} className="testimonial-item__link">
        {shortName}
      </Button>
    </figure>
  );
};

export default TestimonialItem;
