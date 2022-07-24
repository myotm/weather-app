import { time } from 'console';
import React from 'react'
import 'tailwindcss/tailwind.css'

type Props = {
    icon: string;
    description: string;
    temperature: string;
    location: string;
    dateTime: string;
};

const WeatherCard = ({icon, description, temperature, location, dateTime}: Props) => {

    const iconURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"

    var weatherDate = '';
    var weatherTime = '';
    
    for(var i=0; i<dateTime.length; i++){
        if(i < 10){
            weatherDate += dateTime[i];
        } if (i>10) {
            weatherTime += dateTime[i];
        }
    }

    var [year, month, day] = weatherDate.split('-');
    var [hour, minute, seconds] = weatherTime.split(':');

  return (
        <div className='flex w-96 rounded-lg border border-gray-200 shadow-md bg-blue-500'>
            <img className='rounded-t-lg' src={iconURL} />
            <div className='w-full justify-center items-center text-center bg-white'>
                <h5 className="m-2 text-2xl font-bold tracking-tight text-gray-900">
                    {location}
                </h5>
                <p className="m-3 text-xs font-normal text-gray-700 ">
                    {description}
                </p>
                <p className="m-3 font-normal text-gray-700 ">
                    {temperature}
                </p>
                <p className='m-3 text-xs font-normal text-gray-700'>
                    {day}/{month}/{year}
                </p>
                <p className='m-3 text-xs font-normal text-gray-700'>
                    {hour}:{minute}
                </p>
            </div>
            
            
        </div>
        
  )
}

export default WeatherCard;