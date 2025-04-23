import React from "react";
import { useSelector } from "react-redux";

const Filtrear = ({ handleChange }) => {
  const estado = useSelector((state) => state.booleano);
  const color = estado ? "div__input color__black" : "div__input color__white";

  return (
    <div>
      <div className={color}>
        <i className="fas fa-search search" />
        <input onChange={handleChange} placeholder="Search for a country..." />
      </div>
    </div>
  );
};

export default Filtrear;
