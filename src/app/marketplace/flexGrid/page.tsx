import React from "react";
import styles from "./flexgrid.module.scss";

export default function FlexGrid() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.box1}>1</div>
      <div className={styles.box2}>2</div>
      <div className={styles.box3}>3</div>
      <div className={styles.box4}>4</div>
    </div>
  );
}
