import { getRandomInteger, getRandomArrayItems } from "./utils";
import Stormy from "../assets/icons/weather/stormy.png";
import Cloudy from "../assets/icons/weather/cloudy.png";
import Sunny from "../assets/icons/weather/sunny.png";
import Rain from "../assets/icons/weather/rain.png";
import SunAndRain from "../assets/icons/weather/sun-and-rain.png";
import HeavyRain from "../assets/icons/weather/heavy-rain.png";

const MOCK_CITIES = ["Stockholm", "Västerås", "Örebro", "Gothenburg"];

const MOCK_WEATHER = [
  {
    name: "Stormy",
    icon: Stormy,
  },
  {
    name: "Cloudy",
    icon: Cloudy,
  },
  {
    name: "Sunny",
    icon: Sunny,
  },
  {
    name: "Rain",
    icon: Rain,
  },
  {
    name: "Sun and Rain",
    icon: SunAndRain,
  },
  {
    name: "Heavy Rain",
    icon: HeavyRain,
  },
];

const MOCK_UV = [
  {
    condition: "Low",
    restOfDay: "Low",
  },
  {
    condition: "High",
    restOfDay: "High",
  },
];

export const generateMockWeather = () => {
  const conditionNow = getRandomArrayItems(MOCK_WEATHER, 1, false);
  const tempNow = getRandomInteger(0, 30);
  const UVNow = getRandomArrayItems(MOCK_UV, 1, false);
  const mockWeather = {
    weatherNow: {
      locationName: getRandomArrayItems(MOCK_CITIES, 1, false),
      temperature: tempNow,
      condition: conditionNow[0].name,
      high: getRandomInteger(0, 30),
      low: getRandomInteger(0, 30),
    },
    hourly: [
      {
        label: "Now",
        temperature: tempNow,
        condition: conditionNow[0].icon,
      },
      {
        label: "10pm",
        temperature: getRandomInteger(0, 30),
        condition: getRandomArrayItems(MOCK_WEATHER, 1, false)[0].icon,
      },
      {
        label: "11pm",
        temperature: getRandomInteger(0, 30),
        condition: getRandomArrayItems(MOCK_WEATHER, 1, false)[0].icon,
      },
      {
        label: "12am",
        temperature: getRandomInteger(0, 30),
        condition: getRandomArrayItems(MOCK_WEATHER, 1, false)[0].icon,
      },
      {
        label: "1am",
        temperature: getRandomInteger(0, 30),
        condition: getRandomArrayItems(MOCK_WEATHER, 1, false)[0].icon,
      },
    ],
    eightDays: [
      {
        label: "Today",
        temperature: tempNow,
        condition: conditionNow[0].icon,
        humidity: getRandomInteger(0, 100),
        min: getRandomInteger(0, 30),
        max: getRandomInteger(0, 30),
      },
      {
        label: "Mon",
        temperature: tempNow,
        condition: getRandomArrayItems(MOCK_WEATHER, 1, false)[0].icon,
        humidity: getRandomInteger(0, 100),
        min: getRandomInteger(0, 30),
        max: getRandomInteger(0, 30),
      },
      {
        label: "Tue",
        temperature: tempNow,
        condition: getRandomArrayItems(MOCK_WEATHER, 1, false)[0].icon,
        humidity: getRandomInteger(0, 100),
        min: getRandomInteger(0, 30),
        max: getRandomInteger(0, 30),
      },
      {
        label: "Wed",
        temperature: tempNow,
        condition: getRandomArrayItems(MOCK_WEATHER, 1, false)[0].icon,
        humidity: getRandomInteger(0, 100),
        min: getRandomInteger(0, 30),
        max: getRandomInteger(0, 30),
      },
      {
        label: "Thu",
        temperature: tempNow,
        condition: getRandomArrayItems(MOCK_WEATHER, 1, false)[0].icon,
        humidity: getRandomInteger(0, 100),
        min: getRandomInteger(0, 30),
        max: getRandomInteger(0, 30),
      },
      {
        label: "Fri",
        temperature: tempNow,
        condition: getRandomArrayItems(MOCK_WEATHER, 1, false)[0].icon,
        humidity: getRandomInteger(0, 100),
        min: getRandomInteger(0, 30),
        max: getRandomInteger(0, 30),
      },
      {
        label: "Sat",
        temperature: tempNow,
        condition: getRandomArrayItems(MOCK_WEATHER, 1, false)[0].icon,
        humidity: getRandomInteger(0, 100),
        min: getRandomInteger(0, 30),
        max: getRandomInteger(0, 30),
      },
      {
        label: "Sun",
        temperature: tempNow,
        condition: getRandomArrayItems(MOCK_WEATHER, 1, false)[0].icon,
        humidity: getRandomInteger(0, 100),
        min: getRandomInteger(0, 30),
        max: getRandomInteger(0, 30),
      },
    ],
    moreData: {
      uVIndex: {
        number: getRandomInteger(0, 30),
        text: UVNow[0].condition,
        restOfDay: UVNow[0].restOfDay,
      },
      sunrise: {
        time: getRandomInteger(0, 12),
        sunset: getRandomInteger(0, 12),
      },
      wind: {
        deg: getRandomInteger(0, 360),
      },
      rainfall: {
        current: getRandomInteger(0, 10),
        next: getRandomInteger(0, 10),
      },
      feelsLike: {
        current: getRandomInteger(0, 100),
        isSimilar: true,
      },
      humidity: {
        current: getRandomInteger(0, 100),
        dew: getRandomInteger(0, 20),
      },
    },
  };
  return mockWeather;
};
