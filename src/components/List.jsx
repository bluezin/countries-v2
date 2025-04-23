/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import UnidadCountry from "./UnidadCountry";
import Loader from "./Loader";
import { useRouter } from "next/router";

const List = () => {
  const router = useRouter();
  const estado = useSelector((state) => state.booleano);

  const buttonDiv = estado ? "color__black flag-div" : "color__white flag-div";
  const button = estado ? "w back" : "b back";

  const [count, setCoun] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${router.query.name}`)
      .then((response) => response.json())
      .then((data) => setCoun(data[0]));
  }, []);

  function handleClickBack() {
    return router.back();
  }

  return (
    <div>
      <div className={buttonDiv}>
        <i className="fas fa-long-arrow-alt-left i-flag" />
        <button type="button" onClick={handleClickBack} className={button}>
          Back
        </button>
      </div>

      <div className="UnidadList">
        {count?.length === 0 ? <Loader /> : <UnidadCountry {...count} />}
      </div>
    </div>
  );
};

export default List;
