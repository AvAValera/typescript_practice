import styles from "./CardUser.module.scss";
import { UserGit } from "../../type/user.ts";
import CardInfo from "./CardInfo.tsx";
import CardSocial from "./CardSocial.tsx";

type CardProps = {
  user: UserGit;
};

export default function CardUser({ user }: CardProps) {
  const dateCreate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const joinDate = dateCreate.format(new Date(user.created_at));

  return (
    <div className={styles.cardUser__container}>
      <div className={styles.cardUser__container_header}>
        <div>
          <img
            className={styles.cardUser__container_img}
            src={user.avatar_url}
            alt=""
          />
        </div>
        <div className={styles["cardUser__container_left"]}>
          <div className={styles.cardUser__container_headerText}>
            <h2>{user.name}</h2>
            <span> Join {joinDate}</span>
          </div>
          <span className={styles["cardUser__container_login"]}>
            @{user.login}
          </span>
          <p className={styles['cardUser__container_bio']}>{user.bio}</p>
          <CardInfo user={user} />
          <CardSocial user={user} />
        </div>
      </div>
    </div>
  );
}
