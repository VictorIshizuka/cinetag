import { Link } from "react-router-dom";
import logo from "../../assets/Logo-cinetag-branco1.png";
import styles from "./header.module.css";
import { HeaderLink } from "./HeaderLink";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} width={170} height={48} alt="" />
      </Link>
      <nav>
        <HeaderLink url="./">Home</HeaderLink>
        <HeaderLink url="./favorite">Favoritos</HeaderLink>
      </nav>
    </header>
  );
};
