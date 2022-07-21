import React from 'react'
import Link from 'next/link';
import ResultPage from '../pages/resultPage';

export default function WeatherComponent() {

  const [zipCode, setZipCode] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("");

  const [iconCode, setIconCode] = React.useState("");
  const [temperature, setTemperature] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [location, setLocation] = React.useState("");
  

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
      setDescription(data.weather[0].description);
      setTemperature(((data.main.temp - 273.15).toFixed(2))); // subtract 273.15 to convert from Kelvin to Celsius
      setLocation(data.name);
    } catch (err) {
      alert(err);
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
        <Link href={`/`}>
          <button onClick={callWeatherAPI}>Get Weather now!</button>
        </Link>
        <ul>
          <li>{iconCode}</li>
          <li>{description}</li>
          <li>{temperature}</li>
          <li>{location}</li>
        </ul>
    </div>
  )
}
