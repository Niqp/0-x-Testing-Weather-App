import { useEffect, useState } from "react";
import styles from "./main-weather.module.css";
import lax from "lax.js";

function MainWeather() {
  useEffect(() => {
    lax.init();

    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    lax.addElements(
      `.${styles["main-weather"]}`,
      {
        scrollY: {
          translateY: [
            [0, 1e9],
            [0, 1e9],
          ],
        },
      },
      []
    );
  }, []);

  return (
    <div className={styles["main-weather"]}>
      <h1>Seongnam-si</h1>
      <p className={styles.temperature}>21°</p>
      <p className={styles.condition}>Partly Cloudy</p>
      <p className={styles.highlow}>H:29° L:15°</p>
    </div>
  );
}

export default MainWeather;
