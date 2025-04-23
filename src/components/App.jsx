/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-debugger */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Country from "./Country";
import Region from "./Region";

import styles from "../styles/components/App.module.css";
import Filtrear from "./Filtrear";
import Loader from "./Loader";
import { filterData, getData } from "@/utils/storage/actions";

const App = () => {
  const [valor, setValor] = useState();

  const dispatch = useDispatch();
  const country = useSelector((state) => state.countries);
  const searchCountry = useSelector((state) => state.searchCountry);

  function handleChange(event) {
    setValor(event.target.value);

    dispatch(filterData(valor));
  }

  useEffect(() => {
    fetch(`${window.origin}/api/countries`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getData(data));
      });
  }, []);

  return (
    <div>
      <Filtrear handleChange={handleChange} />
      <Region />

      {country.length === 0 ? (
        <Loader />
      ) : (
        <div className={styles.country}>
          {valor === ""
            ? country?.map?.((paises, index) => {
                return (
                  <div className={styles.country__div}>
                    <Country {...paises} key={index} />
                  </div>
                );
              })
            : searchCountry?.map?.((paises, index) => {
                return (
                  <div className={styles.country__div} key={index}>
                    <Country {...paises} />
                  </div>
                );
              })}
        </div>
      )}

      <div className={styles.country}>
        {country?.map?.((city, id) => {
          if (!city) return null;

          return (
            <div className={styles.country__div} key={id}>
              <Country {...city} id={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
