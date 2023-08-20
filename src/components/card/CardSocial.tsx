import { UserGit } from "../../type/user";
import styles from "./CardUser.module.scss"


type PropCardSocial = {
  user: UserGit;
};

export default function CardSocial({ user }: PropCardSocial) {
  return (
    <div className={styles.cardSocial__container}>
      <div className={styles.cardSocial__block}>
        <span className={styles.cardSocial__header}>Location</span>
        <span className={styles.cardSocial__value}>{user.location || "Not Available"}</span>
      </div>
      <div className={styles.cardSocial__block}>
        <span className={styles.cardSocial__header}>Twitter</span>
        <span className={styles.cardSocial__value}>{user.twitter_username || "Not Available"}</span>
      </div>
      <div className={styles.cardSocial__block}>
        <span className={styles.cardSocial__header}>Web site</span>
        <span className={styles.cardSocial__value}>{user.blog || "Not Available"}</span>
      </div>
      <div className={styles.cardSocial__block}>
        <span className={styles.cardSocial__header}>Company</span>
        <span className={styles.cardSocial__value}>{user.company || "Not Available"}</span>
      </div>
    </div>
  );
}
