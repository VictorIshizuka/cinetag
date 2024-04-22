import { Title } from "components/Title";
import { Card } from "components/Card";
import videos from "./../../mock/db.json";
import home from "../../assets/Rectangle-1.png";
import { Banner } from "components/Banner/banner";
import { Container } from "components/Container";

export function Initial() {
  return (
    <>
      <Banner image={home} />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
      </Title>
      <Container>
        {videos.map((video, id) => {
          return <Card {...video} key={id} />;
        })}
      </Container>
    </>
  );
}
