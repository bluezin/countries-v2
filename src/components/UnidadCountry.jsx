import React from "react";
import styles from "../styles/components/UnidadCountry.module.css";

const UnidadCountry = ({
  area,
  flags,
  name,
  population,
  region,
  capital,
  subregion,
  topLevelDomain,
  numericCode,
}) => {
  return (
    <div className={styles.country__unit}>
      <div className={styles.img__center}>
        <img src={flags?.png} alt="flag" className={styles.img__country} />
      </div>

      <div className={styles.information__unit}>
        <p className={styles.name__unit}>{name.common}</p>

        <p>
          <strong className={styles.strong__unit}>Population:</strong>
          {population}
        </p>

        <p>
          <strong className={styles.strong__unit}>Region:</strong>
          {region}
        </p>
        <p>
          <strong className={styles.strong__unit}>Sub Region</strong>
          {subregion}
        </p>
        <p>
          <strong className={styles.strong__unit}>Capital:</strong>
          {capital}
        </p>
        <p>
          <strong className={styles.strong__unit}>Top Level Domain</strong>
          {topLevelDomain}
        </p>

        <p>
          <strong className={styles.strong__unit}>Area:</strong>
          {area}
        </p>
        <p>
          <strong className={styles.strong__unit}>NumeriCode:</strong>
          {numericCode}
        </p>
      </div>
    </div>
  );
};

export default UnidadCountry;
