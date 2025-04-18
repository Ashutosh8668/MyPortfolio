import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ashutosh.rajput@mitaoe.ac.in">a.rajput866843@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ashutosh-rajput-8736b0257">www.linkedin.com/in/ashutosh-rajput-8736b0257</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Ashutosh8668">https://github.com/Ashutosh8668</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/codechef.png")} alt="Codechef icon" />
          <a href="https://www.codechef.com/users/ashx9">https://www.codechef.com/users/ashx9</a>
        </li>
         <li className={styles.link}>
          <img src={getImageUrl("contact/leetcode.png")} alt="Leetcode icon" />
          <a href="https://leetcode.com/u/AVRaj45/">https://leetcode.com/u/AVRaj45/</a>
        </li>
      </ul>
    </footer>
  );
};
