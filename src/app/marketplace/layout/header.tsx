import React from "react";
import styles from "./layout.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className={styles.header}>
        <Link href="/" className={styles.logo}>
          dacreed
        </Link>
        <div className={styles.pageLinks}>
          <div>Platform</div>
          <div>Solutions</div>
          <div>About</div>
        </div>
        <div className={styles.loginDemo}>
          <h1>Login</h1>
          <Link href="/marketplace/flexGrid" className={styles.demo}>
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
