import React from 'react'
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css";

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
      const res = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=3b7363a01be6f1a1d6dd6cc797d1107a`);
      const data = await res.json();
      res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=3b7363a01be6f1a1d6dd6cc797d1107a`)
      data = await res.json();
      router.push({
        pathname: '/resultPage',
        query: {
          icon: data.weather[0].icon,
          description: data.weather[0].description,
          temperature: (data.main.temp - 273.15).toFixed(1)+ '°C', // subtract 273.15 to convert from Kelvin to Celsius
          location: data.name,
          dt: data.dt
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  

  return (
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 justify-center' onSubmit= {(e) => { e.preventDefault(); 
        callWeatherAPI()}} >
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2" for="zipCode'>Zip Code</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
          type="text" id="zipCode" name="zipCode" value={zipCode} onChange={onZipCodeChange} />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' >Country Code</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
           type="text" id="countryCode" name="countryCode" value={countryCode} onChange={onCountryCodeChange} />
        </div>
          <div className='mb-4 flex flex-col'>
            <button className=' text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button'
            type="submit" >Submit</button>
            <a className="font-bold text-xs text-blue-500 hover:text-blue-800" href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes">
            Do not know your country code?
            </a>
          </div>
          
      </form>
  )
}
