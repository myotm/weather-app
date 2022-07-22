import WeatherComponent from '../components/WeatherComponent';
import 'tailwindcss/tailwind.css'

const Home = () => {

  return (
    <div className='text-center w-1/2 m-32 sm:m-60'>
        <WeatherComponent />
    </div>
  )
}

export default Home
