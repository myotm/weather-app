import WeatherComponent from '../components/WeatherComponent';
import ForecastComponent from '../components/ForecastComponent';
import 'tailwindcss/tailwind.css'

const Home = () => {

  return (
    <div>
      <div className='text-center w-1/2 m-32 sm:m-60'>
        <WeatherComponent />
    </div>
    <div className='text-center w-1/2 m-32 sm:m-60'>
        <ForecastComponent />
    </div>
    </div>
    
  )
}

export default Home
