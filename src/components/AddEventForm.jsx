import React, {useState, useEffect} from "react";
import styles from "./../css/addeventform.module.scss";
import ReusableButton from "./ReusableButton";
import axios from "axios";

const AddEventForm = () => {

  const [formData, setFormData] = useState(false);
  const [amountEvents, setAmountEvents] = useState();

  useEffect(() => {
    getEventAmount();
  }, [])

  const getEventAmount = async () => {
    const url = "https://test-test-test-jucwb6gsyq-ew.a.run.app";
    try {
      const response = (await axios.get(`${url}`)).data;
      setAmountEvents(response.length);
    } catch (error) {
      console.error(error);
    }
  }

  const sendDataToAPI = async () => {
    const url = "https://test-test-test-jucwb6gsyq-ew.a.run.app";
    await axios.post(`${url}/event`, {
      // desc, date, title, loca
      eventId: parseInt(amountEvents)+1,
      eventTitle: formData.eventTitle,
      eventDate: formData.eventDate,
      eventTime: formData.eventTime,
      eventLocation: formData.eventLocation,
      description: formData.eventDescription
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      eventTitle: e.target.eventTitle.value,
      eventDate: e.target.eventDate.value,
      eventTime: e.target.eventTime.value,
      eventLocation: e.target.eventLocation.value,
      eventDescription: e.target.eventDescription.value,
    });
    sendDataToAPI();
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