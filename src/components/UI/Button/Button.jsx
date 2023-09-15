import React from "react";

import { Link } from "react-router-dom";

import "./Button.styles.scss";

const Button = ({ filled, children, className, to }) => {
  return (
    <Link
      to={to}
      className={`button ${
        filled ? "button--filled" : "button--outline"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
