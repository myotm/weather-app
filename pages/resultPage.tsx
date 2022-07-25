import React from 'react'
import WeatherCard from '../cards/weatherCard';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css'

const ResultPage = () => {

    const router = useRouter();
    const {icon, description, temperature, location, dt} = router.query;

    const getDateTimeFromDT = (dt : any) => {

      function padTo2Digits(num : number) {
          return num.toString().padStart(2, '0');
        }

      const unixTimestamp = Number(dt);

      const date = new Date(unixTimestamp * 1000);

      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      // 👇️ Format as hh:mm:ss
      const time = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds,
      )}`;

      const year = date.getFullYear();
      const month = padTo2Digits(date.getMonth() + 1);
      const day = padTo2Digits(date.getDate());

      const dateTime = `${year}-${month}-${day} ${time}`;

      return dateTime;

    }

    const backButtonPressed = async () => {
      try{
        router.push('/');
      } catch (err) {
        console.log(err);
      }
    };


  return (
    <div className='flex flex-col w-1/2 '>
      <div className='flex-col xs:flex gap-2 m-2 '>
        <button onClick={backButtonPressed} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-2 px-4 m-1 justify-center rounded">
          Go Back
        </button>
      </div>
      <WeatherCard icon={icon as string} description={description as string} temperature={temperature as string} location={location as string} dateTime={(getDateTimeFromDT(dt))} ></WeatherCard>
    </div>
    
  )
}

export default ResultPage;
