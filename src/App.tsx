import { useEffect, useState } from "react";
import { getWeather } from "./api/getWeather";
import styles from "./app.module.css";
import EightDayForecast from "./components/8-day-forecast/8-day-forecast";
import HourlyForecast from "./components/hourly-forecast/hourly-forecast";
import MainWeather from "./components/main-weather/main-weather";
import MoreInfo from "./components/more-info/more-info";
import { WEATHER_API_URL } from "./const";
import { generateMockWeather } from "./utils/generate-mock-data";

let didInit = false;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState(generateMockWeather())
  const [message, setMessage] = useState("Loading data...")

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      console.log("i fire once");
      fetchWeather();
    }
  }, []);

  const fetchWeather = async () => {
    try {
    setWeather(await getWeather(WEATHER_API_URL));
    console.log(weather);
    setIsLoading(false);
    } catch {
      setMessage("Error loading data");
    }
  };

  if (isLoading) {
    return (
      <main className={styles.app}>
        {/* <button onClick={fetchWeather} className={styles.button}></button> */}
        <div className={styles.loading}>{message}</div>
      </main>
    );
  } else {
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
}

export default App;
