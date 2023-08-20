import Header from "./components/header/Header.tsx";
import styles from "./App.module.scss"
import Search from "./components/search/Search.tsx";
import CardUser from "./components/card/CardUser.tsx";
import {UserGit} from "./type/user.ts"
import {useEffect, useState} from "react";
import {isGitUser} from "./utils/typeGuard.ts";


const BASE_URL: string = "https://api.github.com/users/";

function App() {

  const [user, setUser] = useState<UserGit | null>(null);
  const [error, setError] = useState(false)

  const getUser = async (userName: string = "avavalera") => {
    const res = await  fetch(BASE_URL + userName);
    const user = await res.json() as UserGit ;

    if (isGitUser(user)){
      setUser(user)
      setError(false)
    }
    else {
      setError(true)
      setUser(null)
    }

  }
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className={styles.app__container}>
      <Header />
      <Search getUser={getUser} error={error}/>
      {user && <CardUser user={user}/>}

    </div>
  )
}

export default App
