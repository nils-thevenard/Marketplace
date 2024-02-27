import React from "react";
import styles from "./layout.module.scss";

export default function Header() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.logo}>dacreed</h1>
        <div className={styles.pageLinks}>
          <div>Platform</div>
          <div>Solutions</div>
          <div>About</div>
        </div>
        <div className={styles.loginDemo}>
          <h1>Login</h1>
          <h2 className={styles.demo}>Demo</h2>
        </div>
      </div>
    </div>
  );
}
