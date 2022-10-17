import { useState } from "react";
import styles from "./app.module.css";
import TenDayForecast from "./components/10-day-forecast/10-day-forecast";
import HourlyForecast from "./components/hourly-forecast/hourly-forecast";
import MainWeather from "./components/main-weather/main-weather";
import MoreInfo from "./components/more-info/more-info";

function App() {
  return (
    <main className={styles.app}>
      <MainWeather />
      <div className={styles.scroll}>
        <HourlyForecast />
        <TenDayForecast />
        <MoreInfo />
        <div className={styles.wrapper}></div>
      </div>
    </main>
  );
}

export default App;
