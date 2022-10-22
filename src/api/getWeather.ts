import {
  DAILY_DAYS_SHOWN,
  DAY_NAMES,
  FEELS_LIKE_RELATIVE_NUMBER,
  HOURLY_HOURS_SHOWN,
} from "../const";
import { getRandomInteger } from "../utils/utils";

const API_ID = "df8a98e21831005c433b5a51e5e9cfd4";

const generateAPILink = (latitude: number,longitude: number) => {
  return `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,alerts&appid=${API_ID}`
}

const parseTimezoneToCity = (timezone: string) => {
  const stringArray = timezone.split("/");
  return stringArray[stringArray.length - 1].replace("_", " ");
};

const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const convertToAmPm = (hour: number) => {
    const ampm = hour>=12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    return hour + ampm
};

const getWeatherIcon = (iconCode: string) => {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

const generateDayNames = (currentDay: number, daysToGenerate: number) => {
  let day = currentDay;
  let dayNames = [];
  for (let i = 0; i < daysToGenerate; i++) {
    day += 1;
    if (day > 6) {
      day = 0;
    }
    dayNames.push(DAY_NAMES[day]);
  }
  return dayNames;
};

const calculateUVRisk = (uv: number) => {
  if (uv < 2) return "Low";
  if (uv > 2 && uv <= 5) return "Medium";
  if (uv > 5 && uv <= 7) return "High";
  if (uv > 7 && uv <= 10) return "Very High";
  if (uv > 10) return "Extreme";
  return "Unknown"
};

const getSunTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const hoursString =
    hours.toString().length < 2 ? `0` + hours.toString() : hours.toString();
  const minutesString =
    minutes.toString().length < 2 ? `0` + minutes.toString() : minutes.toString();
  return `${hoursString}:${minutesString}`;
};

const adaptToClient = (data: any) => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentDay = currentDate.getDay();
  const currentTemp = Math.round(data.current.temp);
  const currentFeelsLike = Math.round(data.current.feels_like);
  const days = generateDayNames(currentDay, DAILY_DAYS_SHOWN);
  const uVRisk = calculateUVRisk(data.current.uvi);
  const sunriseTime = new Date(data.current.sunrise * 1000);
  const sunsetTime = new Date(data.current.sunset * 1000);
  const adaptedWeather = {
    weatherNow: {
      locationName: parseTimezoneToCity(data.timezone),
      temperature: currentTemp,
      condition: capitalizeFirstLetter(data.current.weather[0].description),
      max: Math.round(data.daily[0].temp.max),
      min: Math.round(data.daily[0].temp.min),
    },
    hourly: new Array(HOURLY_HOURS_SHOWN).fill(null).map((hour, index) => {
      if (index === 0) {
        return {
          label: "Now",
          temperature: currentTemp,
          condition: getWeatherIcon(data.current.weather[0].icon),
        };
      } else {
        return {
          label: convertToAmPm(currentHour + index),
          temperature: Math.round(data.hourly[index - 1].temp),
          condition: getWeatherIcon(data.hourly[index - 1].weather[0].icon),
        };
      }
    }),
    eightDays: new Array(DAILY_DAYS_SHOWN).fill(null).map((day, index) => {
      if (index === 0) {
        return {
          label: "Today",
          temperature: currentTemp,
          condition: getWeatherIcon(data.current.weather[0].icon),
          max: Math.round(data.daily[0].temp.max),
          min: Math.round(data.daily[0].temp.min),
        };
      } else {
        return {
          label: days[index - 1],
          temperature: Math.round(data.daily[index - 1].temp.day),
          condition: getWeatherIcon(data.daily[index - 1].weather[0].icon),
          max: Math.round(data.daily[index - 1].temp.max),
          min: Math.round(data.daily[index - 1].temp.min),
        };
      }
    }),
    moreData: {
      uVIndex: {
        number: data.current.uvi,
        text: uVRisk,
        restOfDay: uVRisk,
      },
      sunrise: {
        time: getSunTime(sunriseTime),
        sunset: getSunTime(sunsetTime),
      },
      wind: {
        deg: data.current.wind_deg,
      },
      rainfall: {
        current: getRandomInteger(0, 10),
        next: getRandomInteger(0, 10),
      },
      feelsLike: {
        current: currentFeelsLike,
        isSimilar:
          Math.abs(currentTemp - currentFeelsLike) >= FEELS_LIKE_RELATIVE_NUMBER
            ? false
            : true,
      },
      humidity: {
        current: data.current.humidity,
        dew: data.current.dew_point,
      },
    },
  };
  console.log(data);
  return adaptedWeather;
};

export const getWeather = async (lat: number, lon: number) => {
  const url = generateAPILink(lat,lon);
  const response = await fetch(url);
  const weather = await response.json();
  return adaptToClient(weather);
};
