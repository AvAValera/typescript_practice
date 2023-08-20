import ThemeBtn from "./ThemeBtn.tsx";
import styles from "./Header.module.scss"

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Dev Finder</h1>
      <ThemeBtn />
    </div>
  );
};