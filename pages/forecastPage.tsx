import React, { useEffect } from 'react'
import WeatherCard from '../cards/weatherCard';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css'


const ForecastPage = () => {
    const router = useRouter();
    const {cityName} = router.query;

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
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=161d16e18dd1caa5c7d82477dcebdbe4`)
        const data = await res.json();
        setWeatherArray(data.list.map((item : any) => ({ 
          icon: item.weather[0].icon, 
          description: item.weather[0].description,
          temperature: (item.main.temp - 273.15).toFixed(1) + '°C',
          location: cityName as string,
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
        <div className=''>
            <button onClick={backButtonPressed} >Go Back</button>
            <div className='grid grid-flow-row grid-cols-1 grid-rows-3 md:grid-cols-5 lg:grid-cols-8 gap-4'>
              {weatherArray.length > 0 && weatherArray.map((item : any, index) => {
                return (
                  <WeatherCard key={index} icon={item.icon as string} 
                  description={item.description as string} temperature={item.temperature as string} location={item.location as string} dateTime={item.dateTime as string}/>
                )
              })}
            </div>
            
        </div>
    )
}

export default ForecastPage;