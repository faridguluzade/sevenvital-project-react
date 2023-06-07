import Button from "../Button/Button";

import "./Form.styles.scss";

const Form = ({ className, headingText, children, btnText }) => {
  return (
    <div className="form">
      <h2 className={`form__heading ${className}`}>{headingText}</h2>
      <form className="form__box">
        {children}

        <Button filled={true} className="form__btn">
          {btnText}
        </Button>
      </form>
    </div>
  );
};

export default Form;
