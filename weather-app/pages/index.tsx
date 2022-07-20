import type { NextPage } from 'next'
import SearchBox from '../components/searchBox';
import CallGeoAPI from '../components/callGeoAPI';
import CallWeatherAPI from '../components/callWeatherAPI';

const Home: NextPage = () => {

  return (
    <div>
        <SearchBox />
        <CallGeoAPI />
        <CallWeatherAPI />
    </div>
  )
}

export default Home
