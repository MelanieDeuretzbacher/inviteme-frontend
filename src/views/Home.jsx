import React from "react";
import styles from "./../css/views/home.module.scss";
import EventCard from "./../components/EventCard";

const Home = () => {
  return(
    <div className={styles.homeWrapper}>
      <h2>Hej, [Username]!</h2>
      <p>You have X upcoming events:</p>
      <div className={styles.homeEventWrapper}>
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  )
}

export default Home;