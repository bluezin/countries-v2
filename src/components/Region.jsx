/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import { addRegion } from "@/utils/storage/actions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/components/Region.module.css";

const Region = () => {
  const estado = useSelector((state) => state.booleano);
  const color = estado ? "color__black" : "color__white";
  const div = estado ? "color__black" : "color__white";

  //
  const [change, setChange] = useState(false);
  const ul = change ? `${styles.ul__block} ${styles.ul}` : styles.ul__none;
  //
  const dispatch = useDispatch();
  //
  function handleClickRegion(name) {
    dispatch(addRegion(name));
  }

  return (
    <div className={styles.region}>
      <div className={styles.div__selec}>
        <h3
          className={`${color} ${styles.filter}`}
          onClick={() => setChange(!change)}
        >
          Filter by Region
          <i className="fas fa-chevron-down che-i" />
        </h3>
        <div className={`${div} ${styles.o}`}>
          <ul className={ul}>
            <li
              className={styles.li}
              onClick={() => handleClickRegion("Africa")}
            >
              Africa
            </li>
            <li
              className={styles.li}
              onClick={() => handleClickRegion("Americas")}
            >
              Americas
            </li>
            <li
              className={styles.li}
              onClick={() => handleClickRegion("Europe")}
            >
              Europe
            </li>
            <li className={styles.li} onClick={() => handleClickRegion("Asia")}>
              Asia
            </li>
            <li
              className={styles.li}
              onClick={() => handleClickRegion("Oceania")}
            >
              Oceania
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Region;
