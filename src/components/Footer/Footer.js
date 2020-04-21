import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.wrapperFooterRight}>
        <FontAwesomeIcon
          className={styles.wrapperFooterIcon}
          icon={faGithubSquare}
          size="2x"
        />
        <FontAwesomeIcon
          className={styles.wrapperFooterIcon}
          icon={faLinkedin}
          size="2x"
        />
      </div>
    </footer>
  );
};

export default Footer;
