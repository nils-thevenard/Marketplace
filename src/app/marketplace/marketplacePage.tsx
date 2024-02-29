import React from "react";
import FilteredCards from "./search/filteredCards";
import Header from "./layout/header";
import styles from "./marketplacePage.module.scss";
import MainComponent from "./search/newComponent";

export default function MainPage() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.filteredCards}>
        <FilteredCards />
      </div>

      {/* <MainComponent /> */}
    </div>
  );
}
