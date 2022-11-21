import React, {useState, useEffect} from "react";
import styles from "./../css/addeventform.module.scss";
import ReusableButton from "./ReusableButton";

const AddEventForm = () => {

  const [formData, setFormData] = useState(false);

  useEffect(() => {
    console.log(formData);
  }, [formData])

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      eventTitle: e.target.eventTitle.value,
      eventDate: e.target.eventDate.value,
      eventTime: e.target.eventTime.value,
      eventLocation: e.target.eventLocation.value,
      eventDescription: e.target.eventDescription.value,
    });
  }

  return(
    <form className={styles.eventForm} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="eventTitle">Event Name</label>
        <input name="eventTitle" id="eventTitle" type="text" required/>
      </div>
      <div>
        <label htmlFor="eventDate">Date</label>
        <input id="eventDate" name="eventDate" type="date" required/>
      </div>
      <div>
        <label htmlFor="eventTime">Time</label>
        <input name="eventTime" id="eventTime" type="time" required/>
      </div>
      <div>
        <label htmlFor="eventLocation">Where</label>
        <input input="eventLocation"name="eventLocation" type="text" required/>
      </div>
      <div className={styles.descriptionBox}>
        <label htmlFor="eventDescription">Description (optional)</label>
        <textarea id="eventDescription" name="eventDescription" type="text" />
      </div>
      <div>
        <ReusableButton type="submit">Invite to Event</ReusableButton>
      </div>
    </form>
  )
}

export default AddEventForm;