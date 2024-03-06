import React from "react";
import styles from "./flexgrid.module.scss";

export default function FlexGrid() {
  return (
    <div>
      <div className={styles.flexGrid1}>
        <div className={styles.box1}>this is a test page for css flexgrid</div>
        <div className={styles.box2}>2</div>
        <div className={styles.box3}>3</div>
        <div className={styles.box4}>4</div>
      </div>

      <div className={styles.flexGrid2}>
        <div className={styles.box1}>1</div>
        <div className={styles.box2}>2</div>
        <div className={styles.box3}>3</div>
        <div className={styles.box4}>
          <div className={styles.numberInBox4}>4</div>
        </div>
      </div>
    </div>
  );
}
