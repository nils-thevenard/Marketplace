import React from "react";
import CourseCard from "./search";
import styles from "./courseCard.module.scss";

export default function Search() {
  return (
    <div className={styles.layout}>
      <CourseCard />
    </div>
  );
}
