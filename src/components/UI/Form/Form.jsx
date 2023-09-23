import Button from "../Button/Button";

import "./Form.styles.scss";

const Form = ({
  className,
  onSubmit,
  headingText,
  children,
  btnText,
  disabled,
}) => {
  return (
    <div className="form">
      <h2 className={`form__heading ${className}`}>{headingText}</h2>
      <form onSubmit={onSubmit} className="form__box">
        {children}

        <Button disabled={disabled} filled={true} className="form__btn">
          {btnText}
        </Button>
      </form>
    </div>
  );
};

export default Form;
