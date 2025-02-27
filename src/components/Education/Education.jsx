import React from "react";

import styles from "./Education.module.css";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        {/* <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div> */}
        <ul className={styles.history}>
          {education.map((item, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(item.imageSrc)}
                  alt={`${item.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${item.degree}`}</h3>
                  <h4>{`${item.organisation} | ${item.location}`}</h4>
                  <p>{`${item.startDate} - ${item.endDate}`}</p>
                  <ul>
                    {item.coursework.map((course, id) => {
                      return <li key={id}>{course}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
