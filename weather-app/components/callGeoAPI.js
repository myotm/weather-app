import React from 'react'

export default function callGeoAPI() {

    const callCoordinatesAPI = async () => {
        try {
          const res = await fetch('http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=5&appid=3b7363a01be6f1a1d6dd6cc797d1107a');
          const data = await res.json();
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      }


  return (
    <div>
        <button onClick={callCoordinatesAPI}>Get GeoCoordinates now!</button>
    </div>
  )
}
