import {useEffect, useState} from "react";
import styles from "./Header.module.scss"


export default function ThemeBtn() {

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    document.body.setAttribute("theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <div className={styles.btn} onClick={() => setIsDark(!isDark)}>
      <span className={styles.btn__text} >{isDark? "LIGHT" : "DARK"}</span>
      {
        isDark ?
          <svg className={styles.btn__icon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20">
            <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"/>
          </svg>:
          <svg className={styles.btn__icon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 18 20">
            <path stroke="gray" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"/>
          </svg>


      }
    </div>
  );
};