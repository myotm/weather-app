import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const callAPI = async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={3b7363a01be6f1a1d6dd6cc797d1107a}`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <div className={styles.container}>
			<main className={styles.main}>
				<button onClick={callAPI}>Make API call</button>
			</main>
		</div>
  )
}

export default Home
