import React from "react";
import { Link } from "react-router-dom";
import styles from "./../css/navbar.module.scss";

const Navbar = () => {
  return(
    <nav className={styles.nav}>
      <ul className={styles.navList}>
      <li className={styles.navListItem}>
          <Link to="/">
            <img src="assets/images/icons/home-icon.svg" />
            <p>Home</p>
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link to="/add">
            <img src="assets/images/icons/add-icon.svg" />
            <p>Add</p>
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link to="/pending">
            <img src="assets/images/icons/pending-icon.svg" />
            <p>Pending</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;