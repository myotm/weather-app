import React from 'react'
import { useRouter } from 'next/router';

export default function WeatherComponent() {
  const router = useRouter();
  const [zipCode, setZipCode] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("");

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
      router.push({
        pathname: '/resultPage',
        query: {
          icon: data.weather[0].icon,
          description: data.weather[0].description,
          temperature: ((data.main.temp - 273.15).toFixed(1)), // subtract 273.15 to convert from Kelvin to Celsius
          location: data.name
        }
      });
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit= {(e) => { e.preventDefault(); 
        callWeatherAPI()}} >
        <label for="zipCode">Zip Code</label>
        <input type="text" id="zipCode" name="zipCode" value={zipCode} onChange={onZipCodeChange} />
        <label for="countryCode">Country Code</label>
        <input type="text" id="countryCode" name="countryCode" value={countryCode} onChange={onCountryCodeChange} />
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}
