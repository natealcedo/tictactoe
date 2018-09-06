import React from "react";
import propTypes from "prop-types";
import "./button.css";

const Button = ({ label, onClick }) => (
  <div className="button" onClick={() => onClick()}>
    <div>{label}</div>
  </div>
);

Button.propTypes = {
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
};

export default Button;
