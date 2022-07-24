import React from 'react'
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css";


export default function ForecastComponent() {

    const router = useRouter();
    const [city, setCity] = React.useState("");
    
    

    const onCityChange = (e) => {
        const {value}  = e.target;
        setCity(value);
    };

    const onCityNameSubmit = () => {
        router.push({
            pathname: '/forecastPage',
            query: {
                cityName: city
            }
        });
    }


  return (
    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 justify-center ' onSubmit= {(e) => { e.preventDefault(); 
        onCityNameSubmit()}} >
        <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2" for="zipCode'>City Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
            type="text" id="city" name="city" value={city} onChange={onCityChange} />
        </div>
        <div className='mb-4 flex justify-center'>
            <button className='text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button'
                type="submit" >Submit</button>
        </div>
    </form>
  )
}
