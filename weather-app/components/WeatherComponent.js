import React from 'react'

export default function WeatherComponent() {

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

  const callCoordinatesAPI = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=3b7363a01be6f1a1d6dd6cc797d1107a`);
      const data = await res.json();
      res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=3b7363a01be6f1a1d6dd6cc797d1107a`)
      data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  


  return (
    <div>
        <div className="search">
            <input type="text" value={zipCode} onChange={onZipCodeChange} />
            <input type="text" value={countryCode} onChange={onCountryCodeChange}/>
        </div>
        <button onClick={callCoordinatesAPI}>Get GeoCoordinates now!</button>
    </div>
  )
}
