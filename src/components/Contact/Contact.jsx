import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <ul className={styles.links}>
         <li className={styles.link}>
          <img src={getImageUrl("contact/phone.png")} alt="Phone icon" />
          <a>+1 (940) 843-5986</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:nishitshah190@gmail.com">nishitshah190@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/nishit-shah190">Github</a>
        </li>
      </ul>
      <p className={styles.links}>© 2025 Nishit Shah. All rights reserved.</p>
    </footer>
  );
};
