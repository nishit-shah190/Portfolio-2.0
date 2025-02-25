import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.section} id="skills">
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.container}>
        {skills.map((skillSet, index) => (
          <div key={index} className={styles.skillSet}>
            <h3 className={styles.skillSetTitle}>{skillSet.title}</h3>
            <div className={styles.skills}>
              {skillSet.skills.map((skill, id) => (
                <div key={id} className={styles.skill}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  <span>{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
