import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/components/HeadForCountry.module.css";
import DarkMode from "./DarkMode";
import { booleanoAdd } from "@/utils/storage/actions";
import Link from "next/link";

const HeadForCountry = () => {
  const [dark, setDark] = useState(false);
  const main = dark ? "color__black" : "color__white";
  const a = dark ? styles.isA : styles.isB;
  const dispatch = useDispatch();

  dispatch(booleanoAdd(dark));

  return (
    <div>
      <div className={`${main} ${styles.head}`}>
        <Link href="/" className={`${a} ${styles.a}`}>
          <h1 className={styles.head__where}>Where in the world are you?</h1>
        </Link>
        <div className={styles.head__dark}>
          <DarkMode dark={dark} setDark={setDark} />
        </div>
      </div>
    </div>
  );
};

export default HeadForCountry;
