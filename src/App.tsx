import { useState } from "react";
import styles from "./app.module.css";
import EightDayForecast from "./components/8-day-forecast/8-day-forecast";
import HourlyForecast from "./components/hourly-forecast/hourly-forecast";
import MainWeather from "./components/main-weather/main-weather";
import MoreInfo from "./components/more-info/more-info";
import { generateMockWeather } from "./utils/generate-mock-data";

function App() {
  const [weather, setWeather] = useState(generateMockWeather());
  return (
    <main className={styles.app}>
      <MainWeather currentWeather={weather.weatherNow} />
      <div className={styles.scroll}>
        <HourlyForecast hourly={weather.hourly} />
        <EightDayForecast eightDays={weather.eightDays} />
        <MoreInfo moreData={weather.moreData} />
        <div className={styles.wrapper}></div>
      </div>
    </main>
  );
}

export default App;
