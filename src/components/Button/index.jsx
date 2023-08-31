import React from "react";

import "./styles.css";

import { Link } from "react-router-dom";

const Button = ({ text, icon, url }) => {
  return (
    <Link className="button" to={url} target="_blank" rel="noopener noreferrer">
      <img src={icon} />
      {text}
    </Link>
  );
};

export default Button;
