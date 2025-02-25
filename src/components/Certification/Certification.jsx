import React from "react";
import styles from "./Certification.module.css";
import certification from "../../data/certification.json";
import { getImageUrl } from "../../utils";

export const Certification = () => {
  return (
    <section className={styles.section} id="certification">
      <h2 className={styles.title}>CERTIFICATION</h2>
      <div className={styles.container}>
        {certification.map((certification, index) => (
          <div key={index} className={styles.skillSet}>
            <h3 className={styles.skillSetTitle}>{certification.title}</h3>
            <div className={styles.skills}>
              {/* {skillSet.skills.map((skill, id) => ( */}
                <div  className={styles.skill}>
                  { <img src={getImageUrl(certification.imageSrc)} alt={certification.title} />}
                 <a  className={styles.contactBtn} href={certification.link} target="_blank" rel="noopener noreferrer"><span>Show Credentials</span></a>
                </div>
    
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
