import React, { useEffect, useState } from "react";
import styles from "./../css/views/home.module.scss";
import usercontent from "./../content/userDummydata.json";
// import eventcontent from "./../content/eventDummydata.json";
import axios from "axios";
// import EventCard from "./../components/EventCard";
import ReusableCard from "../components/ReusableCard";
import EventDetails from "../components/EventDetails";

const Home = () => {

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [togglePopUp, setTogglePopUp] = useState(false);
  const [currentEv, setCurrentEv] = useState(false);
  const [eventArr, seteventArr] = useState([]);

  const user = usercontent.users[2];
  // const upcomingEvents = eventcontent;

  useEffect(() => {
    getEventData();
  }, [])

  const getEventData = async () => {
    const url = "https://test-test-test-jucwb6gsyq-ew.a.run.app";
    try {
      const response = (await axios.get(`${url}`)).data;
      console.log(response)
      seteventArr(response);
      // response.forEach(el => {
      //   console.log(el);
      //   eventcontent.push(el)
      // });
    } catch (error) {
      console.error(error);
    }
  }

  const convertMonth = (month) => {
    const splitMonth = month.split("-");
    const currentMonth = parseInt(splitMonth[1]);
    return `${splitMonth[2]} ${months[currentMonth - 1]}`;
  }

  const renderIcon = (eventId) => {
    let rightImg="assets/images/icons/";
    if (user.events.eventsGoing.includes(eventId)) {
      rightImg+="check.png";
    } else if (user.events.eventsNotGoing.includes(eventId)) {
      rightImg+="decline.png";
    } else if (!user.events.eventsGoing.includes(eventId) && !user.events.eventsNotGoing.includes(eventId)) {
      rightImg+="pending-icon.svg";
    }
    return rightImg;
  }

  const toggleModal = () => {
    togglePopUp ? setTogglePopUp(false) : setTogglePopUp(true);
  }

  const showInfo = (ev) => {
    setCurrentEv(ev);
    toggleModal();
  }

  return (

    <div className={styles.homeWrapper}>
      <div className={`${togglePopUp ? "" : styles.noShow} ${styles.modalpopup}`}>
        <EventDetails toggleModal={toggleModal} currentEv={currentEv}/>
      </div>
      <h2>Hej, {user.username}!</h2>
      <p>You have {eventArr.length} upcoming events:</p>
      <div className={styles.homeEventWrapper}>

        {eventArr && eventArr.map((event, index) => {
          return (
            <ReusableCard key={"event_" + index} ev={event} showInfo={showInfo}>
            <div className={`${styles.justifyFlexContent} ${styles.dateContainer}`}>
              <p className={styles.date}>{convertMonth(event.eventDate)}</p>
              <p className={styles.time}>{event.eventTime}</p>
            </div>
            <div className={`${styles.justifyFlexContent} ${styles.nameContainer}`}>
              <p className={styles.title}>{event.eventTitle}</p>
            </div>
            <div className={`${styles.justifyFlexContent} ${styles.iconContainer}`}>
              <img alt="attendence icon" src={renderIcon(event.eventId)} />
            </div>
          </ReusableCard>
          )
         }
        )}
      </div>
    </div>
  )
}

export default Home;