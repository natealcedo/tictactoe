import React from "react";
import propTypes from "prop-types";
import "./square.css";

const Square = ({ value, onClick, row, column }) => {
  if (value === null) {
    return <div className="square" onClick={() => onClick(row, column)} />;
  }

  if (value === 0) {
    return <div className="square">X</div>;
  }

  return <div className="square">O</div>;
};

Square.propTypes = {
  value: propTypes.oneOf([0, 1]),
  onClick: propTypes.func.isRequired,
  row: propTypes.number.isRequired,
  column: propTypes.number.isRequired
};

export default Square;
