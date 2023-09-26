import { useNavigate } from "react-router-dom";
import SpinnerMini from "../SpinnerMini/SpinnerMini";

import "./Button.styles.scss";

const Button = ({ filled, children, className, to, type, disabled }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      type={type}
      className={`button ${
        filled ? "button--filled" : "button--outline"
      } ${className}`}
    >
      {disabled ? <SpinnerMini /> : children}
    </button>
  );
};

export default Button;
