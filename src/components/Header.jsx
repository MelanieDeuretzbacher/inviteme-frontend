import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/header.module.scss";

const Header = () => {
  return(
    <div className={styles.headerContainer}>
      <div className={styles.headerNav}>
      <Link to="/">
        <img alt="party hat" src="assets/images/party-logo.png" className={styles.logo} />
      </Link>
      </div>
    </div>
  )
}

export default Header;