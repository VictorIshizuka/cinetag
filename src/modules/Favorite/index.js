import { Banner } from "components/Banner/banner";
import favorite from "../../assets/Rectangle-2.png";
import { Title } from "components/Title";

export const Favorite = () => {
  return (
    <>
      <Banner image={favorite} />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
    </>
  );
};
