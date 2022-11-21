import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../components/Header";
import NavBar from "../components/Nav";
import styles from "./../css/views/layout.module.scss";

const Layout = () => {
  return(
    <>
      <div className={styles.pageWrapper}>
        <Header />
        <Outlet />
        <NavBar />
      </div>
    </>
  )
}

export default Layout;