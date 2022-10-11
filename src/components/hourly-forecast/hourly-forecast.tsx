import { useState } from "react";
import CalenderIcon from "../../assets/icons/calender.png";
import CloudMoonIcon from "../../assets/icons/cloudmoon.png";
import styles from "./hourly-forecast.module.css";

function HourlyForecast() {
  return (
    <div className={styles["hourly-forecast"]}>
      <div className={styles.title}>
        <img className={styles["calendar-icon"]} src={CalenderIcon} />
        <h2>Hourly Forecast</h2>
      </div>
      <hr />
      <ul className={styles.forecast}>
        <li className={styles.day}>
          <p>Now</p>
          <img className={styles["weather-img"]} src={CloudMoonIcon} />
          <p className={styles.temp}>21°</p>
        </li>
        <li className={styles.day}>
          <p>10PM</p>
          <img className={styles["weather-img"]} src={CloudMoonIcon} />
          <p className={styles.temp}>21°</p>
        </li>
        <li className={styles.day}>
          <p>11PM</p>
          <img className={styles["weather-img"]} src={CloudMoonIcon} />
          <p className={styles.temp}>19°</p>
        </li>
        <li className={styles.day}>
          <p>12AM</p>
          <img className={styles["weather-img"]} src={CloudMoonIcon} />
          <p className={styles.temp}>19°</p>
        </li>
        <li className={styles.day}>
          <p>1AM</p>
          <img className={styles["weather-img"]} src={CloudMoonIcon} />
          <p className={styles.temp}>19°</p>
        </li>
      </ul>
    </div>
  );
}

export default HourlyForecast;
