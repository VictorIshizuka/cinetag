import { Link } from "react-router-dom";
import styles from "./headerLink.module.css";

export function HeaderLink({ url, children }) {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  );
}
