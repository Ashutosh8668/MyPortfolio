import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,<br /></h1>
        <h1 className={styles.title}>I'm Ashutosh Rajput</h1>
        <p className={styles.description}>
          I'm a full-stack developer passionate about building web applications 
          with React and Spring Boot. I love exploring new technologies and solving 
          real-world problems through code.
      </p>
        <a href="mailto:a.rajput86684@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.jpeg")}
        alt="My profile image of myself"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
