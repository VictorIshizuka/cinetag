import { Link } from "react-router-dom";

import { useFavoriteContext } from "context/favoriteContext";

import styles from "./card.module.css";

import iconFavorite from "../../assets/favorite.png";
import iconNotFavorite from "../../assets/favorite_outline.png";

export const Card = ({ id, banner, title }) => {
  const { addFavorite, isFavorite } = useFavoriteContext();
  const haveFavorite = isFavorite.some(fav => fav.id === id);
  const icon = !haveFavorite ? iconNotFavorite : iconFavorite;
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={banner} className={styles.image} alt={title} />
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <img
        src={icon}
        className={styles.favorite}
        onClick={() => {
          addFavorite({ id, banner, title });
        }}
        alt="favoritar filme"
      />
    </div>
  );
};
