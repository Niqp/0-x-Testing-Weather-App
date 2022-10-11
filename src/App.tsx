import { useState } from 'react'
import styles from './app.module.css'
import TenDayForecast from './components/10-day-forecast/10-day-forecast'
import HourlyForecast from './components/hourly-forecast/hourly-forecast'
import MainWeather from './components/main-weather/main-weather'

function App() {

  return (
    <main className={styles.app}>
      <div className={styles.scroll}>
        <MainWeather/>
        <HourlyForecast/>
        <TenDayForecast/>
        <TenDayForecast/>
      </div>
    </main>
  )
}

export default App
