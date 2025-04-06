import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <img
        src={getImageUrl("hero/IMG_7517.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
        <h1 className={styles.title}>Nishit Shah</h1>
        <h1 className={styles.subtitle}>Making Data Speak for Smarter Decisions</h1>
        <p className={styles.description}>
          Data Analyst based in United States! 
          I specialize in SQL, Python, Tableau, and BigQuery to turn data into actionable insights. 
          Passionate about problem-solving and data storytelling, I thrive on uncovering trends and optimizing decisions.
        </p>
        <div className={styles.buttoncontainer}>
        <a href="https://www.linkedin.com/in/nishit-shah-150250215/" className={styles.contactBtn} target="_blank" rel="noopener noreferrer" >
          LinkedIn
        </a>
        <a href="assets/resume/Nishit_Shah_Resume_Data_analytics.pdf" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        </div>
      </div>
     
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
