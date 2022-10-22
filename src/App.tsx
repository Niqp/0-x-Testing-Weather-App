import { useEffect, useState } from "react";
import { getWeather } from "./api/getWeather";
import styles from "./app.module.css";
import EightDayForecast from "./components/8-day-forecast/8-day-forecast";
import HourlyForecast from "./components/hourly-forecast/hourly-forecast";
import MainWeather from "./components/main-weather/main-weather";
import MoreInfo from "./components/more-info/more-info";
import { BACKGROUND_GRADIENTS } from "./const";
import { generateMockWeather } from "./utils/generate-mock-data";

let didInit = false;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState(generateMockWeather());
  const [message, setMessage] = useState("Loading...");
  const [background, setBackground] = useState(BACKGROUND_GRADIENTS.day);

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      console.log("i fire once");
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 11) {
        setBackground(BACKGROUND_GRADIENTS.morning);
      }
      if (hour >= 11 && hour < 17) {
        setBackground(BACKGROUND_GRADIENTS.day);
      }
      if (hour >= 17 && hour < 21) {
        setBackground(BACKGROUND_GRADIENTS.evening);
      }
      if (hour >= 21 || hour < 5) {
        setBackground(BACKGROUND_GRADIENTS.night);
      }
      fetchWeather();
    }
  }, []);

  const fetchWeather = async () => {
    const success = async (position: {
      coords: { latitude: any; longitude: any };
    }) => {
      setMessage("Loading data from server...");
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setWeather(await getWeather(latitude, longitude));
      console.log(weather);
      setIsLoading(false);
    };
    const error = () => {
      setMessage("Unable to retrieve your location.");
    };
    try {
      if (!navigator.geolocation) {
        setMessage("Geolocation is not supported in your browser.");
        return;
      }
      setMessage("Acquiring geolocation...");
      navigator.geolocation.getCurrentPosition(success, error);
    } catch {
      setMessage("Error loading data.");
    }
  };

  if (isLoading) {
    return (
      <main className={styles.app}>
        <div
          className={styles.background}
          style={{ background: background, backgroundAttachment: `fixed` }}
        ></div>

        {/* <button onClick={fetchWeather} className={styles.button}></button> */}
        <div className={styles.loading}>{message}</div>
      </main>
    );
  } else {
    return (
      <main className={styles.app}>
        <div
          className={styles.background}
          style={{ background: background, backgroundAttachment: `fixed` }}
        ></div>

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
