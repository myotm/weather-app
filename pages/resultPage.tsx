import React from 'react'
import WeatherCard from '../cards/weatherCard';

type Props = {
    icon: string;
    description: string;
    temperature: number;
    location: string;
};

const ResultPage = ({icon, description, temperature, location}: Props) => {

  return (
    <div>
        <WeatherCard icon={icon} description={description} temperature={temperature} location={location}></WeatherCard>
    </div>
    
  )
}

export default ResultPage;
