import React from "react";
import FilteredCards from "./search/filteredCards";

import styles from "./marketplacePage.module.scss";
import MainComponent from "./search/newComponent";

export default function MarketplacePage() {
  return (
    <div className={styles.main}>
      <div className={styles.filteredCards}>
        <FilteredCards />
      </div>

      {/* <MainComponent /> */}
    </div>
  );
}
