import { useEffect, useRef, useState } from "react";
import CalenderIcon from "../../assets/icons/calender.png";
import CloudMoonIcon from "../../assets/icons/cloudmoon.png";
import styles from "./hourly-forecast.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HourlyForecast() {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles["hourly-forecast"]}`,
          start: "top 200px",
          end: "center 230",
          scrub: 1,
          fastScrollEnd: 500,
        },
      });
      tl.to(`.${styles["forecast--wrapper"]}`, { height: "0px" }).to(
        `.${styles["hourly-forecast"]}`,
        { opacity: 0 }
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className={styles["hourly-forecast--container"]}>
      <div className={styles["hourly-forecast"]}>
        <div className={styles.title}>
          <img className={styles["calendar-icon"]} src={CalenderIcon} />
          <h2>Hourly Forecast</h2>
        </div>
        <hr />
        <div className={styles["forecast--wrapper"]}>
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
      </div>
    </div>
  );
}

export default HourlyForecast;
