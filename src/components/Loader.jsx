import React from "react";
import styles from "../styles/components/Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader__center}>
      <div className={styles.lds__spinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
