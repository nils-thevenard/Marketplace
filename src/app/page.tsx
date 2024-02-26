import styles from "./page.module.scss";
import Search from "./marketplace/search/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Search />
      </div>
    </main>
  );
}
