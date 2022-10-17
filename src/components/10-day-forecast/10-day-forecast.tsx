import { useEffect, useRef, useState } from "react";
import CalenderIcon from "../../assets/icons/calender.png";
import CloudMoonIcon from "../../assets/icons/cloudmoon.png";
import styles from "./10-day-forecast.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function TenDayForecast() {
  const comp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles["ten-day-forecast"]}`,
          start: "top 370px",
          end: "+=100",
          scrub: 1,
          fastScrollEnd: 500,
        },
      });

      tl.to(`.${styles["forecast--wrapper"]}`, {
        height: "0px",
        duration: 2,
      }).to(`.${styles["ten-day-forecast"]}`, { opacity: 0, duration: 1 });

    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className={styles["ten-day-forecast--container"]}>
      <div className={styles["ten-day-forecast"]}>
        <div className={styles.title}>
          <img className={styles["calendar-icon"]} src={CalenderIcon} />
          <h2>10-Day Forecast</h2>
        </div>
        {/* <hr /> */}
        <div className={styles["forecast--wrapper"]}>
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
      </div>
    </div>
  );
}

export default TenDayForecast;
