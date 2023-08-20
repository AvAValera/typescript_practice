import { UserGit } from "../../type/user";
import styles from "./CardUser.module.scss";

type PropsCardInfo = {
  user: UserGit
}

export default function CardInfo({user}: PropsCardInfo) {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.cardInfo__column}>
        <span className={styles.cardInfo__header}>Repos</span>
        <span className={styles.cardInfo__count}>{user.public_repos}</span>
      </div>
      <div className={styles.cardInfo__column}>
        <span className={styles.cardInfo__header}>Following</span>
        <span className={styles.cardInfo__count}>{user.following}</span>
      </div>
      <div className={styles.cardInfo__column}>
        <span className={styles.cardInfo__header}>Followers</span>
        <span className={styles.cardInfo__count}>{user.followers}</span>
      </div>
    </div>
  );
}
