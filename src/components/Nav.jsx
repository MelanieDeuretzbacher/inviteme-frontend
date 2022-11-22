import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./../css/navbar.module.scss";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState();

  useEffect(() => {
    setActiveNav("home");
  }, [])

  const toggleActive = (e, item) => {
    e.stopPropagation();
    setActiveNav(item);
  }

  return(
    <nav className={styles.nav}>
      <ul className={styles.navList}>
      <li className={`${activeNav === "home" ? styles.activeNavItem : ""} ${styles.navListItem}`} onClick={e => {toggleActive(e, "home")}}>
          <Link to="/">
            <img alt="house icon" src="assets/images/icons/home-icon.svg" />
            <p>Home</p>
          </Link>
        </li>
        <li className={`${activeNav === "add" ? styles.activeNavItem : ""} ${styles.navListItem}`} onClick={e => {toggleActive(e, "add")}}>
          <Link to="/add">
            <img alt="plus icon" src="assets/images/icons/add-icon.svg" />
            <p>Add</p>
          </Link>
        </li>
        <li className={`${activeNav === "pending" ? styles.activeNavItem : ""} ${styles.navListItem}`} onClick={e => {toggleActive(e, "pending")}}>
          <Link to="/pending">
            <img alt="clock icon" src="assets/images/icons/pending-icon.svg" />
            <p>Pending</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;