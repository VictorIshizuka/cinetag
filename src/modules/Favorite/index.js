import { useFavoriteContext } from "context/favoriteContext";

import styles from "./favorite.module.css";

import { Banner } from "components/Banner/banner";
import { Title } from "components/Title";
import { Card } from "components/Card";

import favorite from "../../assets/Rectangle-2.png";

export const Favorite = () => {
  const { isFavorite } = useFavoriteContext();
  return (
    <>
      <Banner image={favorite} />
      <Title>
        <h2>Meus Favoritos</h2>
      </Title>
      <section className={styles.container}>
        {isFavorite.map(favorite => {
          return <Card {...favorite} key={favorite.id} />;
        })}
      </section>
    </>
  );
};
