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
        } else {
            weatherTime += dateTime[i];
        }
    }

    const [year, month, day] = weatherDate.split('-');
    const [hour, minute, seconds] = weatherTime.split(':');

    const getDayOfWeek = (date : string) => {
        const d = new Date(date);
        let day = d.getDay();
        if (day == 0){
            return "Sun";
        } else if (day == 1){
            return "Mon";
        } else if (day == 2){
            return "Tues";
        } else if (day == 3){
            return "Wed";
        } else if (day == 4){
            return "Thurs";
        } else if (day == 5){
            return "Fri";
        } else if (day == 6){
            return "Sat";
        };
    }

    const getNameOfMonth = (date : string) => {
        const d = new Date(date);
        let day = d.getMonth();
        if (day == 0){
            return "Jan";
        } else if (day == 1){
            return "Feb";
        } else if (day == 2){
            return "Mar";
        } else if (day == 3){
            return "Apr";
        } else if (day == 4){
            return "May";
        } else if (day == 5){
            return "Jun";
        } else if (day == 6){
            return "Jul";
        } else if (day == 7){
            return "Aug";
        } else if (day == 8){
            return "Sep";
        } else if (day == 9){
            return "Oct";
        } else if (day == 10){
            return "Nov";
        } else if (day == 11){
            return "Dec";
        };
    }

  return (
        <div className='flex rounded-lg border border-gray-200 shadow-md bg-blue-500'>
            <img className='rounded-t-lg ' src={iconURL} />
            <div className='w-full justify-center items-center text-center bg-white'>
                <h5 className="m-2 text-2xl font-bold tracking-tight text-gray-900">
                    {location}
                </h5>
                <p className="m-3 text-xs font-normal text-gray-700 ">
                    {description}
                </p>
                <p className="m-3 text-xl font-bold text-gray-700 ">
                    {temperature}
                </p>
                <p className='m-3 text-xs font-normal text-gray-700'>
                    {getDayOfWeek(weatherDate)}, {getNameOfMonth(weatherDate)}
                </p>
                <p className='m-3 text-xs font-normal text-gray-700'>
                    {(Number(hour) > 12 ?  Number(hour) - 12 : Number(hour))}:{minute}
                </p>
            </div>
            
            
        </div>
        
  )
}

export default WeatherCard;