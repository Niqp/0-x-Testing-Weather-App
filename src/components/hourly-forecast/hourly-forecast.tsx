import { useEffect, useRef, useState } from "react";
import CalenderIcon from "../../assets/icons/calender.png";
import CloudMoonIcon from "../../assets/icons/cloudmoon.png";
import styles from "./hourly-forecast.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CLIENT_WIDTH } from "../../const";

function HourlyForecast(props: {
  hourly: {
    label: string;
    temperature: number;
    condition: string;
  }[];
}) {
  const comp = useRef(null);

  useEffect(() => {
    if (document.documentElement.clientWidth <= CLIENT_WIDTH) {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles["hourly-forecast"]}`,
          start: "top 200px",
          end: "bottom 200",
          scrub: 1,
          fastScrollEnd: 500,
        },
      });
      // TODO: figure out how to fix the animation
      // .to(`.${styles["forecast--wrapper"]}`, { height: "0px" }).
      tl.to(
        `.${styles["hourly-forecast"]}`,
        { opacity: 0 }
      );
    }, comp);
    return () => ctx.revert();
  }
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
            {props.hourly.map((entry,index) => {
              return (
                <li className={styles.day} key={index}>
                  <p>{entry.label}</p>
                  <img
                    className={styles["weather-img"]}
                    src={entry.condition}
                  />
                  <p className={styles.temp}>{entry.temperature}°</p>
                </li>
              );
            })}
            {/* <li className={styles.day}>
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
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast;
