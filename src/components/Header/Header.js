import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faShoppingCart,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.wrapperHeaderLeft}>
        <FontAwesomeIcon icon={faHome} size="2x" />
      </div>
      <h1>DOMOWA SPIŻARNIA</h1>
      <div className={styles.wrapperHeaderRight}>
        <FontAwesomeIcon icon={faPlusSquare} size="2x" />
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        <FontAwesomeIcon icon={faCog} size="2x" />
      </div>
    </header>
  );
};

export default Header;
