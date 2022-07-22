import React from 'react'
import 'tailwindcss/tailwind.css'

type Props = {
    icon: string;
    description: string;
    temperature: string;
    location: string;
};

const WeatherCard = ({icon, description, temperature, location}: Props) => {

    const iconURL = "http://openweathermap.org/img/wn/"+icon+"@4x.png"
  return (
        <div className='flex w-96 rounded-lg border border-gray-200 shadow-md bg-blue-500'>
            <img className='rounded-t-lg' src={iconURL} />
            <div className='w-full justify-center items-center text-center bg-white'>
                <h5 className="m-2 text-2xl font-bold tracking-tight text-gray-900">
                    {location}
                </h5>
                <p className="m-3 font-normal text-gray-700 ">
                    {description}
                </p>
                <p className="m-3 font-normal text-gray-700 ">
                {temperature} 'C
                </p>
            </div>
            
        </div>
        
  )
}

export default WeatherCard;