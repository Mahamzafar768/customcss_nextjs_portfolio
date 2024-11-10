// Skill.tsx
import React from "react";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiFigma } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { lusitana } from "@/components/fonts";
import styles from './Navbar.module.css';

const Skill = () => {
  return (
    <section id="skill" className={styles.skillSection}>
      <h1 className={`${lusitana.className} ${styles.skillHeading}`}>
        My <span className="font-bold text-3xl">Skills</span>
      </h1>

      <div className={styles.skillContainer}>
        {/* Skill Card for Next.js */}
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>
            <SiNextdotjs />
          </div>
          <h1 className={styles.skillCardTitle}>Next Js</h1>
          <div className={styles.skillProgress}>
            <div className={styles.skillProgressInner}></div>
          </div>
        </div>

        {/* Skill Card for React.js */}
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>
            <RiReactjsFill />
          </div>
          <h1 className={styles.skillCardTitle}>React Js</h1>
          <div className={styles.skillProgress}>
            <div className={styles.skillProgressInner}></div>
          </div>
        </div>

        {/* Skill Card for Tailwind CSS */}
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>
            <SiTailwindcss />
          </div>
          <h1 className={styles.skillCardTitle}>Tailwind CSS</h1>
          <div className={styles.skillProgress}>
            <div className={styles.skillProgressInner}></div>
          </div>
        </div>
      </div>

      <div className={styles.skillContainer}>
        {/* Skill Card for TypeScript */}
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>
            <SiTypescript />
          </div>
          <h1 className={styles.skillCardTitle}>TypeScript</h1>
          <div className={styles.skillProgress}>
            <div className={styles.skillProgressInner}></div>
          </div>
        </div>

        {/* Skill Card for JavaScript */}
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>
            <SiJavascript />
          </div>
          <h1 className={styles.skillCardTitle}>JavaScript</h1>
          <div className={styles.skillProgress}>
            <div className={styles.skillProgressInner}></div>
          </div>
        </div>

        {/* Skill Card for Figma */}
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>
            <SiFigma />
          </div>
          <h1 className={styles.skillCardTitle}>Figma</h1>
          <div className={styles.skillProgress}>
            <div className={styles.skillProgressInner}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
