import React from 'react';
import { useState, useEffect } from 'react';
import Map from './components/Map';
import Loader from './components/Loader'
function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      // const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events?status=open')
      // const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }    
    fetchEvents();
  }, 
  []);
  // console.log(eventData)

  return (
    <div>
     { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
};

export default App;
