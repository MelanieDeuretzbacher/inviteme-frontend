import React from "react";
import styles from "./../css/views/addevent.module.scss";
import AddEventForm from "./../components/AddEventForm";

const AddEvent = () => {
  return(
    <div className={styles.addEventWrapper}>
      <h2>Add new Event</h2>
      <p>Let's get together!</p>
      <AddEventForm />
    </div>
  );
}

export default AddEvent;