import { Title } from "components/Title";
import { Card } from "components/Card";
import videos from "./../../mock/db.json";
import home from "../../assets/Rectangle-1.png";
import { Banner } from "components/Banner/banner";

export function Initial() {
  return (
    <>
      <Banner image={home} />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
      </Title>
      <section style={{ display: "flex", justifyContent: "space-around" }}>
        {videos.map((video, id) => {
          return <Card {...video} key={id} />;
        })}
      </section>
    </>
  );
}
