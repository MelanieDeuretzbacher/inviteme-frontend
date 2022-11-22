import React, { useEffect, useState } from "react";
import styles from "./../css/views/pending.module.scss";
import usercontent from "./../content/userDummydata.json";
import eventcontent from "./../content/eventDummydata.json";
import ReusableCard from "../components/ReusableCard";
// import ReusableButton from "../components/ReusableButton";

const Pending = () => {
  const [pendingArr, setPendingArr] = useState();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const user = usercontent.users[2];

  useEffect(() => {
    getEventsPending();
    // eslint-disable-next-line
  }, []);

  const rsvp = (att) => {
    att ? console.log("Coming") : console.log("not coming");
  }

  const convertMonth = (month) => {
    const splitMonth = month.split("-");
    const currentMonth = parseInt(splitMonth[1]);
    return `${splitMonth[2]} ${months[currentMonth - 1]}`;
  }

  const getEventsPending = () => {
    const eventsPending = eventcontent.events.filter(ev => {
      let pendingEv;
      if (!user.events.eventsGoing.includes(ev.eventId) && !user.events.eventsNotGoing.includes(ev.eventId)) {
        pendingEv = ev;
      }
      return pendingEv;
    });
    setPendingArr(eventsPending);
  }

  return(
    <div className={styles.pendingWrapper}>
      <h2>Your Pending Events</h2>
      <p>You haven't answered yet if you can make it!</p>
      <div className={styles.pendingContainer}>
        { pendingArr && pendingArr.map((ev, index) => {
            return(
              <ReusableCard key= {"event_" + index}>
                <div className={styles.upperPart}>
                  <div className={`${styles.justifyFlexContent} ${styles.dateContainer}`}>
                    <p className={styles.date}>{convertMonth(ev.eventDate)}</p>
                    <p className={styles.time}>{ev.eventTime}</p>
                  </div>
                  <div className={`${styles.justifyFlexContent} ${styles.nameContainer}`}>
                    <p className={styles.title}>{ev.eventTitle}</p>
                  </div>
                </div>
                <div className={`${styles.justifyFlexContent} ${styles.iconContainer}`}>
                  <button className={styles.rsvpButton} onClick={(e) => { rsvp(true); }}>
                    <img alt="icon for not attending" src="assets/images/icons/check.png" />
                  </button>
                  <button className={styles.rsvpButton} onClick={(e) => { rsvp(false); }}>
                    <img alt="icon for attending" src="assets/images/icons/decline.png" />
                  </button>
                </div>
              </ReusableCard>
            )
          })
        }
      </div>
    </div>
  );
}

export default Pending;