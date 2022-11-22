import React, { useState } from "react";
import styles from "./../css/views/home.module.scss";
import usercontent from "./../content/userDummydata.json";
import eventcontent from "./../content/eventDummydata.json";

// import EventCard from "./../components/EventCard";
import ReusableCard from "../components/ReusableCard";
import EventDetails from "../components/EventDetails";

const Home = () => {

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [togglePopUp, setTogglePopUp] = useState(false);
  const [currentEv, setCurrentEv] = useState(false);

  // const [weekSpan, setWeekSpan] = useState();
  // const [filteredEventsArr, setFilteredEventsArr] = useState();

  const user = usercontent.users[2];
  const upcomingEvents = eventcontent.events;

  // useEffect(() => {
  //   getTodaysDate();
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   if(weekSpan) filterEventsArr();
  //   // eslint-disable-next-line
  // }, [weekSpan]);

  // useEffect(() => {
  //   console.log(filteredEventsArr);
  // }, [filteredEventsArr]);

  // TODO: add counter to showcase amount of days

  // const getTodaysDate = () => {
  //   var today = new Date();
  //   var dd = String(today.getDate()).padStart(2, '0');
  //   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  //   var yyyy = today.getFullYear();

  //   today = `${yyyy}-${mm}-${dd}`;
  //   console.log(today);
  //   getNextWeeksDate(today);
  // }

  // const getNextWeeksDate = (today) => {
  //   const nextWeek = new Date();

  //   // add 7 days to the current date
  //   nextWeek.setDate(new Date().getDate() + 7);
  //   var dd = String(nextWeek.getDate()).padStart(2, '0');
  //   var mm = String(nextWeek.getMonth() + 1).padStart(2, '0'); //January is 0!
  //   var yyyy = nextWeek.getFullYear();

  //   const nextWeekString = `${yyyy}-${mm}-${dd}`;

  //   setWeekSpan({
  //     "today": today,
  //     "nextWeek": nextWeekString
  //   });
  // }

  // const filterEventsArr = () => {
  //   const nw_Date = weekSpan.nextWeek.split("-");
  //   const nw = new Date(nw_Date[2], nw_Date[1] - 1, nw_Date[0]).setHours(0, 0, 0, 0);
  //   const today = new Date().setHours(0, 0, 0, 0);
  //   const filteredArr = weekSpan && eventcontent.events.map((ev) => {
  //     const d_Date = ev.eventDate.split("-");
  //     const evDate = new Date(d_Date[2], d_Date[1] - 1, d_Date[0]).setHours(0, 0, 0, 0);
  //     let isWithinWeek;
  //     if (evDate - today > 0 && evDate - nw < 0) {
  //       isWithinWeek = ev;
  //     }
  //     return isWithinWeek;
  //   });
  //   setFilteredEventsArr(filteredArr);
  // }

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
      <p>You have {eventcontent.events.length} upcoming events:</p>
      <div className={styles.homeEventWrapper}>


        {upcomingEvents && upcomingEvents.map((event, index) => {
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