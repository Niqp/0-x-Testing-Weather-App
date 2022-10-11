import { useState } from "react";
import CalenderIcon from "../../assets/icons/calender.png";
import CloudMoonIcon from "../../assets/icons/cloudmoon.png";
import styles from "./10-day-forecast.module.css";

function TenDayForecast() {
  return (
    <div className={styles["ten-day-forecast"]}>
      <div className={styles.title}>
        <img className={styles["calendar-icon"]} src={CalenderIcon} />
        <h2>10-Day Forecast</h2>
      </div>
      <hr />
      <ul className={styles.forecast}>
        <li className={styles.day}>
          <p>Today</p>
          <div className={styles["icon-and-humidity"]}>
            <img src={CloudMoonIcon} />
            <p className={styles.humidity}></p>
          </div>
          <p className={styles["temp-min"]}>21°</p>
          <div className={styles["empty-bar"]}></div>
          <p className={styles["temp-max"]}>21°</p>
        </li>
        <li className={styles.day}>
          <p>Today</p>
          <div className={styles["icon-and-humidity"]}>
            <img src={CloudMoonIcon} />
            <p className={styles.humidity}>60%</p>
          </div>
          <p className={styles["temp-min"]}>21°</p>
          <div className={styles["empty-bar"]}></div>
          <p className={styles["temp-max"]}>21°</p>
        </li>
        <li className={styles.day}>
          <p>Today</p>
          <div className={styles["icon-and-humidity"]}>
            <img src={CloudMoonIcon} />
            <p className={styles.humidity}>60%</p>
          </div>
          <p className={styles["temp-min"]}>21°</p>
          <div className={styles["empty-bar"]}></div>
          <p className={styles["temp-max"]}>21°</p>
        </li>
        <li className={styles.day}>
          <p>Today</p>
          <div className={styles["icon-and-humidity"]}>
            <img src={CloudMoonIcon} />
            <p className={styles.humidity}>50%</p>
          </div>
          <p className={styles["temp-min"]}>21°</p>
          <div className={styles["empty-bar"]}></div>
          <p className={styles["temp-max"]}>21°</p>
        </li>
        <li className={styles.day}>
          <p>Today</p>
          <div className={styles["icon-and-humidity"]}>
            <img src={CloudMoonIcon} />
            <p className={styles.humidity}>50%</p>
          </div>
          <p className={styles["temp-min"]}>21°</p>
          <div className={styles["empty-bar"]}></div>
          <p className={styles["temp-max"]}>21°</p>
        </li>
        <li className={styles.day}>
          <p>Today</p>
          <div className={styles["icon-and-humidity"]}>
            <img src={CloudMoonIcon} />
            <p className={styles.humidity}>50%</p>
          </div>
          <p className={styles["temp-min"]}>21°</p>
          <div className={styles["empty-bar"]}></div>
          <p className={styles["temp-max"]}>21°</p>
        </li>
        <li className={styles.day}>
          <p>Today</p>
          <div className={styles["icon-and-humidity"]}>
            <img src={CloudMoonIcon} />
            <p className={styles.humidity}>50%</p>
          </div>
          <p className={styles["temp-min"]}>21°</p>
          <div className={styles["empty-bar"]}></div>
          <p className={styles["temp-max"]}>21°</p>
        </li>
        <li className={styles.day}>
          <p>Today</p>
          <div className={styles["icon-and-humidity"]}>
            <img src={CloudMoonIcon} />
            <p className={styles.humidity}>50%</p>
          </div>
          <p className={styles["temp-min"]}>21°</p>
          <div className={styles["empty-bar"]}></div>
          <p className={styles["temp-max"]}>21°</p>
        </li>
        <li className={styles.day}>
          <p>Today</p>
          <div className={styles["icon-and-humidity"]}>
            <img src={CloudMoonIcon} />
            <p className={styles.humidity}>50%</p>
          </div>
          <p className={styles["temp-min"]}>21°</p>
          <div className={styles["empty-bar"]}></div>
          <p className={styles["temp-max"]}>21°</p>
        </li>
        <li className={styles.day}>
          <p>Today</p>
          <div className={styles["icon-and-humidity"]}>
            <img src={CloudMoonIcon} />
            <p className={styles.humidity}>50%</p>
          </div>
          <p className={styles["temp-min"]}>21°</p>
          <div className={styles["empty-bar"]}></div>
          <p className={styles["temp-max"]}>21°</p>
        </li>
      </ul>
    </div>
  );
}

export default TenDayForecast;
