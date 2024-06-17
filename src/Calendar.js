// src/Calendar.js

import React from 'react';

const Calendar = () => {
  return (
    <div style={{ display: 'inline-block' }}>
      <iframe 
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&src=aG91c3RvbmFjY29yZGlvbmFzc29jQGdtYWlsLmNvbQ&color=%23039BE5"
        style={{ border: 'solid 1px #777' }} 
        width="800" 
        height="600" 
        frameBorder="0" 
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default Calendar;
