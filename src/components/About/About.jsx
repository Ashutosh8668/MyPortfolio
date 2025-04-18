import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutmeimg.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I build sleek, responsive UIs with React — bringing design to life with clean, accessible code.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I create secure, scalable APIs using Spring Boot & Node.js, turning ideas into robust systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloudIcon.png")} alt="Cloud icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Enthusiast</h3>
              <p>
                Passionate about deploying real-world apps on AWS with efficient, production-ready setups.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
