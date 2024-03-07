import React, { useState, useEffect } from 'react';

function Greeting() {
  const [city, setLocation] = useState(null);

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
        console.log('locationData',locationData);
        setLocation(locationData.city);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <div>
      {city ? (
        city === 'Delhi' ? (
          <iframe title="Registration" src="https://91666.in/#/register?invitationCode=278521545956" style={{ width: '100%', height: '500px', border: 'none' }} />
        ) : (
          <h1>Hello {city}</h1>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Greeting;
