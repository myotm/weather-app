import WeatherComponent from '../components/WeatherComponent';
import ForecastComponent from '../components/ForecastComponent';
import 'tailwindcss/tailwind.css'

const Home = () => {

  return (
    <div className='flex flex-col w-full items-center'>
      <div className='text-center w-72 m-10 sm:m-24'>
        <WeatherComponent />
    </div>
    <div className='text-center w-72 m-10 sm:m-24'>
        <ForecastComponent />
    </div>
    </div>
    
  )
}

export default Home
