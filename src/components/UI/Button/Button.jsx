import { useNavigate } from "react-router-dom";
import SpinnerMini from "../SpinnerMini/SpinnerMini";

import "./Button.styles.scss";

const Button = ({
  filled,
  children,
  className,
  to,
  type,
  disabled,
  onClick,
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        if (to) {
          navigate(to);
        }
        if (onClick) {
          onClick();
        }
      }}
      type={type}
      className={`button ${
        filled ? "button--filled" : "button--outline"
      } ${className}`}
    >
      {disabled ? (
        <span className="button-text">
          <SpinnerMini />
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
