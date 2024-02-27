import React from "react";
import FilteredCards from "./search/filteredCards";
import Header from "./layout/header";
import styles from "./marketplacePage.module.scss";

export default function MainPage() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.filteredCards}></div>
      <FilteredCards />
    </div>
  );
}
