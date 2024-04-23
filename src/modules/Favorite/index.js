import { Banner } from "components/Banner/banner";
import favorite from "../../assets/Rectangle-2.png";
import { Title } from "components/Title";
import { useFavoriteContext } from "context/favoriteContext";
import { Card } from "components/Card";
import { Container } from "components/Container";

export const Favorite = () => {
  const { isFavorite } = useFavoriteContext();
  return (
    <>
      <Banner image={favorite} />
      <Title>
        <h2>Meus Favoritos</h2>
        <Container>
          {isFavorite.map(favorite => {
            return <Card {...favorite} key={favorite.id} />;
          })}
        </Container>
      </Title>
    </>
  );
};
