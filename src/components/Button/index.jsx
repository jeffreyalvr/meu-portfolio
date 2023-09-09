import React from "react";

import "./styles.css";

import { Link } from "react-router-dom";

const Button = ({ text, icon, url, overrideClass }) => {
  return (
    <Link
      className={`button ${overrideClass ? overrideClass : undefined}`}
      to={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon ? <img src={icon} /> : undefined}
      {text}
    </Link>
  );
};

export default Button;
