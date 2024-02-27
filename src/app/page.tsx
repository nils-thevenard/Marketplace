import MainPage from "./marketplace/mainPage";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <MainPage />
      </div>
    </main>
  );
}
