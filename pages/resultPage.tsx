import React from 'react'
import WeatherCard from '../cards/weatherCard';
import { useRouter } from 'next/router'

const ResultPage = () => {

    const router = useRouter();
    const {icon, description, temperature, location} = router.query;

  return (
    <div>
        <WeatherCard icon={icon as string} description={description as string} temperature={temperature as string} location={location as string} ></WeatherCard>
    </div>
    
  )
}

export default ResultPage;
