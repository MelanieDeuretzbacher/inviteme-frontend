import React from "react";
import styles from "./../css/views/home.module.scss";

// import EventCard from "./../components/EventCard";
import ReusableCard from "../components/ReusableCard";

const Home = () => {

  const eventInfo = [

    {
      eventId: 1,
      eventTitle: "Party", 
      eventDate: 2022,
      eventLocation: "Malmö",
      description: "", 
    },
    {
      eventId: 2,
      eventTitle: "Mingel", 
      eventDate: 2022,
      eventLocation: "Hubhult",
      description: "", 
    }

  ];

  return (

    <div className={styles.homeWrapper}>
      <h2>Hej, [Username]!</h2>
      <p>You have X upcoming events:</p>
      <div className={styles.homeEventWrapper}>


        {eventInfo.map((event, index) => {
          return (
            <ReusableCard key= {"event_" + index}>
            <div className="eventTime">
            <h3>{event.eventDate}</h3> 
            <h6>Time</h6>
            </div>
            <div className= "event">
            <h2>{event.eventTitle}</h2>
            </div>
            <input type="checkbox" />
          </ReusableCard>
          )
         }
        )}
      </div>
    </div>
  )
}

export default Home;