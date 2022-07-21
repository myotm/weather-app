import React from 'react'
import WeatherCard from '../cards/weatherCard';
import Weather from '../models/weather.model';

type Props = {
    weather: Weather;
};

const ResultPage = ({weather}: Props) => {

  return (
    <div>
        <WeatherCard weather={weather}></WeatherCard>
    </div>
    
  )
}

export default ResultPage;
