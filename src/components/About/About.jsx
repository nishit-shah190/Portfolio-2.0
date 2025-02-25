import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/communication.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Effective Communicator</h3>
              <p>
              Bridging the gap between data and decision-makers by translating complex analytics into clear, actionable insights for both technical and non-technical audiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/analytics.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Strategic Visualizer</h3>
              <p>
               Transforming complex datasets into clear, impactful visualizations that help teams quickly grasp insights and makle informed decisions
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/solution.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Analytical Problem-Solver</h3>
              <p>
                Approaching data with a critical mindset, identifying patterns, trends, and solutions that drive business success.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
