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
        // <div className='lg:p-4 md:w-full flex justify-center mt-40 border shadow-md rounded-lg'>
        //     <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg'>
        //         <img className='w-full' src={iconURL} />
        //         <div className='px-6 py-4 lg:h-44'>
        //             <div className='title-font text-lg font-medium mb-2'>
        //                 <span className='no-underline text-gray-900'>
        //                     {location}    
        //                 </span> 
        //                 <p className='text-gray-700 text-base'>
        //                     {description}
        //                 </p>
        //             </div>
        //             <div className='px-6 pt-4 pb-2'>
        //                 <span className='inline-block bg-purple-700 text-white px-4 py-2 text-sm font-semibold mb-3 rounded-full'>
        //                     {temperature} 'C
        //                 </span>
        //             </div>
        //         </div>
        //     </div>
        // </div>

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
                {temperature}
                </p>
            </div>
            
        </div>
        
  )
}

export default WeatherCard;