import React from "react";
import styles from "./../css/eventDetails.module.scss";

const EventDetails = ({currentEv, toggleModal}) => {

  const closePopUp = () => {
    toggleModal();
  }

  return (
    <div className={styles.modalBody}>
      <div className={styles.closingBtnContainer}>
        <p className={styles.closingBtn} onClick={closePopUp}>x</p>
      </div>
      <div className={styles.eventInfo}>
        <h2>{currentEv.eventTitle}</h2>
        <p>When? {currentEv.eventDate}</p>
        <p>{currentEv.eventTime}</p>
        <p>Where? {currentEv.eventLocation}</p>
        <p>What? {currentEv.description}</p>
      </div>
    </div>
  )
}

export default EventDetails;