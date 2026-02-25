import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.container}>
          <svg viewBox="0 0 200 50" className={styles.ecg}>
            <polyline
              fill="none"
              stroke="#e63946"
              strokeWidth="3"
              points="0,25 30,25 40,10 50,40 60,25 90,25 100,15 110,35 120,25 200,25"
            />
          </svg>
          <p className={styles.text}>Scanning nearby hospitals...</p>
        </div>
      );
};

export default Loader;