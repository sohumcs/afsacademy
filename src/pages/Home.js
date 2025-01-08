import React from 'react';
import EventSlideshow from '../components/EventSlideshow';

const events = [
  { title: 'Basketball Workshop', date: '2025-01-15', link: 'https://forms.gle/example' },
  { title: 'Advanced Training Camp', date: '2025-02-01', link: 'https://forms.gle/example' },
];

const Home = () => {
  return (
    <div>
      <EventSlideshow events={events} />
    </div>
  );
};

export default Home;
