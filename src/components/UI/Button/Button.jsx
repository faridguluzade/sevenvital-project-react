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

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={disabled}
      className={`button ${
        filled ? "button--filled" : "button--outline"
      }  ${className}`}
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
