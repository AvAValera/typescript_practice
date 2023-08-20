import styles from "./Search.module.scss"
import SearchBtn from "./SearchBtn.tsx";
import React, {useRef} from "react";

type PropSearch = {
  getUser: (userName: string) => void,
  error: boolean
}

export default function Search({getUser, error}: PropSearch) {
 const inputRef= useRef<HTMLInputElement>(null);

  function keyPress (event:React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter"){
      searchUser()
    }
  }

 const searchUser = () => {
   if (inputRef.current ){
     getUser(inputRef.current.value)
   }
 }

    return (
      <div className={styles.search__container}>
        <svg className={styles.search__icon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 20 20">
          <path stroke="#0079ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <input onKeyDown={e => keyPress(e)} ref={inputRef} className={styles.search__input} type="text" placeholder="Search GitHub username..."/>
        {
          error && <span className={styles.search__error}>User not found</span>
        }
        <SearchBtn onClick={() => {searchUser()}}/>
      </div>
    );

};