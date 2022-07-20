import React from 'react'

export default function callWeatherAPI() {

    const callWeatherAPI = async () => {
        try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=3b7363a01be6f1a1d6dd6cc797d1107a`);
        const data = await res.json();
        console.log(data);
        } catch (err) {
        console.log(err);
        }
    
    };

  return (
    <div>
        <button onClick={callWeatherAPI} >Get Weather forecast now!</button>
    </div>
  )
}
