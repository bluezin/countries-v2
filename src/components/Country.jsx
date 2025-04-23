/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from "react";
import { useSelector } from "react-redux";

import styles from "../styles/components/Country.module.css";
import { useRouter } from "next/router";

const Country = ({ name, population, region, capital, flags }) => {
  const estado = useSelector((state) => state.booleano);
  const color = estado ? "color__black" : "color__white";
  //
  const router = useRouter();
  //
  function handleClick() {
    router.push(`/country/${name.common.toLowerCase()}`);
  }

  return (
    <div onClick={handleClick} className={styles.countryList}>
      <br />
      <img src={flags.png} alt="flag" className={styles.imgBandera} />
      <div className={`${color} ${styles.information}`}>
        <h1 className={styles.country__name}>
          {name.common.length > 20 ? name.common.slice(1, 7) : name.common}
        </h1>
        <p className={styles.country__p}>
          Population:
          <span className={styles.span}>{population}</span>
        </p>
        <p className={styles.country__p}>
          Region:
          <span className={styles.span}>{region}</span>
        </p>
        <p className={styles.country__p}>
          Capital:
          <span className={styles.span}>
            {capital && capital.length > 0 && capital[0]}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Country;
