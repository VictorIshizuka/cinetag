import videos from "./../../mock/db.json";

import styles from "./inicio.module.css";

import { Title } from "components/Title";
import { Card } from "components/Card";
import { Banner } from "components/Banner/banner";

import home from "../../assets/Rectangle-1.png";

export function Initial() {
  return (
    <>
      <Banner image={home} />
      <Title>
        <h2>Um lugar para guardar seus vídeos e filmes</h2>
      </Title>
      <section className={styles.container}>
        {videos.map((video, id) => {
          return <Card {...video} key={id} />;
        })}
      </section>
    </>
  );
}
