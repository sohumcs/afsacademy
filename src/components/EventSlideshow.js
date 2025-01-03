import React from 'react';

const EventSlideshow = ({ events }) => {
  return (
    <div className="slideshow">
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <h3>{event.title}</h3>
          <p>{event.date}</p>
          <button onClick={() => window.open(event.link, '_blank')}>Enroll</button>
        </div>
      ))}
    </div>
  );
};

export default EventSlideshow;
