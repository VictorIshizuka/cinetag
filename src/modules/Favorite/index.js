import { Banner } from "components/Banner/banner";
import favorite from "../../assets/Rectangle-2.png";
import { Title } from "components/Title";
import { useFavoriteContext } from "context/favoriteContext";
import { Card } from "components/Card";

export const Favorite = () => {
  const { isFavorite } = useFavoriteContext();
  return (
    <>
      <Banner image={favorite} />
      <Title>
        <h1>Meus Favoritos</h1>
        <section
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: "32px",
          }}
        >
          {isFavorite.map(favorite => {
            return <Card {...favorite} key={favorite.id} />;
          })}
        </section>
      </Title>
    </>
  );
};
