import React from 'react'
import Link from 'next/link';

export default function WeatherComponent() {

  const [zipCode, setZipCode] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("");
  const [iconCode, setIconCode] = React.useState("")
  

  const onZipCodeChange = (e) => {
      const {value}  = e.target;
      setZipCode(value);
  }
  const onCountryCodeChange = (e) => {
    const {value}  = e.target;
    setCountryCode(value);
  }
 

  const callWeatherAPI = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=3b7363a01be6f1a1d6dd6cc797d1107a`);
      const data = await res.json();
      res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=3b7363a01be6f1a1d6dd6cc797d1107a`)
      data = await res.json();
      setIconCode(data.weather[0].icon);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div>
        <div>
          <b>ZIP CODE</b>
          <input type="text" value={zipCode} onChange={onZipCodeChange} />
        </div>
        <div>
          <b>COUNTRY CODE</b>
          <input type="text" value={countryCode} onChange={onCountryCodeChange}/>
        </div>
        <Link href={`/resultPage`}>
          <button onClick={callWeatherAPI}>Get Weather now!</button>
        </Link>
    </div>
  )
}
