import { useState } from "react";

const Event = ({event}) => {
  let eventStartDate = new Date();
  if (event?.start?.dateTime) {
    eventStartDate = new Date(event.start.dateTime);
  }
  const [showDetail, setShowDetail] = useState(false);

  const toggleShowDetail = () => {
    setShowDetail(!showDetail);
  };
  return (
    <li className="event">
      <h3 title="eventSummary" className="eventSummary">{event?.summary}</h3>
      <div className="eventTime">
        {eventStartDate.toDateString()} {eventStartDate.toTimeString()}
      </div>
      <div className="eventInfo">
        <span className="eventInfoSummary">{event?.summary}</span>
        <span> | </span>
        <span className="eventInfoLocation">{event?.location}</span>
      </div>
      {showDetail ? (
        <>
          <div className="eventDetail" role="article">
            <h4>Abount Event:</h4>
            <div><a href={event.htmlLink}>See details on Google Calendar</a></div>
            <div>{event.description}</div>
          </div>
          <button onClick={toggleShowDetail} className="details-btn">Hide Detail</button>
        </>
      ) : (
        <button onClick={toggleShowDetail}>Show Detail</button>
      )}
    </li>
  );
};

export default Event;
