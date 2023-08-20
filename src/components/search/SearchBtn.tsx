import styles from "./Search.module.scss";

type PropsBtn = {
  onClick: () => void
}
export default function SearchBtn({onClick}: PropsBtn) {



  return (
    <button onClick={onClick} className={styles.search__btn}>
      Search
    </button>
  );
};