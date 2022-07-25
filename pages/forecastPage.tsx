import React, { useEffect } from 'react'
import WeatherCard from '../cards/weatherCard';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css'


const ForecastPage = () => {
    const router = useRouter();
    const {cityName,setCityName} = router.query;

    const [weatherArray, setWeatherArray] = React.useState([]);
    const backButtonPressed = async () => {
        try{
          router.push('/');
        } catch (err) {
          console.log(err);
        }
      };

      const callForecastAPI = async () => {
        try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=3b7363a01be6f1a1d6dd6cc797d1107a`)
        const data = await res.json();
        const city = data.city.name;
        setWeatherArray(data.list.map((item : any) => ({ 
          icon: item.weather[0].icon, 
          description: item.weather[0].description,
          temperature: (item.main.temp - 273.15).toFixed(1) + '°C',
          location: city as string,
          dateTime: item.dt_txt
        })));
        
        } catch (err) {
        console.log(err);
        }
    }

    useEffect(() => {
      callForecastAPI();
    }, []);

    return (
        <div className='flex flex-col w-full items-center'>
            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-2 px-4 m-1 justify-center rounded' onClick={backButtonPressed} >Go Back</button>
            <div className='grid grid-flow-row grid-cols-1 grid-rows-3 w-3/4 sm:grid-cols-3 sm:w-auto lg:grid-cols-5 gap-4 '>
              {weatherArray.length > 0 && weatherArray.map((item : any, index) => {
                return (
                  <WeatherCard key={index} icon={item.icon as string} 
                  description={item.description as string} temperature={item.temperature as string} location={item.location as string} 
                  dateTime={item.dateTime as string}/>
                )
              })}
            </div>
            
        </div>
    )
}

export default ForecastPage;