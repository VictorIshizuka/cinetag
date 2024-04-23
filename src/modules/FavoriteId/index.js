import { Banner } from "components/Banner/banner";
import styles from "./favoriteId.modules.css";
import FavoriteIdBanner from "../../assets/Rectangle-3.png";
import { Title } from "components/Title";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "modules/NotFound";

export const FavoriteId = () => {
  const [isMove, setIsMove] = useState(false);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${params.id}`
    ).then(res => res.json().then(data => setIsMove(...data)));
  }, []);

  if (!isMove) {
    <NotFound />;
  }
  return (
    <>
      <Banner image={FavoriteIdBanner} />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.movi}>
        {!isMove ? (
          <h2>Erro ao carregar o video</h2>
        ) : (
          <iframe
            width={800}
            height={451}
            src={isMove.link}
            title={isMove.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        )}
      </section>
    </>
  );
};
