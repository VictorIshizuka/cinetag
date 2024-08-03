import { Link } from "react-router-dom";

import styles from "./header.module.css";

import logo from "../../assets/Logo-cinetag-branco1.png";

import { HeaderLink } from "./HeaderLink";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} alt="logo do cinetag" />
      </Link>
      <nav>
        <HeaderLink url="./">Home</HeaderLink>
        <HeaderLink url="./favorite">Favoritos</HeaderLink>
      </nav>
    </header>
  );
};
