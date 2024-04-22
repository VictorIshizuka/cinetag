import styles from "./banner.module.css";

export const Banner = ({ image }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};
