import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./main-weather.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MainWeather(props: {
  currentWeather: {
    locationName: string;
    temperature: number;
    condition: string;
    high: number;
    low: number;
  };
}) {
  const comp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(`.${styles["main-weather"]}`, {
        height: "100px",
        scrollTrigger: {
          trigger: `.${styles["main-weather"]}`,
          start: "top 5px",
          end: "70",
          scrub: 1,
          onEnter: () => {
            if (comp !== null) {
              comp.current?.firstElementChild?.classList.add(
                `${styles["main-weather--compact"]}`
              );
            }
          },
          onLeaveBack: () => {
            comp.current?.firstElementChild?.classList.remove(
              `${styles["main-weather--compact"]}`
            );
          },
        },
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className={styles["main-weather--container"]}>
      <div className={styles["main-weather"]}>
        <h1>{props.currentWeather.locationName}</h1>
        <p className={styles.temperature}>
          {props.currentWeather.temperature}°
        </p>
        <div className={styles["divider"]}></div>
        <p className={styles.condition}>{props.currentWeather.condition}</p>
        <p className={styles.highlow}>
          H:{props.currentWeather.high}° L:{props.currentWeather.high}°
        </p>
      </div>
    </div>
  );
}

export default MainWeather;
