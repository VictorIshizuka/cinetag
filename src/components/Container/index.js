import styles from "./container.module.css";

export const Container = ({ children }) => {
  return <section className={styles.isContainer}>{children}</section>;
};
