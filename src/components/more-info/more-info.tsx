import { useEffect, useRef, useState } from "react";
import CalenderIcon from "../../assets/icons/calender.png";
import CloudMoonIcon from "../../assets/icons/cloudmoon.png";
import WindImage from "../../assets/more-info--graphics/Group.png";
import WindArrow from "../../assets/more-info--graphics/wind-arrow.png";
import UVIndex from "../../assets/icons/more-info/uv-index.png";
import Sunrise from "../../assets/icons/more-info/sunrise.png";
import Wind from "../../assets/icons/more-info/wind.png";
import Rainfall from "../../assets/icons/more-info/rainfall.png";
import FeelsLike from "../../assets/icons/more-info/feels-like.png";
import Humidity from "../../assets/icons/more-info/humidity.png";
import styles from "./more-info.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function MoreInfo(props: {
  moreData: {
    uVIndex: {
      number: number;
      text: string;
      restOfDay: string;
    };
    sunrise: {
      time: number;
      sunset: number;
    };
    wind: {
      deg: number;
    };
    rainfall: {
      current: number;
      next: number;
    };
    feelsLike: {
      current: number;
      isSimilar: boolean;
    };
    humidity: {
      current: number;
      dew: number;
    };
  };
}) {
  const comp = useRef(null);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.to(`.${styles["hourly-forecast"]}`, {
  //       height: "60px",
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: `.${styles["hourly-forecast"]}`,
  //         start: "top 200px",
  //         end: 300,
  //         scrub: 1,
  //         pin: true,
  //         // markers: true,
  //         pinSpacing: false,
  //         // toggleClass: {
  //         //   className: `${styles["main-weather--compact"]}`,
  //         //   targets: `.${styles["main-weather"]}`,
  //         // },
  //       },
  //     });
  //   }, comp);
  //   return () => ctx.revert();
  // }, []);

  return (
    <div ref={comp} className={styles["more-info--container"]}>
      <div className={styles["more-info"]}>
        <div className={styles["more-info--block"]}>
          <div className={styles.title}>
            <img className={styles.icon} src={UVIndex} />
            <h2>UV Index</h2>
          </div>
          <div className={styles["more-info--content"]}>
            <h3>{props.moreData.uVIndex.number}</h3>
            <div className={styles.text}>
              <p className={styles["bottom-large-text"]}>
                {props.moreData.uVIndex.text}
              </p>
              <p className={styles["bottom-small-text"]}>
                {props.moreData.uVIndex.restOfDay} for the rest of the day
              </p>
            </div>
          </div>
        </div>
        <div className={styles["more-info--block"]}>
          <div className={styles.title}>
            <img className={styles.icon} src={Sunrise} />
            <h2>Sunrise</h2>
          </div>
          <div className={styles["more-info--content"]}>
            <h3>{props.moreData.sunrise.time}:00AM</h3>
            <div className={styles.text}>
              <p className={styles["bottom-large-text"]}></p>
              <p className={styles["bottom-small-text"]}>
                Sunset {props.moreData.sunrise.sunset}:10PM
              </p>
            </div>
          </div>
        </div>
        <div className={styles["more-info--block"]}>
          <div className={styles.title}>
            <img className={styles.icon} src={Wind} />
            <h2>Wind</h2>
          </div>
          <div className={styles["more-info--content"]}>
            <img className={styles["wind-image"]} src={WindImage} />
            <img
              className={styles["wind-arrow"]}
              src={WindArrow}
              style={{
                transform: `scale(0.85) rotate(${props.moreData.wind.deg}deg)`,
              }}
            />
          </div>
        </div>
        <div className={styles["more-info--block"]}>
          <div className={styles.title}>
            <img className={styles.icon} src={Rainfall} />
            <h2>Rainfall</h2>
          </div>
          <div className={styles["more-info--content"]}>
            <h3>{props.moreData.rainfall.current}mm</h3>
            <div className={styles.text}>
              <p className={styles["bottom-large-text"]}>in last 24h</p>
              <p className={styles["bottom-small-text"]}>
                {props.moreData.rainfall.next}mm expected in next 24h.
              </p>
            </div>
          </div>
        </div>
        <div className={styles["more-info--block"]}>
          <div className={styles.title}>
            <img className={styles.icon} src={FeelsLike} />
            <h2>Feels like</h2>
          </div>
          <div className={styles["more-info--content"]}>
            <h3>{props.moreData.feelsLike.current}%</h3>
            <div className={styles.text}>
              <p className={styles["bottom-large-text"]}></p>
              <p className={styles["bottom-small-text"]}>
                {props.moreData.feelsLike.current
                  ? "Similar to the actual temperature"
                  : "Not similar to the actual temperature"}
              </p>
            </div>
          </div>
        </div>
        <div className={styles["more-info--block"]}>
          <div className={styles.title}>
            <img className={styles.icon} src={Humidity} />
            <h2>Humidity</h2>
          </div>
          <div className={styles["more-info--content"]}>
            <h3>{props.moreData.humidity.current}%</h3>
            <div className={styles.text}>
              <p className={styles["bottom-large-text"]}></p>
              <p className={styles["bottom-small-text"]}>
                The dew point is {props.moreData.humidity.dew}° right now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
