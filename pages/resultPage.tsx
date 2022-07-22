import React from 'react'
import WeatherCard from '../cards/weatherCard';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css'

const ResultPage = () => {

    const router = useRouter();
    const {icon, description, temperature, location} = router.query;

    const backButtonPressed = async () => {
      try{
        router.push('/');
      } catch (err) {
        console.log(err);
      }
    };


  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <div className='flex gap-2 m-2'>
        <button onClick={backButtonPressed} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-2 px-4 rounded">
          Go Back
        </button>
        <button onClick={backButtonPressed} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-2 px-4 rounded">
          Get 5-day forecast!
        </button>
      </div>
      <WeatherCard icon={icon as string} description={description as string} temperature={temperature as string} location={location as string} ></WeatherCard>
    </div>
    
  )
}

export default ResultPage;
