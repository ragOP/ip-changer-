import React, { useState, useEffect } from 'react';

function Greeting() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Fetch the user's IP address
        const ipResponse = await fetch('https://api64.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const ipAddress = ipData.ip;
var token ="03b8ea24664ece"
        // Use the IP address to fetch location information from ipinfo.io
        const locationResponse = await fetch(`https://ipinfo.io/${ipAddress}/json?token=${token}`);
        const locationData = await locationResponse.json();
        setLocation(locationData.city);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <div>
      {location ? (
        <div>
          {location === 'Delhi' ? (
            <h1>Hello {location}</h1>
          ) : (
            <h1>Hello Bengal</h1>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Greeting;
