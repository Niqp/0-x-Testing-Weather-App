import { useEffect, useRef, useState } from "react";
import styles from "./main-weather.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MainWeather() {
  const [isCompact, setIsCompact] = useState(false);
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
        <h1>Seongnam-si</h1>
        <p className={styles.temperature}>21°</p>
        <div className={styles["divider"]}></div>
        <p className={styles.condition}>Partly Cloudy</p>
        <p className={styles.highlow}>H:29° L:15°</p>
      </div>
    </div>
  );
}

export default MainWeather;
