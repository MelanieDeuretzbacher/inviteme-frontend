import React from "react";
import { Link } from "react-router-dom";
import styles from "./../css/navbar.module.scss";

const Navbar = () => {
  return(
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link to="/pending">Pending</Link>
        </li>
        <li className={styles.navListItem}>
          <Link to="/add">Add</Link>
        </li>
        <li className={styles.navListItem}>
          <Link to="/calendar">Calendar</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;