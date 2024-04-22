import styles from "./card.module.css";
import iconFavorite from "../../assets/favorite.png";

export const Card = ({ id, banner, title }) => {
  return (
    <div className={styles.container}>
      <img src={banner} className={styles.image} alt="" />
      <h2 className={styles.title}>{title}</h2>
      <img src={iconFavorite} className={styles.favorite} alt="" />
    </div>
  );
};
